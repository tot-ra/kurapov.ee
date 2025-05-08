export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm use

curl -fsSL https://get.pnpm.io/install.sh | sh -

/home/www/.local/share/pnpm/pnpm install
/home/www/.local/share/pnpm/pnpm build