https://learn.acloud.guru/course/aws-certified-developer-associate/learn/d36a1363-452a-8007-e874-54f19b10c0b7/881d849a-cc58-029e-69c8-12fc68080278/watch
```java
So using SQS, you can decouple your application components.
So you can decouple the components of an application,
allowing them to run independently and easing message management between
components. For example,
if you have one component which is running a lot more quickly than another,
or you're creating jobs faster than your application servers can process them,
then having SQS in the middle,
make sure that those components can run independently and that one doesn't get
overloaded,

What type of Queue are available?
  two type of Queue
    Standard Queues
      default on AWS SQS
      none ordering
      4 > 5 > 2 > 3 > 1
    FIFO
      guaranteed ordering
        First in first out delivery
          5 > 4 > 3 > 2 > 1
```
SQS setting
```java
change visibility timeout
  The Default Visibility Timeout is 30 seconds
  Increase If Necessary
  The Maximum Is 12 Hours
Short Polling
  
Long Polling
```