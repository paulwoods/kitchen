# Static site behind Caddy, which terminates TLS and asks for the password for
# kitchen.mrpaulwoods.com (see ~/Projects/caddy). Pinned like 3dlabel so a
# redeploy never changes the server underneath an unchanged site.
FROM nginx:1.31.9-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html/
EXPOSE 80
