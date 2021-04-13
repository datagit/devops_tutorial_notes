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
container
```java
- container name
- hostname
- links
- expose port
- network
- inspect
- logs
- entrypoint
- cmd
```