import React from 'react'
import { Div } from 'styled-system-html'
import theme from '../../theme'

export default (props) => (
  <Div bg="lite" fontFamily={theme.font}>
    <Div width={[1,1,800]} mx="auto" p={[0,3,4]}>
      {props.children}
    </Div>
  </Div>
)
