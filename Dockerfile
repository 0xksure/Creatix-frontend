FROM nginx:1.19.4-alpine
RUN apk add ruby-full
COPY ./config ./config
RUN touch ./config/nginx.conf
COPY dist/* /usr/share/nginx/html/app/dist/
COPY ./config/nginx.conf.erb /etc/nginx/nginx.erb.conf
RUN mkdir /etc/nginx/logs
RUN touch /etc/nginx/logs/access.log /etc/nginx/logs/error.log 
RUN erb /etc/nginx/nginx.erb.conf > /etc/nginx/nginx.conf
RUN cat /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx"]