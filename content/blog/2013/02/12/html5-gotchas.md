---
title: HTML5 Gotchas
author: johnpolacek
type: post
date: 2013-02-12T14:35:10+00:00
url: /2013/02/12/html5-gotchas/
categories:
  - development
  - html5
  - Uncategorized

---

I love new web technology. I love shiny new elements, api’s and css styles. I anxiously wait for them to reach enough browser support so that I can use them on client work.

Nevertheless, even when a web technology seems to have reached maturity, I frequently seem to run into gotchas. HTML5 video and audio are ripe with these. Even when I try to avoid them by using a great third party service like [Vimeo][1], you still run into issues with [certain old Android browsers][2].

Take [icon fonts][3] for example. I love icon fonts and [IcoMoon][4] is an amazing web app that lets you create your own. Everyone seems to be using them. They even work in old IE. So you’d think it would be safe to use them across the board. GOTCHA! 

Icon fonts require @font-face support of course, and there’s still a [few browsers that lack that feature][5]. I still want to use icon fonts though! They work great delivering crisp single color icons that have a small filesize footprint. So, I went ahead and quickly made a simple iconfont fallback polyfill using [Modernizr][6] to test for @font-face support. I asked a developer I work with to check it out on his phone which was still running Android 2.1. GOTCHA! Modernizr gave a false positive for his phone. 

So, instead of using Modernizr, I went with <a href= https://github.com/paulirish/font-face-detect">Paul Irish’s previous @font-face detection solution</a>, and that did the trick. I’ve posted this little project on Github. I guess could call it Make IconFonts Work On [Tim Svensen][7]’s Phone.js, but I just went with iconfont-fallback.

 [1]: https://vimeo.com/
 [2]: https://www.google.com/search?q=site%3Avimeo.com+android+embed
 [3]: http://css-tricks.com/examples/IconFont/
 [4]: http://icomoon.io/app/
 [5]: http://caniuse.com/#feat=fontface
 [6]: http://modernizr.com
 [7]: http://twitter.com/tsvensen