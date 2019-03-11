---
title: Help Prevent FOUC!
author: johnpolacek
type: post
date: 2012-10-03T14:56:14+00:00
url: /2012/10/03/help-prevent-fouc/
categories:
  - development
  - javascript
  - jquery
  - Uncategorized
  - web

---

Do your web pages suffer from <a href="http://en.wikipedia.org/wiki/Flash_of_unstyled_content" target="_blank" rel="noopener noreferrer">FOUC</a>? Now, you can prevent FOUC with 2 easy steps!

**Step #1** &#8211; Add this to the head of your document:

    <style type="text/css">
      .no-fouc {display: none;}
    </style>
    <script type="text/javascript">
      document.documentElement.className = 'no-fouc';
    </script>
    

**Step #2** &#8211; Add this to your document ready event: 

    $('.no-fouc').removeClass('no-fouc');

_Pro-Tip_ &#8211; If you want to get all fancypants, instead of adding the `.no-fouc` class to the top level of the document, you could add it to individual page elements so that only they are hidden (or have your own `.no-fouc` custom styling) during page load.

Please help spread the word about how to prevent FOUC and eradicate it from the internets. Also available in <a href="https://gist.github.com/3827270" target="_blank" rel="noopener noreferrer">gist form</a>.