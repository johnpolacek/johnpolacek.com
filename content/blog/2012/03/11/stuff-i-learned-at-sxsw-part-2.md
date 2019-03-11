---
title: Stuff I Learned At SXSW, Part 2
author: johnpolacek
type: post
date: 2012-03-11T20:20:35+00:00
url: /2012/03/11/stuff-i-learned-at-sxsw-part-2/
categories:
  - apps
  - development
  - javascript
  - web

---

I knew a lot of the stuff that was talked about in the Killer App Design session by <a href="https://twitter.com/#!/jonathonmorgan" target="_blank" rel="noopener noreferrer" class="broken_link" rel="nofollow">Jonathon Morgan</a>, but there was still plenty of valuable food for thought and ideas in there. Also, he was an engaging, comfortable speaker with a good sense of humor, which made for a nice way to start the day.

Some things I took away:

  * Instead of using a class name (which can change) to select, use a semantic data- attribute (for example `data-action="reveal"`).
  * Jonathon proposed ditching AJAX for WebSockets in your app whenever that is possible.
  * Use <a href="http://www.html5rocks.com/en/tutorials/workers/basics/" target="_blank" rel="noopener noreferrer">Web Workers</a> for JS multithreading to optimize your app.
  * I have a fine understanding of the module pattern, but need to get into pub/sub more.
  * <a href="https://github.com/jasmine/jasmine" target="_blank" rel="noopener noreferrer">Jasmine</a> and <a href="http://seleniumhq.org/" target="_blank" rel="noopener noreferrer">Selenium</a> are the tools of choice for testing large scale JS apps.

There were plenty of other things he touched on as well. Check out the slides at http://bit.ly/html5sxsw.