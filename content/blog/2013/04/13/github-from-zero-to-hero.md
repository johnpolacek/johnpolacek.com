---
title: 'Github: From Zero to Hero'
author: johnpolacek
type: post
date: 2013-04-13T13:31:41+00:00
url: /2013/04/13/github-from-zero-to-hero/
dsq_thread_id:
  - 1208032697
categories:
  - development
  - git
  - github
  - web

---

Are you looking to get some projects up on Github? There are a few different approaches you can take. Here is mine.

First, you need some projects. Front end projects work best for Github project pages. If you have ideas that involve server-side, you will need to host that aspect of your project somewhere else and you would never want to host any api keys or security-sensitive content on a public Github page (obviously).

For my projects, I like to have my project demo page and the master branch of the code be the same. So, start with your master branch and build it out. There are [lots][1] of [tutorials][2] on [Git][3] and [Github][4], so find one that works for you if you want help getting started.

When your demo is ready, the next step is to create a [Github Project Page][5]. This can be accomplished simply by creating a new `gh-pages` branch that is identical to your `master` branch.

`</p>
<pre>git checkout -b gh-pages
git push origin gh-pages</pre>
<p>`

As you make changes to the project, keep your gh-pages and master branches in sync. The easiest way to do this is with `git rebase`.

`</p>
<pre>git commit -m 'my master branch update'
git push origin master
git checkout gh-pages
git rebase master
git push origin gh-pages</pre>
<p>`

For more information on this pattern, read these posts by [Lea Verou][6] and [Oli Studholme][7]. One thing you could try is to make a project and use it as a git/github playground for experimentation.

So, you have your first project page. Now just rinse and repeat. Once you have a few project pages, you should make them a fancy landing page home for them. For example, I have [johnpolacek.github.io][8] for my projects. To create one of these, simply create a new repo that follows the naming scheme `yourgithubname.github.io` and build out a nice web page. When you are all set, commit and push to `master` and you are done.

If you’d like to have your project pages be on a custom non-github domain, Github has a [nice help page][9] devoted to that. (Github makes everything so easy &#8211; Thanks Github!)

One benefit to having your content on a github domain is superior search rankings. Because of its massive popularity, Github ranks high for authority. This means that if you keep your code projects on Github, and insert links to your other content (blog, twitter, etc.) you will get some nice Google juice out of it.

Not all of your projects will get attention, and that’s ok. Remember, everyone has to start somewhere. Just keep pushing code and improving your skills. Good things are bound to happen. Most importantly: Have fun!

 [1]: https://www.google.com/search?q=github+tutorial&aq=f&oq=github+tutorial
 [2]: http://sixrevisions.com/resources/git-tutorials-beginners/
 [3]: http://try.github.io/levels/1/challenges/1
 [4]: http://net.tutsplus.com/tutorials/other/getting-the-hang-of-github/
 [5]: http://pages.github.com/
 [6]: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/
 [7]: http://oli.jp/2011/github-pages-workflow/
 [8]: http://johnpolacek.github.io/
 [9]: https://help.github.com/articles/setting-up-a-custom-domain-with-pages