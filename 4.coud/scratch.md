https://learning.oreilly.com/videos/complete-2020-aws/9781800566132/9781800566132-video4_1
provide service hardware or software via internet
1. Security and IAM
   1. create your IAM user
2. Elasticity
   1. understanding Meta-Data, understand user-data
3. Scalability
   1. work with autoscaling Groups and Load Balancers
4. Storage
   1. work with S3, work with EFS
5. Networking
   1. create your PVC with public and private subnet, IG, NAT
6. Code versioning
   1. work with code commit
7. Containerize applications
   1. work with Docker, work with ECR(Elastic Container Registry)
8. Elastic Container Service
   1. Provision Fargate, Provision EC2(Elastic Compute Cloud), Understanding TaskDefinitions, Capacity, Provider introduction
9. Continuous Delivery
   1.  work with code pipeline and codebuild
10. RDS and Route53, ParameterStore introduction
11. Real world example
    1.  deploy Laravel HA(highly available)
-----------------------------
Common Types of Cloud Computing
hybrid cloud
private cloud
public cloud
1. Infrastructure as a Service (IaaS)
   1. access to networking features, computers(virtual or on dedicated hardware) and data storage space.
   2. Highest level of Flexibility
2. Platform as a Service (PaaS)
   1. No need to manage underlying service, like capacity planing or patching
3. Software as a Service (SaaS)
   1. completed product that is run and managed by the service provider
reference:
https://www.alibabacloud.com/knowledge/difference-between-iaas-paas-saas
https://medium.com/@nnilesh7756/what-are-cloud-computing-services-iaas-caas-paas-faas-saas-ac0f6022d36e

```
AWS Regions and Availability Zones(AZs)
Regions
  physical location around the world
  where data center are clustered
  multiple AZ per Region
Availability Zones(AZs)
```
```
Services in AWS
Provide a set of low-level and high-level resource
Mix of IaaS, PaaS and SaaS
IaaS: EC2 instances, VPC(Virtual Private Cloud),..
PaaS: 
  Amazon RDS(Relational Database Service)
    Mysql, PostgreSQL, MariaDB, Oracle, SQL Server
  Amazon DynamoDB
    NoSQL database
  Amazon ElastiCache
    in-memory cache
  LoadBalancer
  NAT devices
  Git
```
Lab Recap: create your first EC2 instance
  AWS Cloud
    VPC
      Public subnet
        Security group
--------------------------------------
Isolation on Physical hosts
  EC2 instances are isolated like physical hosts
    hypervisor isolates CPU and memory
    Only virtual disks are provided instead of raw HW(hardware) access
  Termination of instances scrubs used memory
    set RAM memory to zero
    every block of storage is reset
  Network MAC address are dynamically assigned
    AWS network allows instances to send traffic only from the MAC and IP address assigned to them
--------------------------------------
Root User Credentials
  Your Sign-up user is a root user.
  Complete, unrestricted access

  Better: Create a separate user for everyday access

  Minium Requirement: Never share your credentials with anyone.
    create a new user if necessary. It's free.
-----------------------------------------
IAM - Identify and Access Management
   Control who is authenticated(signed in)
   Who is authorized(has permission) to use resource
   IAM is free
   User, Policies and resource
   Via Policies you define which user gets access to which resources
      "Deny by default" - access must be explicitly allowed
   Policy
      Resources
      Identify
         Users/Groups
         Roles
   Policy
      default policies from AWS
      your custom policies
   Users are peoples
   Roles are machines
      ex: need run AWS service Lambda function helloWorld
         function helloWorld can access to (S3, DynamoDB)
         solution:
            create a role for run function Lambda
               - access S3
               - access DynamoDB
---------------------------------------------
AMI(Amazon Machine Image)
EBS(Elastic Block Store)
   user cases
      create a new EBS snapshot
         register AMI #1
            launch
            copy to AMI #2
      we can launch multiple instances from a single AMI
----------------------------------------------
User-Date
   Problem: Configure an instance to your Environment dynamically
   Idea: Custom AMI, but not enough

   User-Data: you can build generic AMIs and use user data to modify the configuration files supplied at launch time.