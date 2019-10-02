import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

const StyledButton = styled.div`
  background: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
  color: white;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  padding: 0.4em 0.8em;
  width: 50%;
  margin: 1em auto;
  display: block;
  border-radius: 3px;
  &,
  a {
    user-select: none !important;
  }

  ${({ disabled }) =>
    !disabled &&
    `
    cursor: pointer;

    &:hover {
      background: purple;
    }

    &:active {
      background: red;
    }`}
`

export default class Button extends React.Component {
  render() {
    const { onClick, to, ...props } = this.props
    return (
      <StyledButton
        {...props}
        onClick={this.handleClick}
        tabIndex="0"
        role={to ? 'link' : 'button'}
      />
    )
  }
  handleClick = () => {
    const { onClick, disabled, to } = this.props
    console.log('clicked')
    if (!disabled && onClick) {
      onClick()
    }

    if (to) {
      // mimic gatsby link
      navigate(to)
    }
  }
}
