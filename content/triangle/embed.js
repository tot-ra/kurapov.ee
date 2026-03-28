import { TriangleClient } from "./sdk-core.js";
async function fileToAttachment(file) {
    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    let binary = "";
    for (const b of bytes) {
        binary += String.fromCharCode(b);
    }
    const dataBase64 = btoa(binary);
    const mediaType = file.type || "application/octet-stream";
    return {
        type: mediaType.startsWith("audio/") ? "audio" : "image",
        name: file.name,
        mediaType,
        dataBase64
    };
}
export function createTriangleWidget(cfg) {
    const client = new TriangleClient({
        baseUrl: cfg.baseUrl,
        transport: "auto",
        defaultRecipientAgentId: cfg.recipientAgentId
    });
    let conversationId;
    cfg.mount.innerHTML = `
    <div style="font-family: ui-sans-serif, system-ui; width: 100%; max-width: 800px; margin: 0 auto; border: 1px solid #d4d4d8; border-radius: 14px; overflow: hidden; background: #fff;">
      <div data-role="messages" style="display:none; max-height:320px; overflow:hidden; padding:0; background:transparent;"></div>
      <div style="padding: 10px; border-top: 1px solid #e4e4e7;">
        <div style="display:flex; align-items:flex-end; gap:8px;">
          <img src="https://a2gent.net/logo.png" alt="" aria-hidden="true" style="width:46px;height:46px;object-fit:cover;display:block;border-radius:12px;flex:0 0 auto;" />
          <textarea data-role="input" rows="1" placeholder="Ask me anything..." style="flex:1; height:46px; min-height:46px; max-height:120px; box-sizing:border-box; resize:vertical; border:1px solid #d4d4d8; border-radius:10px; padding:10px 12px; text-align:left; font-family:inherit; font-size:14px; line-height:1.4;"></textarea>
          <input data-role="files" type="file" multiple accept="image/*,audio/*" style="display:none;" />
          <button data-role="file-pick" type="button" title="Attach files" style="width:46px;height:46px;border:1px solid #cbd5e1;background:#fff;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:#1d4ed8;">
            <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M7 10.5l4.8-4.8a2.7 2.7 0 0 1 3.9 3.8l-6.2 6.2a4.4 4.4 0 1 1-6.2-6.2l6.5-6.5" />
            </svg>
          </button>
          <button data-role="send" type="button" aria-label="Send" style="height:46px;background:#2563eb;color:white;border:none;border-radius:10px;padding:0 14px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;">
            <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
              <polygon points="4,3 17,10 4,17" fill="#93c5fd"></polygon>
            </svg>
          </button>
        </div>
        <div data-role="file-meta" style="display:none;font-size:12px;color:#64748b;margin-top:6px;"></div>
      </div>
    </div>
  `;
    const messages = cfg.mount.querySelector("[data-role=messages]");
    const input = cfg.mount.querySelector("[data-role=input]");
    const files = cfg.mount.querySelector("[data-role=files]");
    const filePick = cfg.mount.querySelector("[data-role=file-pick]");
    const fileMeta = cfg.mount.querySelector("[data-role=file-meta]");
    const sendBtn = cfg.mount.querySelector("[data-role=send]");
    let pendingAssistantNode = null;
    const updateMessagesVisibility = () => {
        const hasMessages = messages.childElementCount > 0;
        if (hasMessages) {
            messages.style.display = "block";
            messages.style.maxHeight = "320px";
            messages.style.overflow = "auto";
            messages.style.padding = "12px";
            messages.style.background = "#f6f8fb";
            return;
        }
        messages.style.display = "none";
        messages.style.maxHeight = "320px";
        messages.style.overflow = "hidden";
        messages.style.padding = "0";
        messages.style.background = "transparent";
    };
    const appendMessage = (role, text, attachments) => {
        const isUser = role === "You";
        const container = document.createElement("div");
        container.style.marginBottom = "10px";
        container.style.display = "flex";
        container.style.justifyContent = isUser ? "flex-end" : "flex-start";
        const frame = document.createElement("div");
        frame.style.maxWidth = "76%";
        frame.style.display = "grid";
        frame.style.gap = "4px";
        const roleLabel = document.createElement("div");
        roleLabel.style.fontSize = "12px";
        roleLabel.style.color = "#52525b";
        roleLabel.style.textAlign = isUser ? "right" : "left";
        roleLabel.textContent = role;
        const bubble = document.createElement("div");
        bubble.style.borderRadius = "10px";
        bubble.style.padding = "9px 11px";
        bubble.style.whiteSpace = "pre-wrap";
        bubble.style.textAlign = isUser ? "right" : "left";
        bubble.style.background = isUser ? "#2563eb" : "#ffffff";
        bubble.style.color = isUser ? "#ffffff" : "#0f172a";
        bubble.style.border = isUser ? "none" : "1px solid #e4e4e7";
        bubble.textContent = text || "";
        frame.appendChild(roleLabel);
        frame.appendChild(bubble);
        if (attachments?.length) {
            const mediaWrap = document.createElement("div");
            mediaWrap.style.display = "grid";
            mediaWrap.style.gap = "6px";
            mediaWrap.style.marginTop = "6px";
            for (const a of attachments) {
                if (a.type === "image") {
                    const src = a.url ?? `data:${a.mediaType ?? "image/png"};base64,${a.dataBase64 ?? ""}`;
                    const img = document.createElement("img");
                    img.src = src;
                    img.style.maxWidth = "280px";
                    img.style.borderRadius = "6px";
                    mediaWrap.appendChild(img);
                }
                else if (a.type === "audio") {
                    const src = a.url ?? `data:${a.mediaType ?? "audio/mpeg"};base64,${a.dataBase64 ?? ""}`;
                    const audio = document.createElement("audio");
                    audio.controls = true;
                    audio.src = src;
                    mediaWrap.appendChild(audio);
                }
            }
            frame.appendChild(mediaWrap);
        }
        container.appendChild(frame);
        messages.appendChild(container);
        updateMessagesVisibility();
        messages.scrollTop = messages.scrollHeight;
    };
    const updateFileMeta = () => {
        const count = files.files?.length ?? 0;
        if (count > 0) {
            fileMeta.textContent = `${count} file${count > 1 ? "s" : ""} selected`;
            fileMeta.style.display = "block";
            return;
        }
        fileMeta.textContent = "";
        fileMeta.style.display = "none";
    };
    const setBusy = (busy) => {
        sendBtn.disabled = busy;
        filePick.disabled = busy;
        input.disabled = busy;
    };
    const showPendingAssistant = () => {
        if (pendingAssistantNode) {
            return;
        }
        const wrap = document.createElement("div");
        wrap.style.marginBottom = "10px";
        wrap.style.display = "flex";
        wrap.style.justifyContent = "flex-start";
        const frame = document.createElement("div");
        frame.style.maxWidth = "76%";
        frame.style.display = "grid";
        frame.style.gap = "4px";
        const roleLabel = document.createElement("div");
        roleLabel.style.fontSize = "12px";
        roleLabel.style.color = "#52525b";
        roleLabel.textContent = "Assistant";
        const bubble = document.createElement("div");
        bubble.style.borderRadius = "10px";
        bubble.style.padding = "9px 11px";
        bubble.style.background = "#ffffff";
        bubble.style.color = "#64748b";
        bubble.style.border = "1px solid #e4e4e7";
        bubble.textContent = "Thinking...";
        frame.appendChild(roleLabel);
        frame.appendChild(bubble);
        wrap.appendChild(frame);
        messages.appendChild(wrap);
        updateMessagesVisibility();
        messages.scrollTop = messages.scrollHeight;
        pendingAssistantNode = wrap;
    };
    const hidePendingAssistant = () => {
        if (!pendingAssistantNode) {
            return;
        }
        pendingAssistantNode.remove();
        pendingAssistantNode = null;
        updateMessagesVisibility();
    };
    const onSend = async () => {
        const messageText = input.value;
        const selected = Array.from(files.files ?? []);
        if (!messageText.trim() && selected.length === 0) {
            return;
        }
        setBusy(true);
        try {
            const attachments = [];
            for (const file of selected) {
                attachments.push(await fileToAttachment(file));
            }
            appendMessage("You", messageText, attachments);
            input.value = "";
            showPendingAssistant();
            const result = await client.sendMessage({
                conversationId,
                text: messageText,
                attachments
            });
            hidePendingAssistant();
            conversationId = result.conversationId ?? conversationId;
            for (const msg of result.messages.filter((m) => m.role === "assistant")) {
                appendMessage("Assistant", msg.text ?? "", msg.attachments);
            }
            files.value = "";
            updateFileMeta();
        }
        catch (err) {
            hidePendingAssistant();
            appendMessage("System", `Error: ${err.message}`);
        }
        finally {
            setBusy(false);
        }
    };
    filePick.addEventListener("click", () => files.click());
    files.addEventListener("change", updateFileMeta);
    sendBtn.addEventListener("click", () => void onSend());
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            void onSend();
        }
    });
    updateMessagesVisibility();
    return {
        destroy: () => {
            client.close();
            cfg.mount.innerHTML = "";
        }
    };
}
//# sourceMappingURL=index.js.map
