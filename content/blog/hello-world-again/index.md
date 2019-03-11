---
title: Hello World Again
date: "2019-03-08"
description: Wordpress blog redesign in Gatsby, React and Styled Components.
---

As on does, I have re-done my Wordpress blog with Gatsby. *Why?*

No more database. Better performance. Great developer/authoring experience. Authoring in MD.. MDX... yeah, that’s the good stuff.

Plus, the old version felt *stale*. It is hard to feel motivated to write for your own site when you aren’t happy with it.

Building stuff with [Styled System HTML](https://johnpolacek.github.io/styled-system-html/) is a lot of fun. It feels like living the dream. You write your html elements and style them as you go. You don’t have to come up with class names or worry about specificity. You just *go*. Dropping in responsive styles is like breathing. 

Of course, that’s all made possible by [Styled Components](https://www.styled-components.com/) and [Styled System](https://styled-system.com/), as without those there really isn’t all that much to Styled System HTML.

Another thing I did was kill Google Anatytics and Webfonts. Is it cool to know how many people are visiting my site and which pages are popular? Of course! What is the cost though? A slower-loading web page and one other third party script on my site. Plus people have valid privacy concerns so why contribute to the mass collection of user data if I don’t need to. I will see how it goes without it.

So as for how I did it? I had a blog from circa 2010. Not a ton of posts though, relatively speaking. I followed the [How to export WordPress posts to Gatsby](https://peterakkies.net/export-wordpress-to-gatsby-markdown/) article for grabbing the posts out of my old site. I began with the [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog) and replaced anything styling-related with my own CSS-in-JS components.

Pretty painless actually. I can see why everyone’s loving Gatsby these days!