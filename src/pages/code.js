import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Global'
import Project from '../components/ui/Project'
import SEO from '../components/seo'
import { Div } from 'styled-system-html'

const projects = [
  {
    name:'Chicago Tech Events',
    url:'https://github.com/johnpolacek/chicagotechevents.com',
    img:'chicagotechevents.png',
    desc:'A Gatsby starter for creating a calendar list of events'
  },
  {
    name:'MDX Deck with Greensock',
    url:'https://mdx-deck-greensock-demo.netlify.com/',
    img:'mdx-deck-greensock.png',
    desc:'A Demo of MDX Deck with Greensock Animation'
  },
  {
    name:'Styled System HTML',
    url:'https://johnpolacek.github.io/styled-system-html/',
    img:'styled-system-html.png',
    desc:'HTML elements extended as components, ready for theming via styled system.'
  },
  {
    name:'CSS-in-JS or CSS-and-JS',
    url:'https://johnpolacek.github.io/css-in-js-or-css-and-js/',
    img:'css-in-js-or-css-and-js.png',
    desc:'A thing built with CSS and JS and a same thing built with CSS-in-JS.'
  },
  {
    name:'Styled Starter',
    url:'https://johnpolacek.github.io/styled-starter/',
    img:'styled-starter.png',
    desc:'Starter Kit for React Apps with Next.js and Styled System Components.'
  },
  {
    name:'TweenDeck',
    url:'https://johnpolacek.github.io/tweendeck/',
    img:'tweendeck.png',
    desc:'Next level animation for web presentations.'
  },
  {
    name:'Design System Playground',
    url:'https://johnpolacek.github.io/design-system-playground/',
    img:'design-system-playground.png',
    desc: 'Experiment with design systems by updating stateful theme data.'
  },
  {
    name:'Expressive CSS',
    url:'http://johnpolacek.github.io/expressive-css/',
    img:'expressivecss.png',
    desc: 'See and share how web pages look at different screen sizes'    
  },
  {
    name:'Simple Grid Generator',
    url:'http://johnpolacek.github.io/simple-grid/',
    img:'simplegrid.png',
    desc: 'A SASS grid generator for creating responsive grids with some nice features.'    
  },
  {
    name:'Responsivator!',
    url:'http://johnpolacek.github.io/Responsivator/',
    img:'responsivator.png',
    desc: 'See and share how web pages look at different screen sizes'    
  },
  {
    name:'BigVideo.js',
    url:'http://dfcb.github.com/BigVideo.js/',
    img:'bigvideo.jpg',
    desc: 'The jQuery Plugin for Big Background Video (and images)'    
  },
  {
    name:'Controldeck.js',
    url:'http://johnpolacek.github.io/controldeck.js/',
    img:'controldeck.jpg',
    desc: 'Control HTML5 Presentations with node.js'    
  },
  {
    name:'SuperScrollorama',
    url:'http://johnpolacek.github.io/superscrollorama',
    img:'superscrollorama.png',
    desc: 'The jQuery plugin for doing cool scrolly stuff.'    
  },
  {
    name:'stacktable.js',
    url:'http://johnpolacek.github.io/stacktable.js',
    img:'stacktable.png',
    desc: 'jQuery plugin for stacking tables on small screens.'    
  },
  {
    name:'Extra Strength Responsive Grids',
    url:'http://dfcb.github.com/extra-strength-responsive-grids/',
    img:'esrg.jpg',
    desc: 'A Fluid CSS Grid System for Responsive Web Design'    
  },
  {
    name:'Open Source For Fame and Fortune',
    url:'http://johnpolacek.github.io/open-source-for-fame-and-fortune/',
    img:'opensource.png',
    desc: 'Animated Slide Deck from my talk at Techweek Chicago'    
  },
  {
    name:'Channel of Awesome',
    url:'http://dfcb.github.io/channel-of-awesome/',
    img:'channelofawesome.jpg',
    desc: 'Web playlists of YouTube and Vimeo videos that play fullscreen in a loop'    
  },
  {
    name:'What The Heck Is Responsive Web Design?',
    url:'http://johnpolacek.github.io/scrolldeck.js/decks/responsive/',
    img:'whattheheckisresponsivewebdesign.jpg',
    desc: 'Introductory presentation to Responsive Web Design <br /><small>(uses my <a href="http://johnpolacek.github.io/scrolldeck.js/">Scrolldeck plugin</a>)</small>'    
  }
]

class CodePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Code"
          keywords={[`chicago`, `web developer`, `javascript`, `frontend`, `github`]}
        />
        <Div pb={5} textAlign="center">
          {
            projects.map((proj) => (
              <Project {...proj} />
            ))
          }
        </Div>
      </Layout>
    )
  }
}

export default CodePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
