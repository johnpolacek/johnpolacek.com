---
title: Prototype Camp
author: johnpolacek
type: post
date: 2012-08-25T20:17:46+00:00
url: /2012/08/25/prototype-camp/
dsq_thread_id:
  - 1220858161
categories:
  - development
  - javascript
  - web

---

Today I gave a talk at Prototype Camp Chicago entitled &ldquo;<a href="http://johnpolacek.github.com/The-Never-Ending-Quest-To-Build-Cool-Stuff/" target="_blank" rel="noopener noreferrer">The Never Ending Quest To Build Cool Stuff</a>&rsquo;. My session started right after <a href="https://twitter.com/jmspool" target="_blank" rel="noopener noreferrer">Jared Spool</a> finished his opening keynote (no pressure!). If you were there, great! Hope you enjoyed it. All of my content, including slides, links and bonus material, can be found <a href="http://johnpolacek.github.com/The-Never-Ending-Quest-To-Build-Cool-Stuff/" target="_blank" rel="noopener noreferrer">here</a>.

After my talk, I was able to attend some other sessions before I had to leave. Here are my notes:

#### Dan LeBoeuf
  
Testing Tools of On-Device Mobile Prototypes

A variety of approaches to conduct and capture On-Device Mobile test sessions. <a href="https://twitter.com/danleboeuf" target="_blank" rel="noopener noreferrer">Dan</a> took us on a tour mobile prototype testing tools and walked through options and decisions made while building Manifest&rsquo;s custom configured research facility. Some of the more interesting tools he looked at were:

  * Proton Presentations &#8211; Ever wanted to easily run HTML5 based presentations and prototype applications from your local iPad or iPhone? Proton makes it possible, with a simple application that is part flash drive, part presentation application, and part iOS application development utility.
  * <a href="http://www.reflectionapp.com/" target="_blank" rel="noopener noreferrer">Reflection</a> &#8211; AirPlay mirror your iPhone 4S, iPad 2 or the new iPad to any Mac or PC, wirelessly (and then you can record the output)
  * Screencast Video Recorder &#8211; Android app for recording video with audio from your Android device. It can also take snapshots.
  * <a href="http://www.cydiaapps.org/" target="_blank" rel="noopener noreferrer">Cydia</a> (jailbroken iOS devices, shows fingertaps)
  * EvoCam &#8211; $30 &#8211; An app for outputing webcam streams.
  * <a href="http://www.axis.com" target="_blank" rel="noopener noreferrer">IP Cameras</a> &#8211; An Internet protocol camera, or IP camera, is a type of digital video camera commonly employed for surveillance, and which unlike analog closed circuit television (CCTV) cameras can send and receive data via a computer network and the Internet.
  * <a href="http://www.mrtappy.com" target="_blank" rel="noopener noreferrer">Mr. Tappy</a> &#8211; An attachment for filming mobile phones.

#### Param Rengaiah
  
How to Build CMS–Free Websites

<a href="http://about.me/param.rengaiah" target="_blank" rel="noopener noreferrer">Param</a> started off by referencing Divya Manian&rsquo;s talk on <a href="https://vimeo.com/44297900" target="_blank" rel="noopener noreferrer">Designing in the Browser</a> and then featured some quotes about design and development.

> _&ldquo;Design doesn&#8217;t work when its separate from development.&rdquo;
  
> &#8211; Andy Clark_

> _&ldquo;Real web designers write code. Always have. Always will.
  
> &#8211; Jeffrey Zeldman_

Every website is HTML+CSS+JS, no matter what the back end is. Let&rsquo;s build systems that only use this. His proposed solution was to use Static Website Generators, the easiest and yet most flexible and powerful option for a developer/designer, and is great for prototyping.

Param&rsquo;s favorite combination: <a href="http://jekyllrb.com/" target="_blank" rel="noopener noreferrer">Jekyll</a> (Website Generator) + <a href="http://github.com" target="_blank" rel="noopener noreferrer">Github</a> (Hosting) + <a href="http://prose.io/" target="_blank" rel="noopener noreferrer">Prose.IO</a> (Content Authoring)

Other options: <a href="http://octopress.org/" target="_blank" rel="noopener noreferrer">Octopress</a> (for blogging) and Jekyll-Bootstrap (great for getting started faster, not for customization)

Param&rsquo;s best example of a site that uses this technique was <a href="http://developmentseed.org/" target="_blank" rel="noopener noreferrer">Development Seed</a>, which switched from <a href="http://developmentseed.org/blog/2011/09/09/jekyll-github-pages/" target="_blank" rel="noopener noreferrer">Drupal to Jekyll</a>.

Param has created <a href="https://github.com/prengaiah/sunrise" target="_blank" rel="noopener noreferrer">Sunrise</a>, an open source blank template for Jekyll.

#### Christopher Webb
  
Supercharge Your Toolchain: Haml, Sass, Coffee, Git, & Heroku

<a href="https://twitter.com/conspirator" target="_blank" rel="noopener noreferrer">Christopher</a> started the talk saying that he wished he could go back in time and teach his past self some of the tools he knows about now. #1 on his list: that you don&rsquo;t need to know Ruby to use these cool tools.

<a href="http://haml.info/" target="_blank" rel="noopener noreferrer">HAML</a> &#8211; The purpose of HAML is to make markup beautiful. Compiles to HTML. HTML is ugly, takes too much time to maintain. HAML is cleaner and easier to read/maintain.

<a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a> &#8211; Stands for Syntactically Awesome Stylesheets. SASS compiles to CSS and gives you all kinds of functionality like variables, mixins, inheritance and functions. Results in smaller, more maintainable CSS that is great for larger sites. He also touched on SCSS, which is another CSS pre-processor, but you can use it on legacy codebases to introduce this added functionality to your stylesheets.

<a href="http://coffeescript.org/" target="_blank" rel="noopener noreferrer">CoffeeScript</a> &#8211; Another preprocessor, this one for JavaScript. It is basic an alternate syntax that some developers prefer, and also prevents some of the bad practices that can sneak their way into JavaScript code.

Chris then rapidly talked about various other tools like <a href="http://gruntjs.com" target="_blank" rel="noopener noreferrer">GruntJS</a>, <a href="http://incident57.com/codekit/" target="_blank" rel="noopener noreferrer">Codekit</a>, <a href="http://yeoman.io" target="_blank" rel="noopener noreferrer">Yeoman</a>, <a href="http://git-scm.com" target="_blank" rel="noopener noreferrer">Git</a> and <a href="http://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a>.

#### Dennis Kardys
  
Replacing Photoshop Comps with HTML Prototypes in the Real World

<a href="https://twitter.com/dkardys" target="_blank" rel="noopener noreferrer">Dennis</a> sees big opportunities in the real world, where there are so many examples of broken web things. Web design is harder than ever, and he thinks that is a good thing. Our current methods of wireframing and annotating require too much imagination to understand what is going on.

He presented Samantha Warren&rsquo;s <a href="http://styletil.es" target="_blank" rel="noopener noreferrer">Style Tiles</a> as an example of a better approach. Jeremy Keith&rsquo;s <a href="http://patternprimer.adactio.com/" target="_blank" rel="noopener noreferrer">Pattern Primer</a> is a method for presenting design as a system. Designing in the browser has caught on quite a bit lately, but is an obstacle for those who don&rsquo;t code and can result in limiting design by constricting the imagination to just &lsquo;put stuff in boxes&rsquo;.

Dennis talked about what an ideal tool for the new web design process would look like. Then he presented a solution that he and <a href="http://www.wsol.com" target="_blank" rel="noopener noreferrer">his company</a> is working on that theyv&rsquo;e hilariously dubbed Code Name: Mammal Paw. It incorporates the Style Tiles and Pattern Primer approaches, but also brings UI into the mix.

He talked about the process of collaborating with clients in this prototype-based approach. First, they find UI patterns and start designing a modular system. For example, a media block, that gets extended for different layout circumstances, abstracting the styles. Structurally, the prototypes share a design guide html file, baseline/pattern css files and then different styles that can be presented as design options.

Some pitfalls with the approach. How much to show? How to keep the code organized? It is a new approach, so there are probably unknown issues that will pop up.