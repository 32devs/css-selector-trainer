FROM mariadb:10.9
COPY /conf.d /etc/mysql/conf.d
COPY /initdb.d /docker-entrypoint-initdb.d
COPY /data /var/lib/mysql

ENV MYSQL_HOST=localhost
ENV MYSQL_PORT=3306
ENV MYSQL_ROOT_PASSWORD=root!
ENV MYSQL_DATABASE=cst
ENV MYSQL_USER=32devs
ENV MYSQL_PASSWORD=1989
ENV TZ=Asia/Seoul

EXPOSE 3306
