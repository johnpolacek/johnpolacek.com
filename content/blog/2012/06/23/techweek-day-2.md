---
title: Techweek Day 2
author: johnpolacek
type: post
date: 2012-06-23T21:59:42+00:00
url: /2012/06/23/techweek-day-2/
categories:
  - development
  - web

---

#### Zero to Clojure Workshop

<a href="https://twitter.com/#!/trptcolin" target="_blank" rel="noopener noreferrer" class="broken_link" rel="nofollow">Colin Jones</a> introduced me to a new (to me) way of learning a new coding language: <a href="http://dorkbyte.com/2010/12/08/koans-are-an-awesome-way-to-learn-programming/" target="_blank" rel="noopener noreferrer">Koans</a>. After a quick overview of the Clojure programming language, he got us all started on <a href="https://github.com/functional-koans/clojure-koans" target="_blank" rel="noopener noreferrer">Clojure Koan exercises</a>.

#### Creating Viral Websites

<a href="https://twitter.com/#!/EmersonSpartz" target="_blank" rel="noopener noreferrer" class="broken_link" rel="nofollow">Emerson Spartz</a>, the founder of Mugglenet (largest Harry Potter website). I had already heard of Emerson via a <a href="http://mixergy.com/spartz-spartz-media-interview/" target="_blank" rel="noopener noreferrer">great podcast interview</a> he did a few months ago. Spartz Media are the people behind <a href="http://omgfacts.com" target="_blank" rel="noopener noreferrer">OMGFacts</a> (like did you know you can&rsquo;t hum while you hold your nose?), Gives Me Hope and SmartphOWNED.

Some key points:

  * He highly recommended the book <a href="http://www.amazon.com/Word-Mouth-Marketing-Companies-Talking/dp/1427798613" target="_blank" rel="noopener noreferrer">Word of Mouth Marketing</a>.
  * The Viral Coefficient is a method of measuring the virality of content. The goal is to be above 1 (everyone who sees the content refers more than one person).
  * Innovation is an adaptation of an existing idea. Stand on the shoulders of giants.
  * Three types of content go viral: facts, quotes & jokes.
  * For testing, use a small sample size (30 gets you to 90% success rate)

The key takeaway from his session was the simple concept that the more incentive you give to people to share, the more likely they are to share. He identified a couple ways to get people to share.

_Bribery_ &#8211; If you want people to share your content, you need to think of every possible way you can encourage people to do so (leave a trail, content hiding, discounts/coupons, donations, ask for referrals, etc).

_Quality_ &#8211; It is extremely difficult to create viral videos (Spartz Media gets 1 in 4000 videos to go viral and it is their specialty). No one nows exactly why a particular video goes viral, but there are things that make it more/less likely. The best way to do this is take something that is viral in one community and clone it for another.

#### Improving Your User Interface with HTML5 & CSS3

<a href="https://twitter.com/#!/shayhowe" target="_blank" rel="noopener noreferrer" class="broken_link" rel="nofollow">Shay Howe</a>, designer and user interface engineer at Groupon led this session. Learned a couple new things like <datalist> and <a href="http://html5pattern.com" target="_blank" rel="noopener noreferrer">HTML5 Patterns</a>, a great resource for typically used regex&rsquo;s for form validation. </ul> 

#### Beyond Display Advertising: Social, Action, Intelligence

This was one of the better panels I&rsquo;ve been to. Here are my notes

  * The first banner ad was created by Wired Magazine in 1994. Banner ads have not evolved much since then.
  * Brands want to do revolutionary things, but they also want turnkey solutions
  * Identifying ROI is a big challenge
  * Small brands are innovators/guinea pigs
  * Brands make a mistake by copycatting popular sites rather than partnering with them, or outsourcing the content creation to their community. Brands need to figure out who they are. Authenticity is important.
  * Banner ads are a way of controlling the message and avoiding having to engage directly with your audience. They play it safe, and the result is vanilla.
  * Brands care about stuff that no one on the internet cares about.
  * Do banner ads need to be clicked on? Or just seen? Are billboards or TV ads clicked on? Maybe we&rsquo;re measuring it wrong. We need to measure that the message is recieved.

#### API Showcase

<img src="/img/blog/2012/06/woodbox.jpg" alt="" title="woodbox" width="120" height="108" class="alignleft size-full wp-image-591" />The panel discussion started off with a great visual representation of what an API is. Given a puzzle box, the shapes are the data, the app is the box, and the API is the panel with the holes for the shapes to go through.

After the introduction, there were quick demos of the panelists&rsquo; various API offerings, including <a href="https://www.optimizely.com" target="_blank" rel="noopener noreferrer">Optimizely</a>, OnStar, <a href="http://www.appcelerator.com/" target="_blank" rel="noopener noreferrer">Appcelerator</a>, Mashery and <a href="http://www.twilio.com" target="_blank" rel="noopener noreferrer">Twilio</a>. Mashery was very impressive. I look forward to having a project where I can use it. Then Twilio&rsquo;s <a href="https://twitter.com/#!/dN0t" target="_blank" rel="noopener noreferrer" class="broken_link" rel="nofollow">Rob Spectre</a> live-coded a demo from scratch where he set up a phone number for people in the audience to SMS. Then, his newly created app called everyone&rsquo;s phone back with a Ramones song. Pretty amusing when they were trying to start up Q&A and everybody in the room had their phones blowing up.

#### Behavior Driven Development

As an application becomes more complex, it becomes impossible to manually test everything, thus unit testing was born. Great for developers, but not understandable to non-technical people. Test-Driven Development was the next trend (write tests first, then code). Like unit tests, difficult to maintain. Behavior Driven Development (BDD) is the next step in the evolution of software testing.

BDD creates a common language between the business, development and QA groups, using features and scenarios. Think of your application as a finite state machine, then break it down into simple testable states. An example:

_Scenario:_ Refunded items should be returned to stock
  
_Given_ a customer previously bought a black sweater from me and I currently have three black sweaters left in stock
  
_When_ he returns the sweater for a refund
  
_Then_ I should have four black sweaters in stock

#### Optimizely

Only had a chance to get to the last 20 minutes or so of this one. Cofounder <a href="https://twitter.com/#!/dsiroker" target="_blank" rel="noopener noreferrer" class="broken_link" rel="nofollow">Dan Siroker</a> was doing a deeper dive into his A/B testing company which he had demoed previously at the API Showcase. It was pretty amazing during the Q&A when he and <a href="https://www.optimizely.com" target="_blank" rel="noopener noreferrer">his company</a> seemed to have a great answer to every use case that was presented to him.

#### Mobile Development Q&A

The last panel of my day. Interestingly, none of the panelist&rsquo;s companies were developing pure native Android or iOS apps, but rather doing HTML5, or native-HTML5 hybrids. Native clients responding to an API allows you to be much more agile, and not have to wait for app store approval and deployment. The usual Android fragmentation gripes were aired. Blackberry and Adobe Flash were mocked. There was cautious optimistism about Windows 8 and Metro. Various complicated problems elaborated upon. (sorry, my note-taking skills have degraded throughout the day!)