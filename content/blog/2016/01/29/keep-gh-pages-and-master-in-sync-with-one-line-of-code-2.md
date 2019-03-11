---
title: Keep gh-pages and master in sync with one line of code
author: johnpolacek
type: post
date: 2016-01-29T13:01:10+00:00
url: /2016/01/29/keep-gh-pages-and-master-in-sync-with-one-line-of-code-2/
dsq_thread_id:
  - 4533629875
categories:
  - development
  - git

---

If you publish projects to Github, then you probably are using a [gh-pages branch][1] to create a nice home for your project with a demo and some documentation (e.g. like [this][2]). Read all about Github Pages at [pages.github.com][3]

A common pattern is to keep the gh-pages and master branches in sync with each other — whatever code is in master is the same as your project page (gh-pages). You can read about different ways to do this on Oli Studholme’s excellent article [GitHub Pages Workflow and deleting git’s master branch][4].

I myself favor Lea Verou’s simple approach detailed [here][5]. Something along the lines of this:

    git add -A .
    git commit -m 'Your commit message'
    git push origin gh-pages
    git checkout master
    git rebase gh-pages
    git push origin master
    git checkout gh-pages
    

How about we do that in one line? The secret to this will be setting up a Git Alias in our .gitconfig file. I have written about Git Aliases before (see [here][6]). If you aren’t already using them to speed up your workflow, then I encourage you to start now. [Read about Git Aliases at Git How To][7]

Open up your .gitconfig file (located in your $HOME directory). We will be adding two aliases. The first will be an alias to commit all changes to the current branch (aacm = **a**dd **a**ll . -git **c**ommit &#8211;**m**). Next will be an alias to push the commit to master and then to gh-pages (pomg = **p**ush **o**rigin **m**aster and **g**h-pages)</strong>).

    [alias]
    aacm = !git add -A . && git commit -m
    pomg = !git push origin gh-pages && git checkout master && git pull origin master && git rebase gh-pages && git push origin master && git checkout gh-pages
    

Now, when you are on the master branch and you want to sync it to master, simply run:

    git pomg

Or, you can combine a commit with the push and sync by running:

    git aacm 'Your commit message' && git pomg

Hope that helps your workflows! For more tips on Git Aliases, check out these resources:

  * [Streamline your git workflow with aliases][8]
  * [Must Have Git Aliases: Advanced Examples][9]
  * [.gitconfig by Mathias Bynens][10]
  * [My .gitconfig][11]

 [1]: https://help.github.com/articles/creating-project-pages-manually/
 [2]: http://johnpolacek.github.io/expressive-css/
 [3]: https://pages.github.com/
 [4]: http://oli.jp/2011/github-pages-workflow/
 [5]: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/
 [6]: http://johnpolacek.com/2014/10/19/share-git-aliases-day/
 [7]: http://githowto.com/aliases
 [8]: https://robots.thoughtbot.com/streamline-your-git-workflow-with-aliases
 [9]: http://durdn.com/blog/2012/11/22/must-have-git-aliases-advanced-examples/
 [10]: https://github.com/mathiasbynens/dotfiles/blob/master/.gitconfig
 [11]: https://gist.github.com/johnpolacek/69604a1f6861129ef088