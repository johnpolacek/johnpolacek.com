import React from 'react'
import { Link } from 'gatsby'
import { Header, Nav, UL, LI, H1, Span, P, A } from 'styled-system-html'

const activeStyle = {
  borderColor: 'base',
  borderBottom: 'solid 4px',
  transition: 'border .2s'
}

const NavItem = (props) => (
	<LI fontSize={[2,3]} display="inline-block" p={0} m={0}>
		{
			props.currPath === props.to ? (
				<Span display="inline-block" px={3} mx={3} py={3} color="base" fontWeight="bold" css={activeStyle}>{props.name}</Span>
			) : (
				<Link to={props.to}><Span display="inline-block" px={3} mx={3} py={3} css={{'&:hover':activeStyle}}>{props.name}</Span></Link>
			)
		}
	</LI>
)

export default (props) => (
	<Header textAlign="center" borderBottom="solid 8px" borderColor="gray2" pt={[4,0]} mb={4}>
      <H1 pb={3} mb={2}>
        <Link to={`/`}>
          <Span color="gray9" fontSize={[4,5,6]} display="block">John Polacek</Span>
          <Span color="gray6" fontSize={[2,3]} fontWeight="normal">Chicago Web Developer</Span>
        </Link>
      </H1>
      <P fontSize={0} textAlign="center" width={[320,380]} mx="auto">
        <strong>John Polacek</strong> is a web developer from Chicago who leads up front end at <a href="https://givesmart.com">GiveSmart</a>, 
        runs <a href="https://chicagotechevents.com">ChicagoTechEvents.com</a> {` `}
        and ships open source. {` `}
        <A fontWeight="700" href={`https://twitter.com/johnpolacek`}>Follow him on Twitter</A>
      </P>
      <Nav>
      	<UL style={{listStyle:'none'}} p={0} m={0}>
      		<NavItem to="/" name="blog" currPath={props.path} />
          <NavItem to="/code" currPath={props.path} name="code" />
          <NavItem to="/about" currPath={props.path} name="about" />
      	</UL>
      </Nav>
    </Header>
)
