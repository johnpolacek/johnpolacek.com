---
title: The Atomic/Functional CSS Movement
author: johnpolacek
type: post
date: 2016-06-17T12:57:32+00:00
url: /2016/06/17/atomic-css-movement/
categories:
  - css
  - development
  - web

---

When I published [Expressive CSS][1] a few months ago, I knew it would be controversial, and it was (as evidenced in the comments on my [Content & Display Patterns with Expressive CSS][2] post). In the time since, there have been many articles and projects published by others that also advocate lightweight, scalable CSS using utility classes that are easy to write and understand. 

From what I can tell, [Thierry Koblentz][3] was the first to really challenge CSS conventional wisdom with what in 2013 he dubbed the [atomic][4] approach. Whether you call it atomic, functional, expressive or something else, people are realizing that for too long we have been stuck in this dogmatic pursuit of semantics which has held us back from crafting CSS in a way that is actually maintainable and scalable.

There are still people who strongly reject this approach (for example, the so-called [Maintainable CSS][5] project). A few years ago, I would have been one of those people. Read [CSS and Scalability][6] and [Rationalizing Functional CSS][7] to understand why companies with large CSS architectures are switching to the Atomic/Functional/Expressive approach.

Here are some recent real world implementations:

[<img src="/img/blog/2016/06/Screen-Shot-2016-06-17-at-8.08.07-AM-300x168.png" alt="Marvel Style Guide Screenshot" width="300" height="168" class="size-medium wp-image-2064" srcset="http://johnpolacek.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-17-at-8.08.07-AM-300x168.png 300w, http://johnpolacek.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-17-at-8.08.07-AM-768x429.png 768w, http://johnpolacek.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-17-at-8.08.07-AM-1024x572.png 1024w, http://johnpolacek.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-17-at-8.08.07-AM-500x279.png 500w" sizes="(max-width: 300px) 100vw, 300px" style="display:block;float:none;width:97%;height:auto;max-width:480px;" />][8]
[Marvel Style Guide][8]

[<img src="/img/blog/2016/06/Screen-Shot-2016-06-17-at-8.08.21-AM-300x158.png" alt="Solid by Buzzfeed Screenshot" width="300" height="158" class="size-medium wp-image-2065" srcset="http://johnpolacek.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-17-at-8.08.21-AM-300x158.png 300w, http://johnpolacek.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-17-at-8.08.21-AM-768x405.png 768w, http://johnpolacek.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-17-at-8.08.21-AM-1024x539.png 1024w, http://johnpolacek.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-17-at-8.08.21-AM-500x263.png 500w" sizes="(max-width: 300px) 100vw, 300px" style="display:block;float:none;width:97%;height:auto;max-width:480px;" />][9]  
[Solid by Buzzfeed][9]

When companies publish their frameworks, people often ask why not use an existing framework. Just take bootstrap and fork it. Better yet, use [BassCSS][10] or [Tachyons][11].

Well, when you write CSS this way, creating a custom CSS architecture designed exactly for your project’s needs is not that hard and is actually fun. And if you do it right, changing things down the road is no big deal if you are using a CSS preprocessor and HTML templates. That is the benefit of the atomic approach!

 [1]: johnpolacek.github.io/expressive-css/
 [2]: http://johnpolacek.com/content-display-patterns/
 [3]: http://cssmojo.com
 [4]: https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/
 [5]: http://maintainablecss.com/
 [6]: http://mrmrs.io/writing/2016/03/24/scalable-css/
 [7]: https://marcelosomers.com/writing/rationalizing-functional-css/
 [8]: https://marvelapp.com/styleguide/
 [9]: http://solid.buzzfeed.com/
 [10]: http://www.basscss.com/
 [11]: http://tachyons.io/