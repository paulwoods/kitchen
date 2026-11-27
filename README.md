# Galley Kitchen

The kitchen plan, served at https://kitchen.mrpaulwoods.com behind a password.

- The site is static files in an nginx image, `paulwoods/kitchen`, kept in a **private** Docker Hub repo. A public repo would let anyone pull the pages without the password.
- Caddy, in `~/Projects/caddy`, handles HTTPS and asks for the password. Its Caddyfile has a `kitchen.mrpaulwoods.com` block, and its compose file has a `kitchen` service.
- Username: `kitchen`. Caddy keeps only the password's bcrypt hash, as `KITCHEN_PASSWORD_HASH` in the server's `caddy.env`.

## Install (first time)

1. Create the private repo `paulwoods/kitchen` on Docker Hub.
2. Build and push the image from this folder:
   ```
   docker build -t paulwoods/kitchen:1.0.0 .
   docker push paulwoods/kitchen:1.0.0
   ```
3. Make the password hash:
   ```
   docker run --rm caddy:2-alpine caddy hash-password
   ```
   Add the output to the server's `caddy.env` in single quotes. Without the quotes, Compose expands the `$` signs in the hash.
   ```
   KITCHEN_PASSWORD_HASH='$2a$14$...'
   ```
4. Copy the updated `Caddyfile` and `docker-compose.yml` from `~/Projects/caddy` to the server.
5. On the server, in the caddy folder:
   ```
   docker login
   docker compose pull kitchen
   docker compose up -d
   docker compose up -d --force-recreate caddy
   docker compose logs -f caddy
   ```
   Caddy is recreated because `up -d` alone won't make it reread its Caddyfile or `caddy.env`. Wait for `certificate obtained successfully` for `kitchen.mrpaulwoods.com`.

## Redeploy (after changing the site)

1. Push to `develop`. The Release action (`.github/workflows/release.yml`) tags the next patch version (`v1.0.5`, ...) and pushes `paulwoods/kitchen:<version>` and `:latest` to Docker Hub. Read the version from the run or `git fetch --tags`. It needs the repo secrets `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`.
2. Change `image: paulwoods/kitchen:1.0.5` in `~/Projects/caddy/docker-compose.yml` and copy that file to the server.
3. On the server:
   ```
   docker compose pull kitchen
   docker compose up -d kitchen
   ```
   Caddy doesn't need a restart. Pages are sent with `Cache-Control: no-cache`, so browsers pick up the new version on their next load.

## Change the password

Make a new hash (Install step 3), replace it in the server's `caddy.env`, then run `docker compose up -d --force-recreate caddy`.

## Troubleshooting

- **`ERR_SSL_PROTOCOL_ERROR`**: Caddy has no certificate for the name, which usually means it is still running the old Caddyfile. Recreate it (Install step 5) and read the log.
- **Login keeps failing**: check that the hash in `caddy.env` is in single quotes and that Caddy was recreated after the change.
- **Test the image locally**: `docker run --rm -p 8099:80 paulwoods/kitchen:1.0.0`, then open http://localhost:8099.
