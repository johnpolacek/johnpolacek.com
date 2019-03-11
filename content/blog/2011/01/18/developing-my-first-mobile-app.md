---
title: Developing My First Mobile App
author: johnpolacek
type: post
date: 2011-01-18T17:51:43+00:00
url: /2011/01/18/developing-my-first-mobile-app/
categories:
  - adobe
  - development
  - flash
  - web

---

<img src="/img/blog/2011/01/touchthetrend.jpg" alt="" title="touchthetrend" width="480" height="86"  style="width:280px;height:auto;float:left;" /> In my spare time over the holidays, I worked on developing a game app for phones. The game is called Touch The Trend and it is now on sale in the iTunes Store and the [Android Marketplace][1]. It is a quiz game where you try to correctly identify the latest trending topics that are being talked about online (at least on Twitter anyway).

The first thing I did was work on the back end, and connecting to the API’s I needed to get the game to work. For the Twitter trends, I looked at a couple different API’s, but wound up going with <a href="http://letsbetrends.com" target="_blank" rel="noopener noreferrer">Let’s Be Trends</a>, the Twitter API from <a href="http://brizzly.com" target="_blank" rel="noopener noreferrer">Brizzly</a>. It was easy to use and seemed to provide the best result set, complete with descriptions of the trending topic.

For the fake trends, I decided to use random Wikipedia articles. Pulling random entries from the site wasn’t as easy as I thought it would be, but with some <a href="http://en.wikipedia.org/wiki/Curl_%28programming_language%29" target="_blank" rel="noopener noreferrer">curl</a> hackery, eventually I was able to get at them. Then, I had to set up a script to exclude entries that were obviously not trends.

Next, I had to populate a database with the questions. I had limited experience with PHP/MySQL—mainly through working on WordPress themes and other minor server side scripts here and there. So, this was a nice learning opportunity for me. I created some php scripts that connect to the Let’s Be Trends API and Wikipedia, check for new trends and then write trends and trend descriptions to my database. Once that was successful, I created a cron job on the server that called the script every hour.

Setting up the website was pretty straightforward HTML5/JS/CSS. Paul Irish’s <a href="http://html5boilerplate.com" target="_blank" rel="noopener noreferrer">HTML5 Boilerplate</a> has been a great resource for me. I set up the standard Facebook and Twitter sharing, nothing fancy there. Setting up the email subscription signup with PHP/MySQL was a new one for me, but was also pretty easy.

In developing my Touch The Trend app, I initially tried using <a href="http://www.appcelerator.com" target="_blank" rel="noopener noreferrer">Titanium Appcelerator</a> to do cross-device app development. I was able to quickly install and get coding, which was nice. However, trouble soon began I started using the emulators. First, the way my app appeared in Android was completely different than the way it looked in iOS. The button styling that looked nice in iOS went to garbage in Android. Plus, the app kept breaking at various points. Sometimes it would stop at startup, other times at various questions. When installing on the device itself, it seemed to work fine, except for when it would occasionally not get past the first screen for some reason. Maybe this all resulted from something I was doing wrong, but whatever the reason, it was a bad experience for me and thus I am done with using Appcelerator.

I considered using <a href="https://coronalabs.com/corona-sdk/" target="_blank" rel="noopener noreferrer">Ansca’s Corona SDK</a>, but $350/year was a bit steep for me to pay for my first foray into app development. As a Flash Developer, I was pleased when Apple decided to let apps developed in Flash be allowed in the iTunes Store, but at the same time want to be open to using other tools. In the end, Flash proved to be the best solution for me. Using the iPhone Packager and AIR for Android, I was able to develop once, and deploy to both platforms.

I had some concerns that using Flash to develop for the iPhone would be a frustrating process, but was pleasantly surprised at how easy it was to get my app up and running on my iPod Touch. The actual process of getting the app onto the iTunes Store is another story though. Definitely a murky process, where I had to try a few different tutorials before I got the full picture of how to do it.

Signing up and getting approved to be much quicker and easier for Android. The signup process had much fewer steps than for Apple, plus getting accepted was instantaneous. Google’s one-time $25 fee is also preferable to Apple’s yearly $99 cost.

One major downside to using Flash to build the app is that you can’t publish to a native .apk file for Android. Instead, what you get is an AIR for Android app, which means the user will have to install AIR on their device in order to run your app.

In the end, I think I prefer doing web development to app development, but that being said, I already have an idea for my next app and have started some preliminary work on it. I’ve also started a free trial of the <a href="https://coronalabs.com/corona-sdk/" target="_blank" rel="noopener noreferrer">Corona SDK</a> and am really liking it so far.

 [1]: market://search?q=pname:air.touchthetrend