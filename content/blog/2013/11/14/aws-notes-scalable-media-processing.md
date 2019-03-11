---
title: AWS Notes – Scalable Media Processing
author: johnpolacek
type: post
date: 2013-11-14T00:16:10+00:00
url: /2013/11/14/aws-notes-scalable-media-processing/
dsq_thread_id:
  - 1963977784
categories:
  - Uncategorized

---

I have some background in working with delivering media via the web at my previous job, for example when I created [BigVideo.js][1].

“For any given TV show, the footage shot will have been converted into over 1000 different formats”

No question, video is a pain in the ass. I was anxious to find out how AWS can make it less so. Clearly you can use it to make a great custom architecture solution for ingesting, processing and serving, with products like [Amazon Elastic Transcoder][2], S3 multipart APIs, [SQS][3] and [Elemental Cloud][4]. But&#8230; still a pain in the ass. I expect eventually they will launch their own service similar to [Brightcove][5]. Unfortunately, not just yet.

 [1]: http://dfcb.github.io/BigVideo.js/
 [2]: http://aws.amazon.com/elastictranscoder/
 [3]: http://aws.amazon.com/sqs/
 [4]: https://aws.amazon.com/marketplace/pp/B00CQ774VS?sr=0-2
 [5]: http://www.brightcove.com/en/