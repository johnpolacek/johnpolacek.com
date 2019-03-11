---
title: 'AWS Notes: Mastering NoSQL – Advanced Amazon DynamoDB Design Patterns for Ultra-High Performance Apps'
author: johnpolacek
type: post
date: 2013-11-15T22:27:06+00:00
url: /2013/11/15/aws-notes-mastering-nosql-advanced-amazon-dynamodb-design-patterns-ultra-high-performance-apps/
dsq_thread_id:
  - 1969429361
categories:
  - aws
  - development

---

DynamoDB Engineer [David Yanacek][1] started things out by giving an overview of the types of tables and queries that exist in a typical social network app, and how they look in [DynamoDB][2]. A second example he gave was image tagging, doing queries like images by users, by date, by tags and then combinations of those. He showed how to set up DynamoDB queries that would be useful and inexpensive for this type of datasets. He introduced their new concept of a [Local Secondary Index][3], which is a temporary table created by DynamoDB, that allows you to run a secondary lookup on a result set. For tags, in DynamoDB you would have another table tie the tags to image IDs.

Then he revealed a new feature for DynamoDB: [Global Secondary Index][4]. This lets you do fast, inexpensive with more flexible queries.

The next example was managing states of a tic tac toe game, show some problems that arise and how to avoid them. David showed a problem in which a tic tac toe player could cheat by sending multiple update item requests, perhaps in separate browser windows. You can solve for that by doing conditional writes. Another fix was to add an expect clause to prevent bad writes. 

He moved on to talking about finer-grained access control for user data. He proposed moving from a three-tiered architecture, to two-tiered where users do updates directly to DynamoDB rather than a service layer. Having just heard the \___ presentation, I knew where he was going with this: using Web Identity Federation to get temporary credentials and a session token. A new feature in DynamoDB is to limit access to particular hash keys and attributes. For example, allow all authenticated Facebook users to query the images table but only when their facebook id matches their user id. This allows us to expose the database directly to users, resulting in lower latency, cost and complexity. Some problems with this is less visibility into user behavior, more difficult to make changes without a service layer and requires work in scoping items to specific users.

Next up was David Tuttle, Engineering Manager of [Devicescape][5]. His talk would cover how they have implemented DynamoDB in their service. Prior to adopting DynamoDB, they faced challenges in scaling, DB maintenance, slow queries on large table and difficulty making schema changes. DynamoDB forces a different way of thinking about data. 

He quickly gave a bunch of pro-tips: Organize data into items around a primary key, evenly distribute workload across hash keys, use parallel scans for high speed jobs. DynamoDB will not give you the expected throughput unless you distribute across hash keys. By using conditional writes and an atomic increment in the first item, they avoid collisions. Plan for failure. Use local files to resume data operations after a failure. Extract data to S3 to do non-realtime operations like analytics. Use DynamoDB local to speed up developer workflow.

Last it was Greg Nelson from [Dropcam][6], the Wi-Fi enabled camera company that does intelligent activity recognition and cloud recording. They moved away from managed hosting to AWS and eventually DynamoDB. He showed how they use it to manage all their camera data, as well as user sessions. He drilled into what their table updates, queries and deletes look like for cuepoints (to keep track of important footage within the video tracks).

He talked about some of the complexity within DynamoDB, such as the concept of “eventual consistency”. With NoSQL, choosing a hash key is the most important up-front design decision. You need to keep very close attention on IOs. Throttling behavior is opaque, so you need to actively watch for problems.

 [1]: https://twitter.com/dyanacek
 [2]: http://aws.amazon.com/dynamodb/
 [3]: http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LSI.html
 [4]: http://aws.typepad.com/aws/2013/11/coming-soon-global-secondary-indexes-for-amazon-dynamodb.html?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+AmazonWebServicesBlog+(Amazon+Web+Services+Blog)
 [5]: http://devicescape.com
 [6]: https://www.dropcam.com/