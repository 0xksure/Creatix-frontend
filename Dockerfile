FROM nginx
RUN rm /usr/share/nginx/html/index.html
COPY dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
