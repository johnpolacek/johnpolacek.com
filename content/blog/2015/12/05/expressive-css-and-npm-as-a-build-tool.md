---
title: Expressive CSS and Using NPM as a Build Tool
author: johnpolacek
type: post
date: 2015-12-05T22:24:32+00:00
url: /2015/12/05/expressive-css-and-npm-as-a-build-tool/
dsq_thread_id:
  - 4378911933
categories:
  - css
  - development

---

[<img src="/img/blog/2015/12/expressive-css-300x233.png" alt="Expressive CSS Project Page" width="300" height="233" class="alignleft size-medium wp-image-1977" srcset="http://johnpolacek.com/wp-content/uploads/2015/12/expressive-css-300x233.png 300w, http://johnpolacek.com/wp-content/uploads/2015/12/expressive-css-386x300.png 386w, http://johnpolacek.com/wp-content/uploads/2015/12/expressive-css.png 640w" sizes="(max-width: 300px) 100vw, 300px" />][1]Seems like every front end web dev eventually publishes a manifesto about their approach to CSS. So here is mine: [Expressive CSS][1]

(Shout out to Cole Peters for his [Building and Shipping Functional CSS article][2] which offers a similar take and inspired me to finish and publish my project)

One thing I tried that was different for my workflow on projects was to use [NPM][3] as my build tool. It always bugged me to have Bower and NPM in my projects when they do very similar things. NPM seems to be the more popular one and it can also somewhat replace Gulp/Grunt as a build tool.

My front end build tool needs for Expressive CSS were pretty basic. I needed to first process the .scss files into unminified CSS files for people who do not want to use SASS to be able to grab (and ignore the SASS files altogether). After that, I would need it to create the minified, source mapped CSS. Also, I added a watch command to enable automatic builds on file saves.

Thanks to [node-sass CLI][4], I was able to configure npm to do exactly what I needed. Here are the relevant lines from package.json:

    
    "scripts": {
        "build": "node-sass css/sass/base.scss css/stylesheets/base.css --style expanded && node-sass css/sass/utilities.scss css/stylesheets/utilities.css --style compact && node-sass css/sass/components.scss css/stylesheets/components.css --style expanded && node-sass css/sass/style.scss css/style.min.css --style compressed",
        "watch": "onchange 'css/sass/**/*' -- npm run build"
    },
    
    

So, instead of grunt or gulp, we do `npm run build` and `npm run watch`.

Pretty simple, eh? For more info on using NPM as a build tool, check out these articles:

  * <a href="http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/" class="broken_link" rel="nofollow">How to Use NPM as a Build Tool</li> 
    
    <li>
      <a href="http://www.sitepoint.com/guide-to-npm-as-a-build-tool/">Give Grunt the Boot! A Guide to Using npm as a Build Tool</li> 
      
      <li>
        <a href="https://medium.com/@dabit3/introduction-to-using-npm-as-a-build-tool-b41076f488b0#.fplbuu4db">Introduction to Using NPM as a Build Tool</a>
      </li></ul> 
      
      <p>
        <strong>UPDATE:</strong> The talented folks at <a href="https://www.webucator.com/">Webucator</a> have created a video demonstration of this post:
      </p>
      
      <div class="flex-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MRDQ8J3Vawc" frameborder="0" allowfullscreen></iframe>
      </div>
      
      <p>
        Check out <a href="https://www.youtube.com/channel/UC0QGsFRt4BcudtOQ8ueVorA">their YouTube Channel</a> for lots of great training videos.
      </p>

 [1]: http://johnpolacek.github.io/expressive-css/
 [2]: https://medium.com/@cole_peters/building-and-shipping-functional-css-4f29b947bcb9
 [3]: http://npmjs.com
 [4]: https://github.com/sass/node-sass#command-line-interface