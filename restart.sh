export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm use

curl -fsSL https://get.pnpm.io/install.sh | sh -

pnpm install
pnpm build