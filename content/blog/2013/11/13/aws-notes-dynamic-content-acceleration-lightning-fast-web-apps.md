---
title: 'AWS Notes – Dynamic Content Acceleration: Lightning Fast Web Apps'
author: johnpolacek
type: post
date: 2013-11-13T21:20:28+00:00
url: /2013/11/13/aws-notes-dynamic-content-acceleration-lightning-fast-web-apps/
dsq_thread_id:
  - 1963630946
categories:
  - Uncategorized

---

Now more than ever, having performant applications is essential for users. Every year, Forrester does a study showing how much response time a user will tolerate before abandoning an app. Every year that number shrinks, going from 4 seconds to now somewhere less than one second. A 1 second delay results in a 7% revenue loss.

Prasad Kalyanaraman, VP of AWS Edge Services, covered caching static or re-usable content, which is something most apps typically do. Then he talked about web apps can use [Amazon CloudFront][1] to deliver an entire website, including dynamic, static, streaming, and interactive content using a global network of edge locations.

Next, AWS Solution Architect Parviz Deyhim came out to get more into the technical details of how to improve web app performance. He first talked about the importance of looking at Waterfall Graphs.

One key thing is to look beyond HTML, CSS and JavaScript for cacheable resources. Even API calls may be able to cached for hours, minutes. Even caching assets for a second can be valuable, especially if you are dealing with a heavy API getting 1000’s of requests/second. CloudFront can cached any content with a query string, and every unique query string is cached object.

Parviz went on to detail a number of ways to use [CloudFront][1] to optimize delivery speed of content from your server to your user &#8211; definitely worth looking into adding to your tech stack if you haven’t already!

 [1]: http://aws.amazon.com/cloudfront/