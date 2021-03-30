1. users
2. groups
3. roles
4. polices
5. MFA(Multiple Factor Authentication)
------------
1. users
   1. create new user
   2. ex: dev1-user, qa1-user, pm1-user
   3. join group on user
   4. after create new a user
      1. username
      2. password
      3. access key id(using for AWS CLI)
      4. secret access key(using for AWS CLI)
      5. console login link
2. groups
   1. create new group
   2. ex: dev-mobile-group, dev-server-side-group
   3. add user to group
   4. attach default full police permission to group(for testing)
   5. attach custom my police permission to group(need using)
3. polices
   1. create custom police
   2. ex1: group dev1 only full action on bucket1-s3
   3. ex2: group dev2 only full cation on instance1-web-ec2, instance2-db-ec2

-----------------
install AWS CLI
  access resource on AWS by CLI for automate task
  run command
```bash
aws configure
# input access key id, secret access key, region, format=json
```