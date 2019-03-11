---
title: Responsivator!
author: johnpolacek
type: post
date: 2012-12-09T15:22:44+00:00
url: /2012/12/09/responsivator-2/
categories:
  - development
  - javascript
  - responsive
  - web

---

Responsive Web Design is pretty darn cool, but it is hard sometimes for people to wrap their heads around it. Whether you are trying to share a cool responsive website or do a creative review, telling people to change their browser window size just doesn&rsquo;t cut it. With that in mind, a few weeks ago I created, [open sourced][1] and released [Responsivator!][2]

There are plenty of [viewport testing tools][3] out there (apparently even including one named [Responsinator][4]) but none that worked quite the way I wanted

First, I didn&rsquo;t want their to be ads. Even better, I wanted a way to show these websites with no clutter at all. With Responsivator!, you can do that. Just add the hide header option to the end of the url, like this: <a href="http://johnpolacek.github.com/Responsivator/?site=http://css-tricks.com&#038;header=hide" target="_blank" rel="noopener noreferrer">http://johnpolacek.github.com/Responsivator/?site=http://css-tricks.com&header=hide</a>

Also, it is possible to customize the sizes and frame labels that get displayed. For example, if you only want to show the phone sizes of a website, you can do this: <a href="http://johnpolacek.github.com/Responsivator/?site=http://css-tricks.com&#038;sizes=320x480:Phone%20(portrait),480x320:Phone%20(landscape)" target="_blank" rel="noopener noreferrer">http://johnpolacek.github.com/Responsivator/?site=http://css-tricks.com&sizes=320&#215;480:Phone%20(portrait),480&#215;320:Phone%20(landscape)</a>.

As one of the first projects released on my developer group’s Github account, I’m very please to see that based on the traffic stats, it is a huge success. After the initial burst of popularity due to getting to the front page of Hacker News and a <a href="http://www.webmonkey.com/2012/10/easily-preview-responsive-designs-with-responsivator/" target="_blank" rel="noopener noreferrer">nice article on Webmonkey</a>, it continues to get about 500-1,000 page views a day. You can expect to see a lot more cool projects come out from us in the upcoming year.

 [1]: https://johnpolacek.github.com/Responsivator
 [2]: http://johnpolacek.github.com/Responsivator/
 [3]: http://bradfrost.github.com/this-is-responsive/resources.html#viewport-testing
 [4]: http://www.responsinator.com/