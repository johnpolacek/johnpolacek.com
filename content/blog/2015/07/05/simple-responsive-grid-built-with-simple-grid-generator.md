---
title: Simple Responsive Grid
author: johnpolacek
type: post
date: 2015-07-05T14:07:53+00:00
url: /2015/07/05/simple-responsive-grid-built-with-simple-grid-generator/
dsq_thread_id:
  - 3906613505
categories:
  - css
  - development
  - web

---

[<img src="/img/blog/2015/07/simple-grid-300x188.png" alt="Simple Grid Demo Page on Github" width="300" height="188" class="alignleft size-medium wp-image-1920" srcset="http://johnpolacek.com/wp-content/uploads/2015/07/simple-grid-300x188.png 300w, http://johnpolacek.com/wp-content/uploads/2015/07/simple-grid.png 480w" sizes="(max-width: 300px) 100vw, 300px" />][1][Simple Grid][1] is the responsive grid system I am using on all of my websites these days. [View it on Github][1].

3 years ago I published [Extra Strength Responsive Grids][2], a grid similar to the one in [Bootstrap][3] (although we did release ESRG first). My use of the grid has evolved to the point where I wanted to open source this newer, better version.

[Simple Grid][1] is similar in function [Bootstrap’s grid][4]. The main difference is the inclusion of [padding helper classes][5]. Rather than filling up stylesheets with lots of padding declarations, I use these combined with grid classes to handle almost all the spatial arrangements of web pages. 

The padding classes also eliminate the need to have `.row` as a class. With simple grid, you use a `.grid-12` with an appropriate padding class applied to it instead of `.row`.

When I built the ESRG project, the [demo page][6] was themed in a humorous way to feel like a sales site for a pain reliever drug. For the [Simple Grid demo page][1], I ditched the silliness and kept it simple and utilitarian. It is probably the smallest stylesheet for a project page that I’ve ever made, just the grid and some CSS to expose the underlying grid scaffolding. No webfonts, colors, images, or styling flourishes, just the business.

Additionally, I have a separate project for the [Simple Grid Generator][7], a SASS mixin that I used to output the Simple Grid CSS. It comes with some different options to customize your own grids, and can also be useful to anyone who wants to see how to make their own SASS grid generator.

 [1]: http://johnpolacek.github.io/simple-grid/
 [2]: https://github.com/dfcb/extra-strength-responsive-grids
 [3]: http://getbootstrap.com/
 [4]: http://getbootstrap.com/css/#grid
 [5]: https://github.com/johnpolacek/simple-grid/#padding--margin-classes
 [6]: http://dfcb.github.io/extra-strength-responsive-grids/
 [7]: https://github.com/johnpolacek/simple-grid-generator