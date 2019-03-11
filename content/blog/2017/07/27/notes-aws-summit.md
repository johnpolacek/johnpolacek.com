---
title: Notes from AWS Summit
author: johnpolacek
type: post
date: 2017-07-27T21:32:40+00:00
url: /2017/07/27/notes-aws-summit/
categories:
  - aws
  - chicago
  - development
  - startups
  - web

---

<img src="/img/blog/2017/07/aws-summit-gesture-232x300.jpg" alt="" width="232" height="300" class="alignleft size-medium wp-image-2205" srcset="http://johnpolacek.com/wp-content/uploads/2017/07/aws-summit-gesture-232x300.jpg 232w, http://johnpolacek.com/wp-content/uploads/2017/07/aws-summit-gesture.jpg 640w" sizes="(max-width: 232px) 100vw, 232px" />I attended the [AWS Summit][1] in Chicago this week. Like many other tech companies, we at Gesture use various AWS products so it was a nice opportunity to get exposed to what is becoming possible with their platform. 

Additionally, looking into what AWS is up to is a great way to see where technology is headed in the near future (and the near future is looking increasingly like things you may have thought only possible in sci-fi movies)

Though many of their services are focused on backend and devops, as a front end developer, there were still many things that appealed to me.

**[Lightsail][2]**
  
Lightweight VPN for hosting simple sites. This is the AWS alternative to the various shared hosting providers out there. Want to spin up a quick WordPress server or marketing site? this is the AWS service for you.

**[Athena][3]**
  
Serverless, interactive query service that makes it easy to analyze big data in S3 using standard SQL. In other words, chuck a JSON file onto S3, define your data structure, then you can run queries on it. Would be cooler if they had a service that could look at a file on S3 and figure out the data structure on its own. Wouldn&#8217;t be surprised if they don&#8217;t have that coming out soon.

**[Rekognition][4], [Polly][5] and [Lex][6]**
  
This is the next level stuff. APIs hooking into AI services. Rekognition does image analysis to make it easy to integrate things like facial recognition and object detection into your applications. Polly and Lex offer a killer combination of text into humanlike speech (Polly) and speech recognition and understanding (Lex) which allow you to add powerful conversational interfaces to applications (the same tech that powers Alexa).

**Serverless ([Lambda][7] + [API Gateway][8])**
  
I&#8217;ve been following [serverless architectures][9] for awhile. It is a rapidly evolving area that is opening up so many different possibilities when it gets plugged into other services like those above.

**[Mobile Hub][10]**
  
Really cool configurator for building mobile apps, including mobile web which is more where my interests lie. Makes it really easy to get up and running with services like user authentication and management ([Cognito][11]), a NoSQL DB ([DynamoDB][12]), Storage ([S3][13]), etc. These baseline core services are low cost and scale. Lots of popular [apps and companies][14] have gotten their start with these and have continued to rely on them after scaling.

As I write this I am having fun doing the AWS Game Day challenge with my team at [Gesture][15] (currently we’re in first place!) 

<div>
  <img src="/img/blog/2017/07/20414161_3226449296878_7091066959590019745_o-300x169.jpg" alt="" width="300" height="169" class="size-medium wp-image-2211" srcset="http://johnpolacek.com/wp-content/uploads/2017/07/20414161_3226449296878_7091066959590019745_o-300x169.jpg 300w, http://johnpolacek.com/wp-content/uploads/2017/07/20414161_3226449296878_7091066959590019745_o-768x432.jpg 768w, http://johnpolacek.com/wp-content/uploads/2017/07/20414161_3226449296878_7091066959590019745_o-1024x576.jpg 1024w, http://johnpolacek.com/wp-content/uploads/2017/07/20414161_3226449296878_7091066959590019745_o-500x281.jpg 500w, http://johnpolacek.com/wp-content/uploads/2017/07/20414161_3226449296878_7091066959590019745_o.jpg 1440w" sizes="(max-width: 300px) 100vw, 300px" />
</div>

 [1]: https://aws.amazon.com/summits/chicago/
 [2]: https://aws.amazon.com/blogs/aws/amazon-lightsail-the-power-of-aws-the-simplicity-of-a-vps/
 [3]: https://aws.amazon.com/athena/
 [4]: https://aws.amazon.com/rekognition/
 [5]: https://aws.amazon.com/polly/
 [6]: https://aws.amazon.com/lex/
 [7]: https://aws.amazon.com/lambda/
 [8]: https://aws.amazon.com/api-gateway/
 [9]: https://css-tricks.com/build-custom-cms-serverless-static-site-generator/
 [10]: https://aws.amazon.com/mobile/
 [11]: https://aws.amazon.com/cognito/
 [12]: https://aws.amazon.com/dynamodb/
 [13]: https://aws.amazon.com/s3/
 [14]: https://aws.amazon.com/solutions/case-studies/
 [15]: http://gesture.com