import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Global'
import SEO from '../components/seo'
import { Div, H3, Img, P } from 'styled-system-html'


class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`chicago`, `web developer`, `javascript`, `frontend`]}
        />
        <Div pt={[0,3]} pb={[4,5]}>
          <Img width={[80,120]} mx="auto" display="block" borderRadius="50%" src="/img/profile-pic.jpg" mb={3} />
          <P fontSize={[1,2]} fontStyle="italic" color="gray9" width={[240,360]} mx="auto" px={1} textAlign="center" mb={[4,5]}>“I love brass tacks and the nitty gritty. Ideas are great. Executing is better. Building web stuff that solves problems is what I do.”</P>
          <H3>Lead Web Developer At…</H3>
          <P fontSize={[1,2]} py={[2,0]}><a href="https://www.givesmart.com/">GiveSmart</a> by <a href="https://www.communitybrands.com/">Community Brands</a>. We help nonprofits raise more money with our <a href="https://www.givesmart.com/product/">event fundraising platform</a>.</P>
          <H3>Code Featured In…</H3>
          <P fontSize={[1,2]} py={[2,0]}><a href="https://css-tricks.com/build-custom-cms-serverless-static-site-generator/">CSS Tricks</a> | <a href="http://johnpolacek.com/2012/01/18/a-great-month/">Hacker News</a> | <a href="http://johnpolacek.com/2013/01/15/awwward-winning-code/">Awwwards</a> | <a href="http://www.webmonkey.com/2012/08/tired-of-tiny-movies-go-large-with-bigvideo-js/">Webmonkey</a> | JavaScript Weekly | <a href="http://frontendfocus.co/issues/218">Frontend Focus</a> | <a href="http://tympanus.net/codrops/2012/09/19/fullscreen-video-slideshow-with-bigvideo-js/">Codrops</a> | <a href="https://www.wired.com/2012/10/easily-preview-responsive-designs-with-responsivator/">Wired</a> | <a href="http://mailchi.mp/webtoolsweekly/web-tools-233?e=4448138d94">Web Tools Weekly</a> | The JavaScript Show | <a href="http://www.unheap.com/?s=scrollorama+stacktable">Unheap</a> | <a href="http://thenextweb.com/dd/2012/01/16/create-killer-scrolling-websites-with-the-scrollorama-jquery-plugin/">The Next Web</a> | <a href="http://www.impressivewebs.com/parallax-scrolling-scripts-plugins/">Impressive Webs</a> | <a href="http://thinkvitamin.com/design/scrolling-made-fun/">Think Vitamin</a> | <a href="http://sfist.com/2012/05/30/worried_you_might_be_a_brogrammer_t.php">sfist</a> | jquer.in | <a href="http://www.theverge.com/2012/1/4/2680447/scrollorama-animate-webpage-text-jquery-plugin-john-polacek">The Verge</a> | <a href="http://www.youtube.com/watch?v=3HVDpI6554I">The Treehouse Show</a> | <a href="http://active.tutsplus.com/author/john-polacek/">Tuts+</a> | DailyJS | Web Resources Depot | <a href="http://codehum.com/stuff/superscrollorama/#.UEVhMaTybxY">Codehum</a> | <a href="http://www.instantshift.com/2012/09/03/creating-cool-scrolly-stuff-with-scrollorama/">instantShift</a> | Web Resources Depot | <a href="http://johnpolacek.com/2013/11/11/open-source-for-the-wins">Award-Winning Websites</a></P>
          <H3>Spoken at…</H3>
          <P fontSize={[1,2]} py={[2,0]}><a href="http://chicagocamps.org/events/2017/front-end-camp/">Front End Camp</a> | <a href="http://techweek2013chicago.sched.org/speaker/johnpolacek1">Techweek Chicago</a> | <a href="http://johnpolacek.com/2012/08/25/prototype-camp/">Prototype Camp</a> | <a href="http://www.meetup.com/chicago-html5/events/91239922/">CHIHTML5</a></P>
          <H3>Keep up with me on…</H3>
          <P fontSize={[1,2]} py={[2,0]}><a href="https://twitter.com/johnpolacek">Twitter</a> | <a href="https://medium.com/@johnpolacek">Medium</a> | <a href="http://www.linkedin.com/in/johnpolacek">LinkedIn</a> | <a href="http://johnpolacek.github.io">Github</a></P>
        </Div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
