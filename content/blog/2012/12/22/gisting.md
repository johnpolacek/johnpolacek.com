---
title: Gisting
author: johnpolacek
type: post
date: 2012-12-22T20:40:49+00:00
url: /2012/12/22/gisting/
categories:
  - development
  - web

---

There are a lot of snippet organizers, but for me, the [Github Gist][1] is the best. I love making gists. Like this handy snippet for tracking outbound links in Google Analytics:

<noscript>
  <pre><code class="language-javascript javascript">var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
            
// Put this snippet below the google analytics tracking script
// then add this onclick to track on outbound links: 
// onclick="trackLink(this);"
function trackLink(link){try{var myTracker=_gat._getTrackerByName();_gaq.push(['myTracker._trackEvent','link',link.getAttribute('href')])}catch(err){}}</code></pre>
</noscript>

Or get random array item:

<noscript>
  <pre><code class="language-javascript javascript">var item = items[Math.floor(Math.random()*items.length)];</code></pre>
</noscript>

And [more][2]. Basically, any time I solve some little code problem (or more likely find the solution on [StackOverflow][3]) I just make a gist for next time.

<small><i>(By the way, if you want to add Gists to your WordPress blog like I am, the <a href="http://wordpress.org/extend/plugins/embed-github-gist/">Embed GitHub Gist plugin</a> is what I’m using)</i></small>

 [1]: https://gist.github.com/
 [2]: https://gist.github.com/johnpolacek
 [3]: http://stackoverflow.com/