AWS Certified Developer Associate
https://learn.acloud.guru/course/aws-certified-developer-associate/learn/99de84d2-0c16-be83-d2c9-db483e658985/2269c56c-4577-2146-101f-cbd4583b8ea8/watch

IAM
   Users
      end users, think people
   Grops
      a collection of users under one set of permissions.
   Roles
      You create roles and can then assign them to users, applications, and services to give access to AWS resources.
   Policy
      A document that defines one or more permissions.
      An AIM policy can be attached to a user, group or role.
   https://learn.acloud.guru/course/aws-certified-developer-associate/learn/9df1a869-ca43-95a9-4b47-70c611ac3cab/e6e9fcbf-7ff2-e9de-d3db-1404fd7adb5c/watch
   https://learn.acloud.guru/handson/4b620748-f44f-408a-a42b-f727a208e952/course/aws-certified-developer-associate
      explain users/groups/permissions before create them
   LAB: https://prnt.sc/110unu1
   TESTING IAM PERMISSIONS
      https://learn.acloud.guru/course/aws-certified-developer-associate/learn/9df1a869-ca43-95a9-4b47-70c611ac3cab/646fd036-664c-72e7-79df-fb2cf6612871/watch
         https://policysim.aws.amazon.com/home/index.jsp?#users
EC2
   https://learn.acloud.guru/course/aws-certified-developer-associate/learn/d08a2b54-37e1-d237-21a7-55eea7c0fb2d/986ac87a-0d27-4b2d-bfec-45efe505c85c/watch
   introduction
      Secure, resizable compute capacity in the Clound
      Like a VM, only hosted in AWS instad of your own data center
      Designed to make web-scale cloud computing easier for developers
      The capacity you want when you need
      You are in complete control of your own instances
   why is it so cool?
      Game changer
         AWS led a ig change in the industry by introducting EC2
      Pay only for what you use
         EC2 cahnged the econnomics of computing
      No wasted capacity
   Before EC2
      Estimate capacity
         long term investment, 3-5 years
   wait minutes, not months
   EC2 Pricing Options
      On Demand
         pay by the hour or the second depending on the type of instance
      Reserved
         reserved capacity for one or three years. Up to 72% discount on the hourly charge Regional
      Spot
         Purchase unused capacity of up to 90%. Prices fluctuate with supply and demand
      Dedecated
         A physical EC2 server dedicated for your use. The most expensive option
Understanding EBS Volumes
   EBS(Elastic Block Store)
      Storage volumes that you can attach to your EC2 instances.
   mission critical
      Production workloads
      Highly available
         Automaticcally replicated within a single
         Availability Zon to protect against hardware failures
      Scalable
         Dynamiccally increase capacity and change the type volume with no downtime or performance impact to your live systems.
   LAB
      Availability Zone
      Attach Volume to instance
Exploring Elastic Load Balancer
   What is A Load Balancer?
      A Load balancer distributes network traffic to group of servers.
   3 options to choose from
      Application load balancer
         HTTP and HTTPS
         they operate at Layer 7 and are application-aware.
         config HTTP HEADER
      Network Load Balancer
         TCP and high performance
      Classic Load Balancer(legacy)
         HTTP/HTTPS and TCP
Route53 - Demo
   https://learn.acloud.guru/course/aws-certified-developer-associate/learn/d08a2b54-37e1-d237-21a7-55eea7c0fb2d/e264a7ea-3187-87d1-6687-cb53ff8b48f5/watch
   Route53 is Amazon's DNS service.
      Allows you to map a domain name that you own to:
         EC2 Instances
         Load Balancers
         S3 Buckets
Parameters Store
   https://learn.acloud.guru/course/aws-certified-developer-associate/learn/d08a2b54-37e1-d237-21a7-55eea7c0fb2d/3be70f10-6994-35e7-5028-00aacc5fb4ec/watch

   Integrated with AWS Services
      EC2
      CloudInformation
      Lambda Function
      CodeBuild
      CodePipeline