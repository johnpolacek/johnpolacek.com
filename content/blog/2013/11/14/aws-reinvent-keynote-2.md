---
title: 'AWS re:Invent: Keynote Day Two'
author: johnpolacek
type: post
date: 2013-11-14T18:53:20+00:00
url: /2013/11/14/aws-reinvent-keynote-2/
dsq_thread_id:
  - 1966218711
categories:
  - Uncategorized

---

<a href="http://johnpolacek.com/wp-content/uploads/2013/11/keynote.jpg" rel="lightbox[1639]"><img src="/img/blog/2013/11/keynote.jpg" alt="keynote" width="1023" height="373" class="alignnone size-full wp-image-1643" srcset="http://johnpolacek.com/wp-content/uploads/2013/11/keynote.jpg 1023w, http://johnpolacek.com/wp-content/uploads/2013/11/keynote-300x109.jpg 300w, http://johnpolacek.com/wp-content/uploads/2013/11/keynote-500x182.jpg 500w" sizes="(max-width: 1023px) 100vw, 1023px" style="width:100%;height:auto;margin-bottom:16px;" /></a>

Amazon CTO [Werner Vogels][1] is quite a character. He talked about how there are so many products and announcements, it can be confusing. “Rapid delivery is in our DNA.” Werner repeated a theme that I had been hearing over and over again at the conference, that Amazon puts the customer at the center of everything they do. He said that when they start to evaluate new products, the first thing they do is write a press release and an FAQ before they write any code. They achieve rapid delivery by having small, autonomous “two pizza” teams that own their roadmap.

He then announced [Amazon RDS for Postgres][2] to much applause.

It was no surprise to see Netflix on stage as they may be AWS’s top and best known customer. Chief Product Officer Neil Hunt talked about all [their open source projects][3]. Chief Cloud Architect Adrian Cockcroft then announced the winners of the [Netflix Cloud Prize][4] winners. My favorite was the project that added the additional ability to torture servers to the [chaos monkey][5].

Werner said we often think of innovation as creating “new stuff”, but often times the best innovations occur in improvements around things that don’t change and will help a customer forever. He said they focus on performance, security, reliability, cost savings and scale.

The next AWS announcement was I2 instances, SSD servers that have ridiculous read/write speeds, which in turn will enhance DynamoDB’s already fantastic performance. 

Next up on stage was Ilya Sukhar, co-founder and CEO of Parse which offers a SDK that makes it easy to create apps across all devices. Parse is powering 180K applications with push notifications and API requests. He called out [Elastic Beanstalk’s PIOPS][6] as being particularly important to their success by delivering consistent DB performance to their apps.

Werner came back to cover security (he announced finer grained access controls and encryption for DynamoDB and other AWS products), cost savings (new bid-based pricing on the allocation and operations of AWS services).

Last, he spoke about scaling, citing [WeTransfer][7] as an AWS powered company that is a platform for transferring large files via email and also popular for serving [wallpapers][8] for artists. 

[Mike Curtis][9], VP of Engineering at [Airbnb][10] came out to talk about his company and its growth. From day one, it was built on AWS and their policy is that whenever AWS has a product that can solve one of their problems, they use it. They have over 1000 EC2 instances and 50TB of S3 Storage for photos. And they do it with a 5 person operations team, only possible because they are able to leverage AWS.

Werner came back on and showed a neat AWS-powered product called [Narrative][11], which is a lifelogging camera that takes a photo every 30 seconds and sends it to S3 to store.

The next speaker was [Dropcam][12] CEO Greg Duffy. Dropcam is a Wi-Fi monitoring camera and cloud service for your home. They are now the largest inbound video service on the internet, with even more video being uploaded to it than YouTube. Without the cost savings provided by AWS, their company could not exist.

Werner came back to talk more about companies using AWS like [Moovit][13], DeConstruction, Netflix and Echo.

Then, he announced yet another new service [Amazon Kinesis][14], for real-time processing of streaming data at massive scale. This enables things like realtime analytics of data. It integrates with other AWS products, like DynamoDB, S3, RDS, etc. It was demo’d by [Khawaja Shams][15]. He showed an example of using it to do data exploration of tweets on twitter and trends via complex queries on large historical datasets. Undoubtedly this will be a very popular tool in the big data space.

 [1]: https://twitter.com/werner
 [2]: http://aws.amazon.com/rds/postgresql/
 [3]: http://netflix.github.io/#repo
 [4]: https://github.com/Netflix/Cloud-Prize/wiki
 [5]: http://techblog.netflix.com/2012/07/chaos-monkey-released-into-wild.html
 [6]: http://aws.amazon.com/about-aws/whats-new/2012/07/31/announcing-provisioned-iops-for-amazon-ebs/
 [7]: https://www.wetransfer.com/
 [8]: http://www.flickr.com/photos/wetransfer/
 [9]: https://twitter.com/mikecurtis
 [10]: https://www.airbnb.com/
 [11]: http://gizmodo.com/narrative-is-a-lifelogging-camera-thats-finally-happen-1441816911
 [12]: https://www.dropcam.com/
 [13]: https://play.google.com/store/apps/developer?id=Moovit&hl=en
 [14]: http://aws.amazon.com/kinesis/
 [15]: https://twitter.com/ksshams