---
title: Building a Game With a 6-Year-Old
author: johnpolacek
type: post
date: 2014-11-29T17:33:13+00:00
url: /2014/11/29/building-game-6-year-old/
dsq_thread_id:
  - 3274254468
categories:
  - development
  - games
  - html5
  - javascript

---

[<img src="/img/blog/2014/11/free-summer1-300x192.png" alt="Free Summer HTML5 Car Game" width="300" height="192" class="alignleft size-medium wp-image-1770" srcset="http://johnpolacek.com/wp-content/uploads/2014/11/free-summer1-300x192.png 300w, http://johnpolacek.com/wp-content/uploads/2014/11/free-summer1-467x300.png 467w, http://johnpolacek.com/wp-content/uploads/2014/11/free-summer1.png 480w" sizes="(max-width: 300px) 100vw, 300px" />][1]I just open sourced a game I’ve been working on with my 6-year-old son Jack over Thanksgiving weekend.

**[Click Here to Play][1]**

**Want to work with your kids to make your own custom version? All the files you need are [on Github][2].**

A few years ago, I made a game called [Match the Letter][3] to help Jack learn his ABCs (still available for FREE on Google Play &#8211; no annoying ads either).

A couple years later, he asked me to teach him to make a game. I told him he’d need to know how to code and to do that, he needed to learn to read.

Fast forward to 1st grade, and he reads pretty well. The day before Thanksgiving, I was working at home (because [my job is cool like that][4]) and Jack brought it up again.

I started asking him questions and taking notes from what he said. He likes the Blocky Roads game (available on [iOS][5] and [Android][6]) which seems to be his inspiration.

<img src="/img/blog/2014/11/go-back-300x231.png" alt="Buttons for the game" width="200" height="154" class="alignleft size-medium wp-image-1787" srcset="http://johnpolacek.com/wp-content/uploads/2014/11/go-back-300x231.png 300w, http://johnpolacek.com/wp-content/uploads/2014/11/go-back-389x300.png 389w, http://johnpolacek.com/wp-content/uploads/2014/11/go-back.png 480w" sizes="(max-width: 200px) 100vw, 200px" />We’ve made some progress and I want to share it out with my fellow devs who might want to do the same thing with their kids. [Play it here][1] and [check out the project on Github][2]. Shoot, all you have to do is replace the png graphics with your kid’s own drawings and you will be all set. If you don&#8217;t want to make a car game, check out the [Phaser Framework][7] for building browser games and you can probably [find an example][8] or [tutorial][9] for the game your kid wants to make.

The look on my son’s face when he could play the game he thought of, using his own hand drawn graphics, was UNBELIEVABLE! It is so much fun!

Jack is providing all the drawings and direction on the game design. I just do what he tells me, while trying to teach him what it takes to implement his vision along the way. We even have his 2-year-old brother in on the action, play-testing on his own tablet.

[<img src="/img/blog/2014/11/tutorial-300x215.png" alt="Tutorial - Create a car with Phaser" width="300" height="215" class="alignleft size-medium wp-image-1778" srcset="http://johnpolacek.com/wp-content/uploads/2014/11/tutorial-300x215.png 300w, http://johnpolacek.com/wp-content/uploads/2014/11/tutorial-418x300.png 418w, http://johnpolacek.com/wp-content/uploads/2014/11/tutorial.png 480w" sizes="(max-width: 300px) 100vw, 300px" />][10]Big thanks to [Photon Storm][11], the folks behind the [Phaser HTML5 Mobile and Desktop game framework][7] without whom this would not be possible. And super big thanks to [Markus T][12] who published [a fantastic tutorial][10] that gave me a huge jumpstart and is responsible for most of the code that is behind the game thus far.

I will keep working on it as long as he stays interested. No promises on how far we will get, but so far it is a blast!

## Development Log

<img src="/img/blog/2014/11/jack-drawing-300x225.png" alt="Game graphics by Jack" width="300" height="225" class="alignright size-medium wp-image-1780" srcset="http://johnpolacek.com/wp-content/uploads/2014/11/jack-drawing-300x225.png 300w, http://johnpolacek.com/wp-content/uploads/2014/11/jack-drawing-398x300.png 398w, http://johnpolacek.com/wp-content/uploads/2014/11/jack-drawing.png 480w" sizes="(max-width: 300px) 100vw, 300px" />_11-26-14_

My notes from Jack’s description of what he wanted his game to be (verbatim)

**Car**

<ul class="task-list">
  <li>
    You can decorate it
  </li>
  <li>
    Drive around farmyard
  </li>
  <li>
    Press a button to make it go
  </li>
  <li>
    Only go straight.
  </li>
  <li>
    The car is named Syndro
  </li>
</ul>

**Obstacles**

<ul class="task-list">
  <li>
    Hills
  </li>
  <li>
    Hot lava
  </li>
  <li>
    Ramps
  </li>
  <li>
    Parachutes if the car explodes
  </li>
  <li>
    Other cars that are damaged
  </li>
</ul>

**Buildings**

<ul class="task-list">
  <li>
    You can click on a building to park on it
  </li>
  <li>
    Find stuff thats moving then unlock them in your farmyard
  </li>
</ul>

**Scenery**

<ul class="task-list">
  <li>
    people walking by
  </li>
</ul>

When we finished the intro screen, Jack asked me “Are we finished??”

I told him we were done with the first step. He asked how many steps there were. I said about a thousand. He was unfazed by this and excited to start the next step. Here are the steps we have so far:

<ul class="task-list">
  <li>
    <strong>Step 1</strong> &#8211; Intro Screen (Jack picked the font)
  </li>
  <li>
    <strong>Step 2</strong> &#8211; Draw the car
  </li>
  <li>
    <strong>Step 3</strong> &#8211; Animate the car
  </li>
  <li>
    <strong>Step 4</strong> &#8211; Pick a Physics Engine &#8211; <a href="https://github.com/photonstorm/phaser">Phaser</a>
  </li>
  <li>
    <strong>Step 5</strong> &#8211; Create game page with hello world example
  </li>
  <li>
    <strong>Step 6</strong> &#8211; Find car game example to use (found this <a href="http://www.inkfood.com/create-a-car-with-phaser/">great tutorial!</a>
  </li>
</ul>

Worked on animating the car and separating it into pieces in Photoshop.

## 

_11-27-14_

<ul class="task-list">
  <li>
    <strong>Step 7</strong> &#8211; Bring Jack’s car drawing into the game
  </li>
  <li>
    <strong>Step 8</strong> &#8211; Jack draw preview and control buttons
  </li>
  <li>
    <strong>Step 9</strong> &#8211; Add preview button to intro screen
  </li>
</ul>

## 

_11-28-14_

<ul class="task-list">
  <li>
    <strong>Step 10</strong> &#8211; Add button controls for touch devices
  </li>
  <li>
    <strong>Step 11</strong> &#8211; Publish open source for testing and sharing
  </li>
  <li>
    <strong>Step 12</strong> &#8211; Jack and Grant (little bro) test on mobile devices
  </li>
  <li>
    <strong>Step 13</strong> &#8211; Jack draw more game elements
  </li>
  <li>
    <strong>Step 14</strong> &#8211; Draw home screen icon
  </li>
</ul>

_11-29-14_

<ul class="task-list">
  <li>
    <strong>Step 15</strong> &#8211; Open source <a href="https://github.com/johnpolacek/free-summer">on Github</a>
  </li>
</ul>

 [1]: http://johnpolacek.github.io/free-summer/
 [2]: https://github.com/johnpolacek/free-summer
 [3]: http://johnpolacek.com/matchtheletter/ "Match The Letter Game"
 [4]: http://www.auctionsbycellular.com/about/ "About AuctionsByCellular"
 [5]: https://itunes.apple.com/us/app/blocky-roads/id720725216?mt=8
 [6]: https://play.google.com/store/apps/details?id=com.crescentmoongames.blocky_roads&hl=en
 [7]: http://phaser.io
 [8]: http://examples.phaser.io/
 [9]: https://www.google.com/search?q=phaser+examples&oq=phaser+examples
 [10]: http://www.inkfood.com/create-a-car-with-phaser/
 [11]: http://www.photonstorm.com
 [12]: https://twitter.com/markusT_inkfood