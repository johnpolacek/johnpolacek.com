---
title: 'AWS Notes: Amazon Workspaces'
author: johnpolacek
type: post
date: 2013-11-14T21:57:13+00:00
url: /2013/11/14/aws-notes-amazon-workspaces/
dsq_thread_id:
  - 1966629547
categories:
  - Uncategorized

---

This session was about the new [Workspaces][1] product that Amazon launched at the first day AWS re:Invent keynote. First he covered what customer problems they hope to solve with this. First, was to deliver desktop virtualization to tablets. Also, enable workforces to be more flexible and lower the cost for remote worker infrastructure.

End users can access their VM from laptop, iPad, Kindle Fire, Android. In his demo, AWS General Manager Gene Farrell grabbed an iPad that was running Windows, opened up Word and edited a document. It was interesting to see their UI for enabling a Windows 7 PC experience on a touchscreen tablet (via a radial touch menu). It integrates with Active Directory so users can access their organization’s intranet and so forth.

Interestingly, there is no data on the virtual device, it only delivers pixels and everything is stored on S3.

 [1]: http://aws.amazon.com/workspaces/