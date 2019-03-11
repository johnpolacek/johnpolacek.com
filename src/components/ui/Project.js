import React from 'react'
import PropTypes from 'prop-types'
import { Div, H3, P, Img, A } from 'styled-system-html'

const Project = (props) => (
  <Div pt={3} pb={5}>
    <H3 py={3}>{props.name}</H3>
    <a href={props.url}>
      <Img width={[320,420]} src={'/img/code/'+props.img} alt={props.name+' Project Page'} />
    </a>
    <P pt={3} fontSize={[1,2]}>{props.desc}</P>
    <A fontSize={[1,2]} href={props.url}>{props.url.replace('https://','')}</A>
  </Div>
)

Project.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Project
