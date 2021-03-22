```java
#Change permission on file by character
chmod
read(r), write(w), execute(x)
Owner object={User owner => u}-{Group owner => g}-{Other => o}
$ ls -l abc.txt
-rw-r--r-- 1 nguoidung nguoidung 0 Dec  9 15:12 abc.txt

User
$ sudo chmod -v u+x abc.txt
$ ls -l abc.txt
-rwxr--r-- 1 nguoidung nguoidung 0 Dec  9 15:12 abc.txt

Group
$ sudo chmod -v g+xw abc.txt
-rwxrwxr-- 1 nguoidung nguoidung 0 Dec  9 15:12 abc.txt*

Other
$ sudo chmod -v o+rwx abc.txt
-rwxrwxrwx 1 nguoidung nguoidung 0 Dec  9 15:12 abc.txt*

Remove all permission of user and group and other
$ sudo chmod -v u-rwx,g-rwx,o-rwx abc.txt
---------- 1 nguoidung nguoidung 0 Dec  9 15:12 abc.txt

#Change permission on file by number
chmod
Owner object={Read=4}-{write=2}-{execute=1}
$ sudo chmod -v 775 abc.txt
User owner has read,write,execute permission: 4+2+1=7
Group owner has read,write,execute permission: 4+2+1=7
Other owner has read, execute permission: 4+1=5

Remove all permission on file abc.txt
$ sudo chmod -v 000 abc.txt
---------- 1 nguoidung nguoidung 0 Dec  9 15:12 abc.txt
```
