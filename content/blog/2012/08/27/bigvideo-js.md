---
title: BigVideo.js
author: johnpolacek
type: post
date: 2012-08-27T13:11:48+00:00
url: /2012/08/27/bigvideo-js/
categories:
  - development
  - javascript
  - web

---

A few weeks ago, I started working on a website project at work. One of its features involved video that filled the page&rsquo;s background, to the edge of the window on all sides. There are lots of great examples of this effect out on the web. There are even some plugins, such as <a href="http://www.seanmccambridge.com/tubular/" target="_blank" rel="noopener noreferrer">Tubular</a>, but as far as I could tell, no plugin that worked exactly the way I needed. I needed more control over the functionality and to build a fluid player.

So, I thought, a perfect opportunity to build another cool plugin. I considered creating my own HTML5 video api, but after taking a look at <a href="http://videojs.com/" target="_blank" rel="noopener noreferrer">Video.js</> and <a href="https://github.com/zencoder/video-js/tree/master/src" target="_blank" rel="noopener noreferrer">all the code</a> that went into making that work, I decided, uh, no freaking way! Much better to stand on the shoulders of giants and use their API.</p> 

<p>
  Next, I spoke to <a href="https://plus.google.com/112782614570460425093/posts" target="_blank" rel="noopener noreferrer">my boss</a> about open sourcing it. We had just started a Github group account for the dev team in Chicago, so I put <a href="http://dfcb.github.com/BigVideo.js/" target="_blank" rel="noopener noreferrer">BigVideo.js</a> up there as our first public repo. Hopefully, it will be the first of many.
</p>

<p>
  Like I had done previously for <a href="http://johnpolacek.github.com/scrollorama/" target="_blank" rel="noopener noreferrer">Scrollorama</a>, I released it to Hacker News. I was hoping and even expecting it to hit the front page, but was thrilled to see it hit #1.
</p>

<p>
  There is still some work to be done getting the Flash fallback to work optimally, but all in all, I&rsquo;d say it works pretty darn good. It is really neat seeing it pop up <a href="http://www.webmonkey.com/2012/08/tired-of-tiny-movies-go-large-with-bigvideo-js/" target="_blank" rel="noopener noreferrer">here</a> and <a href="http://tympanus.net/codrops/collective/collective-26/" target="_blank" rel="noopener noreferrer">there</a> and there on the internet. I have some more stuff in the works for this and other little projects, so stay tuned..
</p>