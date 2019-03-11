---
title: Notes from UX Camp Chicago
author: johnpolacek
type: post
date: 2016-05-01T12:05:07+00:00
url: /2016/05/01/notes-ux-camp-chicago/
categories:
  - chicago
  - development

---

<img src="/img/blog/2016/05/CdwT3MgUMAEcrwk-300x150.jpg" alt="UX Camp Chicago Saturday April 30, 2016 at Columbia College Film Row" style="width:97%;" />

It was a rainy day in Chicago yesterday, so it was a perfect time to spend inside at Columbia College for [UX Camp Chicago][1]. It was yet another great conference put on by the excellent Russ Unger and the excellent team at [ChicagoCamps.org][2].

Below are my notes from all the talks I attended. There were 3 rooms of talks happening simultaneously, so it does not come even close to capturing everything going on there.

While taking notes on my laptop, I occasionally stopped and just listened so there were all kinds of cool things the speakers had to say that I did not type down. The next event from Chicago Camps is [Prototypes, Process and Play][3] in August, so if any of the below sessions sound cool, you should definitely scoop up some tickets for that.

Ok, here are my notes!

* * *

## Lessons Learned from the World of Wearables

### by Carolyn Chandler

<small><a href="http://twitter.com/chanan">@chanan</a></small>

5900 steps = average number of steps of a person in one day
  
10,000 = the number of steps that sells fitness trackers
  
1 in 10 consumers own a tracker
  
40% of users drop fitness tracking in the first 6 months

During her work for Mira, Carolyn started an evaluation of fitness trackers by wearing 6 different brands of wearables as she started the Couch to 5K program. Most fitness trackers have 3-Axis Accelerometer, Gyroscope and Altimeter. Some have other features, but the most important thing is how they measure steps. 

Standardization amongst fitness technology companies is a big challenge. Strides are measured by algorithms, which these companies do not share with each other. Fitbit was the most generous with step count &#8211; sometimes by as much as 4,000 steps. Typically, the variance between companies is around 2,000. Because there is no standardization, it makes it harder to compare your fitness level to other friends that do not have the same brand of tracker.

Everyone knows about watches and fitness trackers – what about other types of wearables such as hazardous chemical detectors (My Exposure), Google glucose sensing contacts, UV monitors (June).

[Body area network][4] is all of the things you can wear and how they get brought together.

Carolyn then talked about her learnings from the research she did working with Mira, which is an activity tracker specifically designed for women. A big problem she discovered was that most fitness trackers actually reduced the confidence of the women wearing it, for a variety of reasons including the style of the trackers, battery life and more. The tone communicated by these products can come off as judgmental.

Cheerful communications, especially in context, were very well received, especially when done in an interesting way that tells a story. For example: “Feeling lucky? You just walked the distance of the Vegas Strip today!”.

There are tradeoffs involved in design decisions. For example, a larger screen leads to a shorter battery life.

The next part of her talk was about CES. And interesting thing she saw was Underarmour’s [health box][5] which contained related wearable products, including one with a shoe with a tracker built in that has enough battery life to last one year. Another interesting product was [smart fitness clothes][6] that measure your waist size and other things. 

She looked for advancements in improving battery life, such as using motion to charge, but unfortunately the current products don&#8217;t work very well. Others are trying to use solar energy to recharge, for example having [solar panels on purses or bags][7]. 

* * *

## How to Guarantee Product Failure

### by Sean Johnson

<small><a href="https://twitter.com/intentionally">@intentionally</a></small>

Designers are marketers. 

Business Objectives + User Needs. Designers especially in UX focus on user needs. This manifests in failures because business objectives are important. 

Consider the customer funnel. Most companies consider acquisition and retention, but ignore what happens in the middle of the funnel, which is the engine of your product.

Focusing on the middle of the funnel, improving the experience of using the product, is better because product enhancements are more sustainable. 

Retention is the most important level in the funnel. If you have a lack of retention, nothing else matters. Good retention means increased lifetime value of a customer.

3 levels to improve retention: Onboarding, Building Habits and Maximize Frequency.

Ghost town problem. How does your product look when a user first gets there and there is no content.

Assuming someone signed up for the product and is going to get to a spot where the content is filled in is a mistake.

Leveraging social sign on is a way to bring in content for the user. Less fields is better (combine first and last name, no confirm email or password). Avoid email verification requirements which block the user from progressing and force the user to leave and come back.

The goal is to have the user understand the importance of the product to them as quickly as possible. Anything that gets in the way of that is a problem. Using game mechanics to encourage behavior that will lead to this is a good strategy. Creating a custom product tour is another good idea.

Bake in proof that product will deliver to add to the user’s confidence in the product.

Explain reasons why you need users to opt in along the way of their use of the product will also build and maintain confidence in the product.

When possible, combine fields (for example, phone or email in one field) do not make users click submit before validating fields.

Do not use lorem ipsum text when designing. Always at least take a stab at writing copy.

For mobile apps, do not make first screen be a login. Let people experience the product before forcing them to create an account. Have onboarding experience assist in the creation of content. Hold off on account creation until user is ready to save their progress. 

A newer approach is to use a conversational bot style chat interface to help with onboarding.

Think of email as a core part of the product.

Commit to a cadence of build, measure, learn. The speed to which you can burn through the loop will increase the likelihood of your product’s success.

Designers should love data. Use data to figure out why users continue to use product.

Focus on OMTM (One Metric That Matters).

There are not many silver bullets. Improving products in a long, grueling series of steps. A great deal of perseverance is required.

Get outside of the mindset of lore &#8211; things everyone does but are not tested.

* * *

## Sketch-to-Code Prototyping

### by Will Hacker

<small><a href="http://twitter.com/willhacker">@willhacker</a></small>

<blockquote class="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    Sketch-to-code <a href="https://twitter.com/willhacker">@willhacker</a> <a href="https://twitter.com/hashtag/uxcamp?src=hash">#uxcamp</a> <a href="https://twitter.com/hashtag/chicago?src=hash">#chicago</a> @ Chicago, Illinois <a href="https://t.co/r5HIGmTLCy">pic.twitter.com/r5HIGmTLCy</a>
  </p>
  
  <p>
    &mdash; Nikola Ranguelov (@nickdotvr) <a href="https://twitter.com/nickdotvr/status/726449192189759488">April 30, 2016</a>
  </p>
</blockquote>



Wireframes don&#8217;t cut it anymore, especially for rapid prototyping. Over 500 height and width configurations for Android. 

Highly recommended following [Josh Clark][8].

Make lots of sketches. Low cost. Sketches plus post-it notes with color to represent different things (e.g. yellow for existing logic, purple for new). Will advocates then prototyping in pure code. The big problem for devs when you give them a representation of something “pixel perfect” is that you don&#8217;t consider that it will be delivered to 28,000 different devices.

Will’s team created a live code pattern library created by developers tied to the user experience team. With this library, they are able to deliver working responsive prototypes for review. 

One challenge brought up by an audience member was that developers feel like their job is being taken away from them when they are delivered code.

Having a philosophy of “we build mobile products that people may or may not use on a larger screen”, changes the focus and mindset. The mobile view is the most important view.

Different team structure of interaction designer, visual designer and, something new, a UX Prototyper. This team delivers the prototype to development for inclusion in the product. The shift is that front end dev is done as part of the UX team, not the IT team.

This gets away from mockups and sending PDFs full of screens they don&#8217;t understand. Instead, deliver links that the viewer can see on their device.

* * *

## Vocal Exercises: Finding Your Voice

### by Natalie Kurz

<small><a href="http://twitter.com/beautytruth">@beautytruth</a></small>

<blockquote class="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    Nice intro to voice and tone during <a href="https://twitter.com/beautytruth">@beautytruth</a>'s <a href="https://twitter.com/ChicagoCamps">@ChicagoCamps</a> talk, as illustrated by&#8230; One Direction <a href="https://t.co/s7KaCMIbBg">pic.twitter.com/s7KaCMIbBg</a>
  </p>
  
  <p>
    &mdash; Corneliux (@corneliux) <a href="https://twitter.com/corneliux/status/726474657642082304">April 30, 2016</a>
  </p>
</blockquote>



Lauren started with a show not tell explanation of the concept of a brand voice. She started with a formal, professional “About Me” description. Next, she displayed the same information, but in an informal, personal voice.

Your voice makes you different from everyone else. For brands, different writers are writing different parts, but it should sound like it came from one person. A consistent voice will build trust with users.

Your website or product can have one voice, but different tones depending on the context and emotional state of the user.

Think about how you want people to think about your product. Different approaches during a workshop to developing a brand voice would be card sort, then evaluating paired terms, opposites and spectrum. Narrowed down the terms, looking to avoid misinterpretations, use a “we are \____ not _\_\\_\_” or “we are \_\___ like a \____” to further focus in. 

She brought up company 404 pages as a good example of whether a company has a voice, she show 404 pages for the email marketing companies <a href="http://mailchimp.com/404/" class="broken_link" rel="nofollow">Mailchimp</a>, Emma (whimsical) and Active Campaign (serious, professional) to compare and contrast some brand voices. Keep in mind that imagery also has a voice.

Having writing guidelines is a way to explain to writers how to write consistently in the brand voice, and for evaluating existing communications. Giving examples is to illustrate the brand voice is the most important part of good writing guidelines. Also, it is important to talk about tone as it changes for different parts of your site and for different personas and mediums.

* * *

## Wearables for Everyone

### by Scott Sullivan

<small><a href="http://twitter.com/scotsullivan">@scotsullivan</a></small>

<blockquote class="instagram-media" data-instgrm-version="6" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
  <div style="padding:8px;">
    <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:33.3333333333% 0; text-align:center; width:100%;">
      <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;">
      </div>
    </div>
    
    <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
      <a href="https://www.instagram.com/p/BE1m5RUkGRd/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank" rel="noopener noreferrer">A photo posted by Scott November (@scootsullivan)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-04-30T20:21:26+00:00">Apr 30, 2016 at 1:21pm PDT</time>
    </p>
  </div>
</blockquote>



Wearables suck.

The idea is good, but what’s out there sucks and design is the way to make it not suck.

We don&#8217;t think about the consequences of the new things we are making with this new smaller technology. We don&#8217;t know enough yet to have common patterns — it is the wild west.

We focus too much on industrial design, not enough on [service design][9]. Service design is an eagle’s eye view of an end-to-end experience.

Leonardo DaVinci invented a pedometer for Roman soldiers. In the 1960&#8217;s, the Japanese were getting fat so they became the first movers to mass market a pedometer to address this.

Experiential knowledge is different. You get it from the context of your life. You know what 10,000 steps means for you in terms of all the activities you do in a day to get to that goal. As you get experience, a fitness tracker gets less useful as you know and understand how to get to 10,000 steps and it has served its purpose at that time.

With the Fuel Band, Nike concentrated on Fuel Points which is different than steps. Playing basketball for an hour versus walking for an hour might have similar step counts, but playing basketball expends much more energy.

On the scale of services vs. commodities, some fitness trackers are closer to the commodity side (you had x amount of steps) while others are geared more towards service (based on your activity, you should do x). 

A lot of people don&#8217;t use the sleep tracking because you can&#8217;t do anything with it. Jawbone UP3 follows a “Track, Understand and Act” philosophy and gives advice on what to do based on your sleep tracking, which is more useful. Yet [Fitbit 1][10] outsells Jawbone UP3. This is likely because Fitbit has a screen and Jawbone does not, and people do not understand the idea of a disposable technology whose value is to pass data to your other devices and services.

In testing the calorie counting watch [Gobe][11], he finds that sometimes it is eerily accurate and other days it is really off. Not there yet.

Fitness tracking is only a small amount of a health picture, and as important as diet.

Smart watches suck because they are too distracting. Notifications suck. They should be non-intrusive dashboards. This is what watches have traditionally been. If you need to have a smartwatch, Android Wear lets you do more service-based things with Geofencing and other contextual things.

He was especially excited about [Withings Activité][12], a beautifully designed traditional analog watch that also does fitness tracking with a battery life of up to 8 months.

Google Glass was not a failure, but rather an experiment. It proved that certain technologies are not inevitable. The future of everyone wearing intelligent smart glasses is not a future that most people currently believe is going to happen.

The [Narrative Clip][13] is Scott&#8217;s favorite wearable device. Rather than active photography, it is passive and unobtrusive. It takes pictures of moments of you life that would otherwise go undocumented. It is a way to capture surprisingly meaningful moments that would otherwise go unnoticed.

* * *

## UXers Are From Mars, BAs Are From Venus

### by Cornelius Rachieru

<small><a href="http://twitter.com/corneliux">@corneliux</a></small>

<blockquote class="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    Designers and business analysts: how the job title has evolved over time <a href="https://twitter.com/corneliux">@corneliux</a> <a href="https://twitter.com/hashtag/uxcamp?src=hash">#uxcamp</a> <a href="https://t.co/spHtHoXzYo">pic.twitter.com/spHtHoXzYo</a>
  </p>
  
  <p>
    &mdash; Rachel McClung (@rachelmc) <a href="https://twitter.com/rachelmc/status/726509755183849475">April 30, 2016</a>
  </p>
</blockquote>



Something you don&#8217;t learn in design school is that design is politics. Everything we do is subject to scrutiny and opinion. How teams work together is very important. Individuals might be stars, but how do people work together.

Companies are actually starting to [hire teams][14] (e.g. Stripe). Learning how to work with counterparts (e.g. on the business side) is a soft skill that should not be ignored.

The budget priority at startups is on UX work, at enterprises it is on business analysis.

Throughout history, design and business analysis developed separately, but have been impacted together by such things as the arrival of Microprocessors and the emergence of Agile development.

Business analysts design and describe solutions to stakeholders, which overlaps what design analysts do. This leads to conflict, for example in defining requirements. 

In the latest [BABOK (Business Analyst Book of Knowledge)][15] defines Usability as: Ease with which a user can learn to use the solution. This is actually learnability. Only half a page of the book touches on visual design.

Designers do not do a good job of explaining to people what they do or explaining the design process.

Cornelius proposed this definition of UX: An evidence-based methodology that involves end-users throughout the creative process to identify, conceptualize and design services or products that are measurably easier to use, learn and remember.

How do we resolve the conflict between designers and business analysts? Work together to define methods to use where responsibilities overlap. We have been trained to treat users a certain way, but not our team members. Being nice to each other is the key to being successful as a team.

Atlassian developed an [Experience Canvas][16] based on the Business Model Canvas.

UX designers are encouraged to work in different industries, and are viewed as agents of change. Whereas business analysts will often stay in one industry, and are viewed as experts.

When it comes to making design decisions, politics come into play. Design decisions may be made by Business Analysts and executives independently of design. The [Dunning-Kruger Effect][17] can lead them to being confident in these decisions.

The [Design Validation Stack][18] has 3 layers: Design Theory, User Research, User Evidence. The third layer (evidence) is more reliable than the first (theory). Business Analysts similarly have a Business Validation Stack of theory, research and evidence.

At the theoretical level, we have deductive logic to determine what should be built based on accepted theories. At the research level, we use inductive logic to resolve arguments based on evaluating the validity of hypotheses.

Formal focus groups typically used by business analysts use people with their guards up, being skeptical and critical. A story-based conversation are much easier to synthesize because people are at ease.

At the user evidence level, we have an argument being tested in the real world. User experience practitioners implement usability testing of prototypes, whereas business analysts practice user acceptance testing on the product or service after it is built. Therefore, usability testing is a better form of evidence-based testing as you get feedback sooner, saving time and money.

It seems that the roles of Business Analysts and User Experience Designers are destined to merge.

 [1]: http://chicagocamps.org/events/2016/ux-camp/
 [2]: http://chicagocamps.org
 [3]: http://chicagocamps.org/events/2016/prototypes-process-play/
 [4]: https://en.wikipedia.org/wiki/Body_area_network
 [5]: http://amzn.to/1pViXo7
 [6]: https://www.liveathos.com/
 [7]: http://www.sunnybag.com/
 [8]: https://twitter.com/bigmediumjosh
 [9]: https://en.wikipedia.org/wiki/Service_design
 [10]: http://amzn.to/1WzymYl
 [11]: http://www.amazon.com/Healbe-Corp-Calorie-Counting-Smartwatch/dp/B017W514BE/ref=sr_1_1_a_it?ie=UTF8&qid=1462103258&sr=8-1&keywords=gobe
 [12]: http://amzn.to/1O6gHR2
 [13]: http://amzn.to/1O6gSfr
 [14]: https://stripe.com/blog/bring-your-own-team
 [15]: http://amzn.to/1W0kAyV
 [16]: http://blogs.atlassian.com/2013/10/fight-the-dark-side-of-lean-ux-with-the-experience-canvas/
 [17]: https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect
 [18]: http://www.uxbooth.com/articles/winning-a-user-experience-debate/