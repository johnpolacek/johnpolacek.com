---
title: Stuff I Learned At SXSW, Part 3
author: johnpolacek
type: post
date: 2012-03-13T18:15:04+00:00
url: /2012/03/13/stuff-i-learned-at-sxsw-part-3/
categories:
  - development
  - web

---

Here are some random notes from the various sessions and discussions I&rsquo;ve had during my time in Austin:

  * Whenever you are looking at a device, you are a cyborg. (via <a href="https://twitter.com/#!/caseorganic" target="_blank" rel="noopener noreferrer" class="broken_link" rel="nofollow">Amber Case</a>)
  * <a href="http://www.kurzweilai.net/" target="_blank" rel="noopener noreferrer">Ray Kurzweil</a> has a lot of really fascinating things to say. Such as..
  * Bloodstream technology will be mainstream in 20 years. If you can make it that long, your lifespan will be significantly lengthened.
  * The new iPad retina display is 2048&#215;1536. So when building websites, it is important to be as resolution independent as possible. Time to start using SVG whenever possible.
  * When designing responsive sites, be task oriented. Think about what the user is most likely to be doing on the page.
  * This is the year WebGL is coming to all mobile devices (via <a href="http://schedule.sxsw.com/2012/events/event_IAP10450" target="_blank" rel="noopener noreferrer">What WebGL Will Mean for the Web</a>)
  * Do media queries for high resolution screens like this: 
    <pre>only screen and (-webkit-min-device-pixel-ratio : 2),
    only screen and (min-device-pixel-ratio : 2) { }</pre>

  * Studies show a rectangle with rounded corners brings your focus inside the box, and with hard corners, your focus is outside (via <a href="http://paultrani.com/" target="_blank" rel="noopener noreferrer">Paul Trani</a>).
  * You know you&rsquo;re doing CSS right when
  
    your content changes you don&rsquo;t need to touch the stylesheets (via <a href="http://lea.verou.me/" target="_blank" rel="noopener noreferrer">Lea Verou</a>).
  * Watching the Adobe guys do demos using Dreamweaver, it was interesting to see that it has been improved quite a lot. For example, it has an instance of webkit running inside.
  * Facebook&rsquo;s likely biggest competitor is not Google+, but rather a <a href="http://www.w3.org/community/fedsocweb/" target="_blank" rel="noopener noreferrer">Federated Social Network</a> (i.e. a network of networks)
  * The <a href="http://code.google.com/p/webfinger/" target="_blank" rel="noopener noreferrer">Webfinger Protocol</a> is coming back (via Evan Prodromou)