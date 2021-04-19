```java
- IMAGE là những phần mềm được đóng gói và quản lý bởi DOCKER
- các IMAGE trong DOCKER chỉ có thể đọc không thể sửa đổi
- khi IMAGE được DOCKER khởi chạy thì phiên bản thực thi của nó gọi là CONTAINER
- các CONTAINER thì có thể ghi được dữ liệu vào trong nó
- các CONTAINER có thể chứa nhiều services(apache, php, mysql,...)
- mặc định docker có 3 network default `docker network ls` => bridge, host, none
- các CONTAINER khi được tạo ra mặc định đã connect vào 3 network default này
- chúng ta có thể tạo thêm network trong docker `docker network create -d bridge my-bridge-network`
```
docker
```java
docker --version
docker --help
docker images
docker image
docker container
```
container~service
```java
- container name
- inspect
- hostname
- links for alias container name
- mount volume, folder
- connect to special network
- logs
- EXPOSE port
- ENTRYPOINT
- CMD
- WORKDIR
```
Docker CMD Vs Entrypoint Commands: What's The Difference?
  https://phoenixnap.com/kb/docker-cmd-vs-entrypoint#:~:text=CMD%20is%20an%20instruction%20that,container%20with%20a%20specific%20executable.

Dockerfile
```Dockerfile
# xây dựng image mới từ image centos:latest (CENTOS 7)
FROM centos:latest

# Cập nhật các gói và cài vào đó HTTPD, HTOP, VIM
RUN yum update -y
RUN yum install httpd httpd-tools -y
RUN yum install epel-release -y \
    && yum update -y \
    && yum install htop -y \
    && yum install vim -y

#Thiết lập thư mục hiện tại
WORKDIR /var/www/html
# Copy tất cả các file trong thư mục hiện tại (.)  vào WORKDIR
ADD . /var/www/html

#Thiết lập khi tạo container từ image sẽ mở cổng 80
# ở mạng mà container nối vào
EXPOSE 80

# Khi chạy container tự động chạy ngay httpd
ENTRYPOINT ["/usr/sbin/httpd"]

#chạy terminate
CMD ["-D", "FOREGROUND"]
```