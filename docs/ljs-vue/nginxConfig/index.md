# Nginx配置
```
worker_processes  1;
events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    
    server {
        listen       9000;
        server_name  localhost;
        
        # gzip config
        gzip on;
        # gzip_static on;
        # gzip_min_length 1k;
        # gzip_comp_level 5;
        # gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
        # gzip_vary on;
        # client_max_body_size 500M;
        # gzip_disable "MSIE [1-6]\.";

        # root /usr/share/nginx/html;
        # root /home/web/dist;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm; 
            try_files $uri $uri/ /index.html;
        }
        
        # 后端代理
        location /prod-api/ {
            proxy_pass http://192.168.1.100:8080/;
            proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Real-IP         $remote_addr;
        }
    }
}

```

