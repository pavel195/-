FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY css /usr/share/nginx/html/css
COPY data /usr/share/nginx/html/data
COPY js /usr/share/nginx/html/js
