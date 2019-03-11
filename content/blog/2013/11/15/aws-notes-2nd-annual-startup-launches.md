---
title: 'AWS Notes: 2nd Annual Startup Launches'
author: johnpolacek
type: post
date: 2013-11-15T01:05:20+00:00
url: /2013/11/15/aws-notes-2nd-annual-startup-launches/
dsq_thread_id:
  - 1966982741
categories:
  - Uncategorized

---

I always love hearing startup pitches and launches.

**Koality**
  
First was Koality, a build deployment service built, of course, on top of AWS. Koality automatically parallelizes your test suite across available virtual machines, making tests up to 64x faster. They not only do pre-push unit testing (blocking bad changes), they make it easy to have private debug instances. They have a great client list with Dropbox, CrunchBase and most recently Airbnb.

**CardFlight**
  
Next was [CardFlight][1], the _open_ platform for mobile payments. They announced two new features, custom manual entry and integration with Braintree. Free 12-month subscription to their readers.

**Runscope**
  
Some former Twilio guys created [RunScope][2], which is a traffic inspector that aims to make it easier and better to integrate with APIs (like AWS APIs for example). Their debugging tools have tracked over 25 million API calls to date. I liked their motto: Everything is going to be `200 OK`. Their new product announcement was [Runscope Radar][2] which is for adding automated API calls to your testing suite with assertions that can evaluate the request responses.

**SportXast**
  
SportXast is the easiest way to create, view and share family sporting moments. You can do things like easily get instant replays. You can easily connect to a community around an event and share crowdsourced highlights around the players you care about. When a user uploads a video it goes to S3 to SQS to Elastic Transcoder to CloudFront and back to other users. This was a true launch as this was their very first release to users.

**Nitrous.IO**
  
Nitrous is a free cloud-based development environment platform with a web-based IDE and cloud VMs. Their big differentiator from competitors is to reduce latency (via CloudFront) so that it is indistinguishable from localhost. They offer Google Docs-style collaboration. And of course, they’re hiring. (As is everybody!)

Hopefully one or more of these companies become super successful so I can say I was there when they launched!

 [1]: https://getcardflight.com/
 [2]: https://www.runscope.com/