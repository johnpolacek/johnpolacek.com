---
title: Responsive Experiments
author: johnpolacek
type: post
date: 2012-12-11T14:12:59+00:00
url: /2012/12/11/responsive-experiments/
categories:
  - development
  - responsive
  - web

---

It seems like everybody working on websites these days is experimenting with various responsive web design approaches. There’s the Filament Group’s Compressive Images. There’s Luke W’s [relentless exploration of mobile ui patterns][1], the pace of innovation. You have Brad Frost’s rapidly growing list of [This Is Responsive Web Design Resources][2]. The amount of work being done on [Responsive Images][3] alone is off the charts.

I’ve been experimenting as well. For instance, tables are another thorny problem when doing responsive. How do you translate those wide data tables into a narrow screen? [Zurb’s Responsive Tables][4] is one potential solution. On a project, a creative director I was working with had another idea, and I decided to give it a go.

[<img src="/img/blog/2012/12/stacktable.png" alt="" title="stacktable" width="360" height="66" class="alignleft size-full wp-image-942" srcset="http://johnpolacek.com/wp-content/uploads/2012/12/stacktable.png 360w, http://johnpolacek.com/wp-content/uploads/2012/12/stacktable-300x55.png 300w" sizes="(max-width: 360px) 100vw, 360px" />][5]

The result is [stacktable.js][5] &#8211; a jQuery plugin for transforming big wide tables into skinny tall tables. It works by creating a duplicate table, with all the key/values arranged vertically. Using a media query, you toggle which table gets displayed. Check out the [project page][5] for a demo, and the [code is on Github][6] (of course!). This is more of an experiment at this point, so I&#8217;d love to [get feedback][7].

Another experiment I have is an approach that I call [Responsive Viewports][8]. It isn&#8217;t something I’d recommend generally, but it can do in a pinch, when something is better than nothing. It works when you have a fixed width layout for screens above a certain breakpoint, and a fluid layout for screens below that breakpoint. Using the viewport meta tag, you can tell the browser to zoom to the appropriate size for your fixed width layout, and to scale to the device width for the fluid layout. You put some javascript in the document `<head>` to detect width and set whichever viewport is appropriate. Here’s the code:

<noscript>
  <pre><code class="language- ">&lt;script language="javascript"&gt;
    // set viewport to zoom to 1200px wide on viewports &gt; 640px wide
    var viewPortTag = document.createElement('meta');
    viewPortTag.id = 'viewport';
    viewPortTag.name = 'viewport';
    if (screen.width &gt; 640) {
        viewPortTag.content = 'width=1200';
    } else {
        viewPortTag.content = 'width=device-width';
    }
    document.getElementsByTagName('head')[0].appendChild(viewPortTag);
&lt;/script&gt;</code></pre>
</noscript>

The web is a challenging environment. The pace of change is relentless. Some might even say scary. I’d say it is exciting. The web demands innovation and that’s why I love my job.

 [1]: http://www.lukew.com/ff/
 [2]: http://bradfrost.github.com/this-is-responsive/resources.html
 [3]: http://css-tricks.com/which-responsive-images-solution-should-you-use/
 [4]: http://www.zurb.com/playground/responsive-tables
 [5]: http://johnpolacek.github.com/stacktable.js/
 [6]: https://github.com/johnpolacek/stacktable.js/
 [7]: https://twitter.com/johnpolacek
 [8]: https://gist.github.com/4089898