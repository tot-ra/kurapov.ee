#!/usr/bin/env bash
set -euo pipefail

BLOG_DIR="/www/kurapov.ee"
ENGINE_DIR="/www/blog-engine-md"
ENGINE_BIN="$ENGINE_DIR/bin/blog-engine"
GO_BIN="/usr/local/go/bin/go"

echo "[1/7] Update blog-engine-md repository"
git -C "$ENGINE_DIR" pull --ff-only

echo "[2/7] Build blog-engine binary"
(
    cd "$ENGINE_DIR"
    "$GO_BIN" build -buildvcs=false -o "$ENGINE_BIN" ./cmd/blog-engine
)

echo "[3/7] Update kurapov.ee repository"
git -C "$BLOG_DIR" pull --ff-only

echo "[4/7] Build static site into dist/"
rm -rf "$BLOG_DIR/dist"
(
    cd "$BLOG_DIR"
    "$ENGINE_BIN" build
)

echo "[5/7] Publish dist/ as public/"
rm -rf "$BLOG_DIR/public"
mv "$BLOG_DIR/dist" "$BLOG_DIR/public"

echo "[6/7] Quick verification"
grep -n 'import("/assets/triangle/embed.js")' "$BLOG_DIR/public/ru/index.html" >/dev/null
echo "Deploy complete. Chat widget import verified."
echo "Nginx reload is intentionally manual."
