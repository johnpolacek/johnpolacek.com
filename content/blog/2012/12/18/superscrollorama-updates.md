---
title: SuperScrollorama Updates
author: johnpolacek
type: post
date: 2012-12-18T11:45:31+00:00
url: /2012/12/18/superscrollorama-updates/
categories:
  - development
  - javascript
  - jquery
  - web

---

There are some cool new updates to [SuperScrollorama][1], courtesy of Austrian art director and developer [Jan Paepke][2]. From his email to me:

I implemented these new features (the defaults always reflect how the
  
original version would react):

**new Option &#8220;triggerAtCenter&#8221; <small>(default true)</small> **
  
Usually the animations trigger when the respective Element&#8217;s origin is
  
in the center of the scroll area. Should this not be desired it can
  
be turned off using this option

**new Option &#8220;playoutAnimations&#8221; <small>(default true)</small> **
  
When scrolling quickly past start or end points by default `play()` or
  
`reverse()` is used to play out every stage of the animation until it
  
reaches the start or end. Setting this option to false forces a 1:1
  
link between scroll position and animation progress resulting in an
  
immediate update of the animation.

**new Function updatePin() **
  
Sometimes the pinned animation needs to be changed on the fly. For
  
example when you want the target Point of the animation being
  
dependent on window size or when you have a switch where one or
  
another animation should happen. So I added the `updatePin()` function.
  
You can change the animation or duration of the pin on the fly.
  
Technically there should be an `updateTween()`, too for regular
  
animations but I didn&#8217;t get around to write one since I didn&#8217;t need
  
it.

**new Function triggerCheckAnim()**
  
Sometimes it&#8217;s necessary to trigger the animation Check function not
  
only on scroll. For example if you have a layout with width or height
  
at 100% and resizing the window changes the positions of the elements
  
within. Another example may be when you insert new Elements into the
  
DOM or resize existing ones.

I resolved these issues:

  * when elements should be pinned that are within other elements
  
    that are positioned absolutely the translation to fixed positioning
  
    was not correct. (parent at left 100 + child left 100 should be child
  
    left 200 when pinned)
  * when elements that are pinned are not positioned using top and
  
    left but bottom and/or right the reset failed (since only top or left
  
    was saved)
  * when scrolling within an area where a pin takes place and then
  
    hitting refresh made the pin get lost (until checkAnim was triggered
  
    from as scroll) This also applies if the pin is supposed to start right
  
    from the beginning of the page.
  * TweenMax and TimelineMax support the repeat feature, which allows
  
    animation to be repeated multiple times. This wasn&#8217;t supported by
  
    superscrollorama. It is now (keeping compatibility with TimelineLite).

&#8230;So big super-thanks to [Jan][2] for making all that happen. [Let me know][3] if you run into any issues with the update. And, as always, thanks to [Greensock][4] for making an [awesome animation platform][5].

 [1]: http://johnpolacek.github.com/superscrollorama/
 [2]: http://twitter.com/janpaepke
 [3]: https://github.com/johnpolacek/superscrollorama/issues
 [4]: http://greensock.com
 [5]: http://www.greensock.com/gsap-js/