---
title: 'AWS Notes: Zero to Sixty with AWS Elastic Beanstalk'
author: johnpolacek
type: post
date: 2013-11-14T19:52:25+00:00
url: /2013/11/14/aws-notes-zero-sixty-aws-elastic-beanstalk/
dsq_thread_id:
  - 1966356542
categories:
  - Uncategorized

---

I ran a little late to this one, which is unfortunate because it was a really good one. I got there as Ann Wallace, Solutions Architect at Nike, was in the middle of her slides.

It seems Nike has a similar setup to [AuctionsByCellular][1] actually, with a Java stack built on top of AWS, deploying with [Elastic Beanstalk (EBS)][2]. They went over their EBS deployment process and how they configure their environment. They do zero downtime deployments in much the same way we do by swapping the cname of the old environment with the new. They use .ebextensions to [customize their EBS][3] configuration. They showed their template.json file and an example .ebextension. She went over some of the problems that exist with the EBS deploy process (I&#8217;m sure Amazon is taking notes)

VTex is a large SAAS E-Commerce Platform in Brazil serving Latin America. Geraldo Thomaz, co-Founder and co-CEO, talked about how their use of EBS and AWS has evolved. They now have over 60 applications running on EBS. They did a quick demo of how easy it is to do releases with git, which again matched the deploy process we employ at ABC. They have a philosophy of doing many deployments of smaller size, multiple times a day. They even created a command line wrapper to further automate their deployment process. They use a Splunk .ebextension to monitor performance to make sure when they push new versions that there are no performance hits.

 [1]: http://www.auctionsbycellular.com/
 [2]: http://aws.amazon.com/documentation/elasticbeanstalk/
 [3]: http://aws.typepad.com/aws/2012/10/customize-elastic-beanstalk-using-configuration-files.html