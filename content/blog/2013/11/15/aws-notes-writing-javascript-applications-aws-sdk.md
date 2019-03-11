---
title: 'AWS Notes: Writing JavaScript Applications with the AWS SDK'
author: johnpolacek
type: post
date: 2013-11-15T19:04:59+00:00
url: /2013/11/15/aws-notes-writing-javascript-applications-aws-sdk/
dsq_thread_id:
  - 1969045917
categories:
  - aws
  - development
  - javascript

---

AWS Developer [Loren Segal][1] introduced the [AWS SDK for Node.js][2] It is open source, apache-licensed and on [Github][3]. They have full service coverage across 30 services.

Install through npm, of course:
  
`npm install aws-sdk`

Configuration is easy and can be done programatically (there’s a global configuration object). Loren ran through a bunch of code snippets for how to do various things. It wasn’t long before he got into some live coding in the terminal. First up some simple S3 requests and response handling. Next, his next livecoding example demo’d response pagination for scanning large DynamoDB datasets. Then he showed request event handling, and demonstrated the AWS global events object, allowing you to do global event handling on request success response for example. Last, he went over programmatically configuring credentials, showing that you can set temporary creds that automatically expires.

Loren moved on to show off the [AWS SDK for JavaScript in the Browser][4] which is now in developer preview. This literally allows you to build web applications with static files. Some examples of things that could be easily created are forum software, blogging, commenting systems, browser extensions and mobile apps. This is freaking awesome.

He created a sample blogging application (check it out [][5]on github). The [app.js][6] script is a mere 260 lines of code.

Loren live deployed the app. It had permissions set up, so he did a social login, then created a blog post using markdown and an open source WYSIWYG editor. Did I mention this is all with static HTML/CSS/JS files?! Nice. You can see the demo at (demo link no longer available).

He went over the key differences between doing traditional three-tiered architecture vs two-tier development with AWS in the browser. He did say that in order to use it with S3, you need to configure CORS settings. For other services, CORS is not necessary because the requests for them are already authenticated.

He stressed the importance of not hardcoding your credentials. They get around this by using Web Identity Federation which trades access tokens provided through other services like Facebook, Google or Amazon for AWS keys. He showed quickly how to set up a Facebook application to create [IAM roles][7] and set up permissions for users. He showed some code for working with Facebook Access Tokens.

He finished by talking about the open source community. They love to get feedback, pull requests, issue reports and third-party plugins.

 [1]: https://twitter.com/lsegal
 [2]: http://aws.amazon.com/sdkfornodejs/
 [3]: https://github.com/aws/aws-sdk-js
 [4]: http://aws.amazon.com/sdkforbrowser/
 [5]: https://github.com/awslabs/reinvent2013-js-blog-demo
 [6]: https://github.com/awslabs/reinvent2013-js-blog-demo/blob/master/js/app.js
 [7]: http://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html