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
   1. Provision Fargate, Provision EC2, Understanding TaskDefinitions, Capacity, Provider introduction
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
IaaS: EC2 instances, VPC,..
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