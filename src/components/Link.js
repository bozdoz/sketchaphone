import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'

const Anchor = styled.a`
  cursor: pointer;
`

export default class Link extends React.Component {
  render() {
    const { onClick, to, ...props } = this.props
    return (
      <Anchor {...props} onClick={this.handleClick} role="link" tabIndex="0" />
    )
  }
  handleClick = () => {
    const { to, onClick } = this.props

    if (onClick) {
      onClick()
    }

    navigate(to)
  }
}
