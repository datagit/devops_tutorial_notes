macos
```bash
brew install mysql
brew info mysql
brew list
# after install success, need run query
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your-pass-word';
```