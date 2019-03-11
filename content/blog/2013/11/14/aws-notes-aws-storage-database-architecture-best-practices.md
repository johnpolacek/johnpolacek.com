---
title: AWS Notes – AWS Storage and Database Architecture Best Practices
author: johnpolacek
type: post
date: 2013-11-14T01:16:20+00:00
url: /2013/11/14/aws-notes-aws-storage-database-architecture-best-practices/
dsq_thread_id:
  - 1964097245
categories:
  - Uncategorized

---

<a href="http://johnpolacek.com/wp-content/uploads/2013/11/Screen-Shot-2013-11-13-at-6.40.12-PM.png" rel="lightbox[1631]"><img src="/img/blog/2013/11/Screen-Shot-2013-11-13-at-6.40.12-PM-300x275.png" alt="AWS re:Invent Session" width="300" height="275" class="alignleft size-medium wp-image-1633" srcset="http://johnpolacek.com/wp-content/uploads/2013/11/Screen-Shot-2013-11-13-at-6.40.12-PM-300x275.png 300w, http://johnpolacek.com/wp-content/uploads/2013/11/Screen-Shot-2013-11-13-at-6.40.12-PM-326x300.png 326w, http://johnpolacek.com/wp-content/uploads/2013/11/Screen-Shot-2013-11-13-at-6.40.12-PM.png 852w" sizes="(max-width: 300px) 100vw, 300px" /></a>AWS Enterprise Solutions Architect Siva Raghupathy started by stating that 2.7 zettabytes (ZB) of data exists in the digital universe today. There will be 450 billion transactions per day by 2020. Most data is unstructured text. 

How should we be handling all this data? It is about finding the right tool for the job. He broke down the AWS services into different categories based on the types of problems being solved.

There are primitive compute and storage options, kind of like a hard disk, that add flexibility because you can host any major data storage technology but come with operational burdens.

Next there are managed AWS services, for complex vs. simple queries and structured vs. unstructured data. He included blob stores like [S3][1] and [Glacier][2] where you are storing unstructured data that isn’t attached to any query.

<a href="http://johnpolacek.com/wp-content/uploads/2013/11/hottocold.png" rel="lightbox[1631]"><img src="/img/blog/2013/11/hottocold-300x181.png" alt="AWS Storage from hot to cold" width="300" height="181" class="alignleft size-medium wp-image-1634" srcset="http://johnpolacek.com/wp-content/uploads/2013/11/hottocold-300x181.png 300w, http://johnpolacek.com/wp-content/uploads/2013/11/hottocold-495x300.png 495w, http://johnpolacek.com/wp-content/uploads/2013/11/hottocold.png 1020w" sizes="(max-width: 300px) 100vw, 300px" /></a>He often asks his customers the question, “What is the temperature of your data?” Hot data is smaller, with low latency and a very high request rate. Cold data is vast, mostly static and infrequently requested. Warm data is somewhere in between. He then mapped the various AWS storage services, from hot to cold.

He spoke about cost conscious design, and then demonstrated the concept with an example. He fired up the [AWS simple monthly calculator][3] to figure out the correct AWS data storage service to use based on the cost. In his example, one would first think S3 was the appropriate solution, but after running it through the calculator we saw that because of all the small objects, [DynamoDB][4] was a better solution at less than 10% of the cost. You can use the AWS calculator to validate your architecture design. The best design is the one that will cost the least.

You can get further savings by moving data from one store to another as it cools down.

Next he moved on to talking about the AWS database services, starting with [RDS][5]. He said to use it for transactions and complex queries, but not for massive numbers of read/writes or simple queries that can be better handled by NoSQL. Furthermore, it is necessary to pick the right RDS DB instance class.

When to use DynamoDB? He said pretty much whenever you can. The only times you wouldn’t use it is for complex queries and transactions or for cold data. For DynamoDB best practices, keep item size small, store large blobs in S3 with metadata in DynamoDB and use a hash key for extremely high scale.

Last, he spoke about [ElastiCache][6] for speeding up reads/writes by caching frequent queries. [Redis][7] in particular is quite popular, but noted that it is not a good option for when data persistence is important. 

He quickly wrapped things up going over the AWS unstructured data text search tool [CloudSearch][8](don’t use as a replacement for a database), [Redshift][9] data warehouse service for complex queries on large quantities of historical data (copy large data sets from S3 or DynamoDB) and [MapReduce][10] (the “swiss army knife” for parallel scans of huge datasets).

 [1]: http://aws.amazon.com/s3/
 [2]: http://aws.amazon.com/glacier/
 [3]: http://calculator.s3.amazonaws.com/calc5.html
 [4]: http://aws.amazon.com/dynamodb/
 [5]: http://aws.amazon.com/rds/
 [6]: http://aws.amazon.com/elasticache/
 [7]: http://redis.io/
 [8]: http://aws.amazon.com/cloudsearch/
 [9]: http://aws.amazon.com/redshift/
 [10]: http://aws.amazon.com/elasticmapreduce/