---
title: Extra Strength Responsive Grids
author: johnpolacek
type: post
date: 2013-01-29T15:28:40+00:00
url: /2013/01/29/extra-strength-responsive-grids/
categories:
  - development
  - responsive
  - Uncategorized
  - web

---

[<img src="/img/blog/2013/01/box.png" alt="box" width="197" height="188" class="alignleft size-full wp-image-1091" />][1]Yesterday, I released [Extra Strength Responsive Grids][1], the latest open source project from the devs at Draftfcb Chicago. It was a collaborative effort between myself, [Tim Svensen][2] and [Andrew Pulley][3].

Some of you may be thinking, “Just what the world needs, another CSS grid framework.” People understandably are asking me what makes this approach different.

Well, it isn’t really all that different from [other grid frameworks][4] you may have come across. It shares similar functionality to responsive grid systems like [Zen Grids][5] and [Profound Grid][6] in that it makes heavy use of media queries to allow for great layout flexibility.

Where it differs is it adds its grid classes to the markup, rather than the css (or scss). I prefer this approach because I find it to be self-documenting and expressive. 

What I mean by &#8216;self-documenting&#8217; is that I can look at the markup and immediately understand the layout behavior, without having to search through css (or scss) files. I don&#8217;t have to try to remember which class has which mixin or inherits from what.

I find it to be more &#8216;expressive&#8217;, because I can add or change these classes around to quickly change layouts on the fly. I do a lot of prototyping, and I&#8217;ve found this system to work great for that. 

Now, that isn’t to say there aren&#8217;t drawbacks. You can wind up with a lot of divs. You will be using non-semantic classes. Other grid systems adhere more closely to OOCSS principles. For me though, I keep my grid/structure classes separate from the content classes. I let the grid do what it is supposed to do, and construct the scaffolding for the page. Then, I create the content ‘modules’ that have their own css to describe how they occupy their container (their grid). When I&#8217;m building out my widgets and so forth, I try to stick to OOCSS principles. 

To sum up, I think of content as &#8216;objects&#8217; and the page as scaffolding for those objects.

This is my current approach, but I don’t expect it to be right for everybody. In the future, I may change my mind and do things differently. As front end web developers, we must always be re-evaluating our craft.

 [1]: http://dfcb.github.com/extra-strength-responsive-grids/
 [2]: https://twitter.com/tsvensen
 [3]: https://github.com/apulley
 [4]: https://www.google.com/search?q=responsive+css+grid+framework
 [5]: http://zengrids.com/
 [6]: http://www.profoundgrid.com/