```java
Sử dụng Dockerfile để tự động tạo các image trong Docker
Sử dụng Dockerfile
Dockerfile là một file text, trong đó chứa các dòng chỉ thị để Docker đọc và chạy theo chỉ thị đó để cuối cùng bạn có một image mới theo nhu cầu. Khi đang có một Dockerfile giả sử có tên là Dockerfile để ra lệnh cho Docker chạy nó bạn có thể gõ
```
```bash
docker build -t nameimage:version --force-rm -f Dockerfile .

# Bạn chú ý dấu . ở cuối lệnh docker build ở trên, có nghĩa tìm file có tên Dockerfile ở thư mục hiện tại.

# -t nameimage:version là đặt tên và tag được gán cho image mới tạo ra.
doing: https://xuanthulab.net/su-dung-dockerfile-de-tu-dong-tao-cac-image-trong-docker.html
```