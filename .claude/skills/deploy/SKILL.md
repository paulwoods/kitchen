---
name: deploy
description: Deploy the latest version of the kitchen site to the ocean server. Use when the user asks to deploy, release or update the live site.
---

# Deploy the latest version

1. **Wait**: wait until the GitHub Action for the latest push to `develop` completes (`gh run watch`), and note the version tag it pushed.
2. **Connect**: `ssh ocean`
3. **Folder**: `cd ~/caddy`
4. **Update**:
   1. Edit the `docker-compose` file.
   2. Find the `kitchen` service.
   3. Update its image version (`paulwoods/kitchen:<version>`) to the latest.
   4. Save.
5. **Restart**: run `./restart.sh`.
