import React from 'react'

const regex = /^[a-zA-Z]*$/g

export default class CodeInput extends React.PureComponent {
  render() {
    return (
      <input
        type="text"
        maxLength={4}
        onChange={this.handleInput}
        onKeyUp={this.handleKeyUp}
        value={this.props.value}
      />
    )
  }
  handleInput = e => {
    const { value } = e.target
    if (value && !value.match(regex)) {
      return
    }
    this.props.onChange(value.toUpperCase())
  }

  handleKeyUp = e => {
    if (e.which === 13 && this.props.onEnter) {
      this.props.onEnter()
    }
  }
}
