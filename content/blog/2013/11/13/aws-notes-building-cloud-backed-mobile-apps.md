---
title: AWS Notes – Building Cloud-Backed Mobile Apps
author: johnpolacek
type: post
date: 2013-11-13T22:10:52+00:00
url: /2013/11/13/aws-notes-building-cloud-backed-mobile-apps/
dsq_thread_id:
  - 1963732578
categories:
  - Uncategorized

---

This session was about streamlining sign-in with social login, storing user data and more.

AWS Software Engineer Glenn Dierkes spoke about how to use the [S3 Transfer Manager][1] for iOS and Android that can allow you to pause, resume and cancel uploads to S3 and provide upload failure tolerance to your apps and websites. It does this with multipart uploads that can be done asynchronously in the background.

Next he spoke about the [Geo Library][2] for [Amazon DynamoDB][3]. It stores geo-hash indexes on the backend and allows you to do location and proximity lookups.

He then gave a larger overview of the [AWS Mobile SDK’s][4] and how to use them.

Last, he covered [SNS mobile push notifications][5] and how it simplifies messaging across mobile devices.

In case you didn’t know, AWS has open sourced quite a lot of their code on Github, so if you are a fan or user, give the [AWS Github][6] account a good browse.

 [1]: http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/transfer/TransferManager.html
 [2]: https://github.com/awslabs/dynamodb-geo
 [3]: http://aws.amazon.com/dynamodb/
 [4]: http://mobile.awsblog.com/post/Tx1FWRIRDX5SU3R/New-AWS-Mobile-SDKs-Release-1-7-0
 [5]: http://aws.amazon.com/sns/
 [6]: https://github.com/aws/