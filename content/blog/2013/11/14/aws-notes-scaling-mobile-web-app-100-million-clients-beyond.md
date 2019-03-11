---
title: 'AWS Notes: Scaling a Mobile Web App to 100 Million Clients and Beyond'
author: johnpolacek
type: post
date: 2013-11-14T23:49:59+00:00
url: /2013/11/14/aws-notes-scaling-mobile-web-app-100-million-clients-beyond/
dsq_thread_id:
  - 1966845728
categories:
  - Uncategorized

---

For me, this was the best session of the conference so far. [Joey Parsons][1], Head of Operations at [Flipboard][2] gave a talk about how they grew the company from their first user through to today.

He started by covering Flipboard’s “prototype phase” going to 100 million users. They started with a simple stack of Rails, EC3, S3, RDS, MongoDB and memcache. They submitted to the app store, launched on the iPad and monitored the Cloudwatch analytics. Then after some initial celebration, they noticed their CPUs were spiking. They spun up new servers and quickly hit the limit on their AWS account. Then they got rate limited on Twitter and Facebook. They made a call that night to rate limit their users to keep things in check, slowly opening the service up for new users.

They soon made a decision to switch to Java instead of Rails and add [CloudFront][3] to their stack. They also broke up what was once a monolithic app into separate microservices. They shifted their primary data store to MySQL via Amazon RDS. They started focusing on instrumentation and monitoring. Every instance they have was kept track of in a SimpleDB table with detailed information on the instance. This allowed them to do fast and powerful lookups of all the servers that power the operations of their company.

The next milestone for Flipboard was when they launched their iPhone app. Once again, after some initial celebration, they ran into some unforeseen performance problems as it scaled. In one night, with RDS, they were able to build a sharding mechanism that they still use to this day. Funnily enough though, the sharding didn’t matter for their problem — it all came down to one bad query that they fixed and everything went back to working great.

Their next launch was Android, and there were no bad stories to report there. Their stack continued to grow, adding HBase, Hadoop, Redis, Puppet and more.

They continued to focus heavily on instrumentation for all their services. They set up processing mechanisms with Hadoop, Storm and Kafka. They moved away from deploying with custom bash scripts, switching to [Puppet][4]. The most important thing though, he said, was to move away from just throwing hardware at problems and instead focus on using the appropriately sized EC2 instance both for best performance and cost savings.

<a href="http://johnpolacek.com/wp-content/uploads/2013/11/chart.png" rel="lightbox[1658]"><img src="/img/blog/2013/11/chart-300x169.png" alt="chart" width="300" height="169" class="alignleft size-medium wp-image-1659" srcset="http://johnpolacek.com/wp-content/uploads/2013/11/chart-300x169.png 300w, http://johnpolacek.com/wp-content/uploads/2013/11/chart-1024x579.png 1024w, http://johnpolacek.com/wp-content/uploads/2013/11/chart-500x282.png 500w, http://johnpolacek.com/wp-content/uploads/2013/11/chart.png 1382w" sizes="(max-width: 300px) 100vw, 300px" /></a>Their focus on instrumentation was not confined to server-side. Flipboard monitors a number of metrics on the client side by sending reporting data (such as how long it takes to open the app) from their apps to [Graphite][5]. They like the tool for metrics from hosts, apps, usage and logging. He gave props to the [Cloudwatch2Graphite][6] open source project that brings Cloudwatch metrics into Graphite. They divide their deployment into groups and use CloudWatch metrics to catch errors before they deploy. He had a neat slide of a pretty chart that they generate from that data using [d3.js][7] and [cubism.js][8] that can allow them to quickly see which parts of their stack may be causing performance problems.

What&#8217;s next for Flipboard technology? Better use of auto scaling groups, by dialing into lots of signals for better predictive analysis, continued heavy focus on picking the right instance types and taking advantage of any new AWS products.

He concluded with a philosophy that I share which is that the unknown is not scary, but rather it is exciting.

 [1]: https://twitter.com/joeyparsons
 [2]: https://flipboard.com/
 [3]: http://aws.amazon.com/cloudfront/
 [4]: http://puppetlabs.com/puppet/what-is-puppet
 [5]: http://graphite.readthedocs.org/en/latest/
 [6]: https://github.com/edasque/cloudwatch2graphite
 [7]: http://d3js.org/
 [8]: http://square.github.io/cubism/