# What dose kubernetes mean?
```
Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.

Kubernetes, or k8s, is an open source platform that automates Linux container operations. It eliminates many of the manual processes involved in deploying and scaling containerized applications,” Haff and Henry write. “In other words, you can cluster together groups of hosts running Linux containers, and Kubernetes helps you easily and efficiently manage those clusters.
```
```
Terms of Kubernetes
  CLUSTER
  NODE
  POD
  Labels and Selectors
  ReplicaSet(RS), Horizontal Pod Autoscaler(HPA)
  Deployment
  Service, Secret
  Persistent volume(PV), PersistentVolumeClaim(PVC)
  Persistent volume NFS(volume network)
```
```
NODE
  Node is worker machime in kubernetes
  Node maybe either a virtual or a physical machime depending on the CLUSTER
  Nodes are the smallest hardware unit of computing
  Node is managed by the Master
  A node can have multiple POD
```
```
POD
  Pods are the smallest deployable units of computing that you can create and manage in Kubernetes
  A pod can have one or multiple container.
  A pod can have one or multiple volume.
  tao pod: run container tren pod
  set: label cho pob
  get: pod info(by lable)
```
```
Labels and Selectors
  Label is pair key value
  Label is used selecting list NODE or list POD
```
```
ReplicaSet(RS)
  ReplicaSet là một điều khiển Controller - nó đảm bảo ổn định các nhân bản (số lượng và tình trạng của POD, replica) khi đang chạy.
Horizontal Pod Autoscaler(HPA)
  Horizontal Pod Autoscaler là chế độ tự động scale (nhân bản POD) dựa vào mức độ hoạt động của CPU đối với POD, nếu một POD quá tải - nó có thể nhân bản thêm POD khác và ngược lại - số nhân bản dao động trong khoảng min, max cấu hình
```
```
Deployment(deploy)
  Deployment quản lý một nhóm các Pod - các Pod được nhân bản, nó tự động thay thế các Pod bị lỗi, phản hồi bằng pod mới nó tạo ra. Như vậy, deployment đảm bảo ứng dụng của bạn có một (hay nhiều) Pod để phục vụ các yêu cầu.
```
```
Service
  Service trong Kubernetes
Các POD được quản lý trong Kubernetes, trong vòng đời của nó chỉ diễn ra theo hướng - được tạo ra, chạy và khi nó kết thúc thì bị xóa và khởi tạo POD mới thay thế. ! Có nghĩa ta không thể có tạm dừng POD, chạy lại POD đang dừng ...

Mặc dù mỗi POD khi tạo ra nó có một IP để liên lạc, tuy nhiên vấn đề là mỗi khi POD thay thế thì là một IP khác, nên các dịch vụ truy cập không biết IP mới nếu ta cấu hình nó truy cập đến POD nào đó cố định. Để giải quết vấn đề này sẽ cần đến Service.

Service (micro-service) là một đối tượng trừu tượng nó xác định ra một nhóm các POD và chính sách để truy cập đến POD đó. Nhóm cá POD mà Service xác định thường dùng kỹ thuật Selector (chọn các POD thuộc về Service theo label của POD).

Cũng có thể hiểu Service là một dịch vụ mạng, tạo cơ chế cân bằng tải (load balancing) truy cập đến các điểm cuối (thường là các Pod) mà Service đó phục vụ.
```