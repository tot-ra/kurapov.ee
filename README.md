# kurapov.ee-v2

Static-site migration from Docusaurus to `blog-engine-md`.

## Build

From this folder:

```bash
../blog-engine-md/blog-engine build
```

Output is generated in `dist/`.

## Dev server

```bash
../blog-engine-md/blog-engine serve
```

## Production one-command deploy

On the production server:

```bash
chmod +x /www/kurapov.ee/restart.sh
/www/kurapov.ee/restart.sh
```

This script updates both repos, rebuilds `blog-engine`, regenerates static output, publishes `public/`, reloads Nginx, and verifies that homepage imports `/assets/triangle/embed.js`.
