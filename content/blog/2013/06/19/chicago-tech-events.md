---
title: Chicago Tech Events
author: johnpolacek
type: post
date: 2013-06-19T17:44:29+00:00
url: /2013/06/19/chicago-tech-events/
dsq_thread_id:
  - 1412836038
categories:
  - chicago
  - development
  - events
  - html5
  - javascript
  - Uncategorized
  - web

---

[<img src="/img/blog/2013/06/chicagotechevents-logo-180.png" alt="chicagotechevents-logo-180" width="180" height="180" class="alignleft size-full wp-image-1383" srcset="http://johnpolacek.com/wp-content/uploads/2013/06/chicagotechevents-logo-180.png 180w, http://johnpolacek.com/wp-content/uploads/2013/06/chicagotechevents-logo-180-150x150.png 150w" sizes="(max-width: 180px) 100vw, 180px" />][1]Throughout the past year, I have been keeping a running list of cool local Chicago tech events and sharing it with friends and the people at [work][2]. I&#8217;ve decided to make it into a thing and put it out there. So I present to you&#8230; [chicagotechevents.com][1]

I managed to have some fun building it too. It was my first time using [Twig templates][3], and really liked it. I expect I’m going to be using that on a lot of things in the future. Also, I am trying out a couple [AWS products][4]. I built the backend on [DynamoDB][5] because why not. I made a simple admin page for adding the events to DynamoDB. Every day, a CRON job runs that goes through the events and makes a JSON file with all the data, and puts it onto [S3][6]. When you go to [chicagotechevents.com][1], it is loading that JSON file and smushing it together with a Twig template. Nice and simple.

I am also using [Amazon SES][7] for the first time for sending out the email newsletter, because the price was right and integration was easy (so far).

 [1]: http://chicagotechevents.com
 [2]: https://twitter.com/draftfcb
 [3]: http://twig.sensiolabs.org/
 [4]: http://aws.amazon.com
 [5]: http://aws.amazon.com/dynamodb/
 [6]: http://aws.amazon.com/s3/
 [7]: http://aws.amazon.com/ses/