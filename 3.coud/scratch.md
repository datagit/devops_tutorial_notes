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
----------------------------------------------
Meta-Data
   Problem: how to know detail about the instance from within the instance?
   Query Metadata
```bash
curl http://public_ip_address/latest/meta-data
curl http://public_ip_address/latest/meta-data/instance-id
```
-----------------------------------------------
Scalability
   Horizontal Scaling
   Vertical Scaling
   Scaling out
   Scaling up
   lab: create a Auto-Scaling Group with Load Balancing for EC2 instances
      - create an Auto Scaling Group
      - Create al Launch Template
        - applied ot to the Auto Scaling Group
      - Create a Target Group
        - applied ot to the Auto Scaling Group
      - Launched the AUto Scaling Group
      - Launched an Application Load Balancer
   Automatic scaling for AWS resource
      minium, maximum, desired capacity
   Feature itself is Free, use EC2 + CloudWatch pricing
   Amazon EC2 auto scaling group
      launch or terminate EC2 instances in an auto scaling group.
   Amazon ECS(Elastic Container Service):
      Adjust the ECS service desired count up or down in response to load variations.
   can use manual scaling or predictive scaling
      predictive scaling analyzes 14 days of history data
-----------------------------------------------
Load balancing introduction and Elastic load balancing overview
   3 types of Managed Load Balancer Services
      - Classic Load Balancer
      - Application Load Balancer
      - Network Load Balancer
   Classic Load Balancer
      version 1, 2009
      Not recommended anymore
         Better use the application/network load balancer instead
      Is/Was for the EC2-Classic network
      Layer 4 or Layer 7 Load Balancing
   Application Load Balancer(ALB)
      - Layer-7 Load Balancer(HTTP Layer)
      - Content-based routing
        - Path-/Host-/HTTP-Header-based routing
        - Query-string based routing
      - Lambda-functions as targets
      - Server Name Identification
      - HA through multiple AZ
      - HTTp/2 and WebSockets support
      - For MicroServices and Containerized Applications
      ex: path based routing example
         ALB
            default
               Target Group #1(Health check)
            path: /search/*
               Target Group #2(Health check)
   Network Load Balancer(NLB)
      - Layer-4 Load balancer(IP Protocol)
      - Connection based
        - TCP AND UDP
      - For every high throughput and low latency
      - Sticky sessions
      - DNS failover
------------------------------------------------
S3 Bucket
   any file types
   encryption
   hosting static html file
   versioning
   policy
Understanding AWS S3 Bucket policies
   S3 Permission
      IAM Policies
      Bucket Policies
      Bucket ACLs
-------------------------------------------------
EFS(Elastic File System) summary
   the guide for lab: https://learning.oreilly.com/videos/complete-2020-aws/9781800566132/9781800566132-video6_9
   create 2 instances connect to a EFS
   PVC
      subnet
      Security Group
         efs-sg-1
            requirement: open connect from EC2 connect to self
            solution:
               Select efs-sg-1
               Inbound Roles
                  Edit roles
                     add role
                        type=NFS
                        source=custom
                           ec2-sg-1
         ec2-sg-1
            requirement: open connect SSH ti self
            solution:
               select ec2-sg-1
               Inbound Roles
                  Edit roles
                     add role
                        type=SSH
                        source=anywhere
   Create file system in current VPC
      => file system ID
   Create 2 EC2 instances
      File system=(file system ID)
      Configure Security Group
         selected=ec2-sg-1
--------------------------------------
Networking
   VPC
   Subnet
   Routing
   Security Groups
   Internet Gateway
   NAT
   Elastic IP
   CIDR: Class Inter Domain Routing
      Previously: class based ip routing
         works with Subnet masks: class B: 255.255.0.0
         class A: over 16 million host identifiers
         class B: 65535 host identifiers
         class C: 254 host identifiers
         very inefficient: if you need 3000 ip addresses you fall into class B
      Idea: variable length subnet masking(VLSM)
         Prefix as IP Address-style: 192.168.0.0
         suffix as significant number of bits for the ip-address: x.x.x.x/16
      VPC: given in CIDR
      IDEA: x.x.0.0/16 for the whole VPC
         x.x.x.0/24 for each subnet, 254 host per subnet
         x.x.1-9.0/24 for public subnets
         x.x.10-90/24 for private
   AWS Cloud
      VPC: 10.0.0.0/16
         Availability Zone
            public subnet: 10.0.1.0/24
               security groups
            private subnet: 10.0.10.0/24
               security groups
   
https://learning.oreilly.com/videos/complete-2020-aws/9781800566132/9781800566132-video7_9
   Internet Gateways 
      An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows  communication between instances in your VPC and the internet.
      connect public subunet to internet
      lab:
         create an internet Gateway
            name=webhosting-ig
            attached VPC
         create route table
            name=public-ig-rt
   NAT Gateways
      connect private subnet to internet
      IPv4 only
      transfer charges
         Cost: NAT <-> different AZ
         NAT <-> Same Region S3 is free
         NAT <-> Same AZ EC2 is free
   Elastic IP Address
      a static, public IPv4 address
      Associate it with any Network Device
      IPv4 only
      One EIPfor one running instatnce is free
         additional EIP at $0.005/h(Frankfurt)
      EIPs not assigned are charged($0.005/h)
   Egress only internet Gateway
      IPv6 only
      Simimlar to a NAT device, but IPv6
https://learning.oreilly.com/videos/complete-2020-aws/9781800566132/9781800566132-video7_10