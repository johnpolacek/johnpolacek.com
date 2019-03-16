---
title: Making a Gatsby Events List Starter
date: "2019-03-16"
---

I recently migrated my blog from WordPress to Gatsby. Next up, I’m going to do the same for [chicagotechevents.com](https://chicagotechevents.com)

As a first step, I made a very basic events list Gatsby Starter (forked from the [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog). See it in action at [gatsby-starter-events-list.netlify.com/](gatsby-starter-events-list.netlify.com) and check out the code [on Github](https://github.com/johnpolacek/gatsby-starter-events-list).

Once again, super easy to build out with my [Styled System HTML](https://johnpolacek.github.io/styled-system-html/) components and [Styled System](https://styled-system.com/) + [Styled Compnents](https://www.styled-components.com/).

Next up, I'm going to figure out how to set it up to accept event submissions. Looks like I should be able to set up a [Netlify Function](https://www.netlify.com/docs/functions/) that generates a pull request with a new markdown file that will trigger a Gatsby build when merged.

Thanks to [David Wells](https://davidwells.io/) for answering my questions about this and sharing [his example](https://github.com/DavidWells/functions-site/tree/master/functions/add-example) with me for how to do this.