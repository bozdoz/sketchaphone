import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const GAMEKEY = 'gameroom'

class WaitingRoom extends React.Component {
  state = {
    code: '',
  }
  componentDidMount() {
    const { location } = this.props

    if (location.state.code) {
      this.setState({
        code: location.state.code,
      })
    } else if (localStorage.getItem(GAMEKEY)) {
      this.setState({
        code: localStorage.getItem(GAMEKEY),
      })
    } else {
      this.getCode()
    }
  }
  render() {
    return (
      <Layout>
        <SEO />
        <div>Here's your Game Room:</div>
        <div>{this.state.code || 'Loading new code...'}</div>
      </Layout>
    )
  }
  getCode() {
    if (this.state.code) {
      return
    }
    const start = 65
    const end = 90
    let code = ''
    for (let i = 0; i < 4; i++) {
      code += String.fromCharCode(randBetween(start, end))
    }

    // save to local
    localStorage.setItem(GAMEKEY, code)

    this.setState({
      code,
    })
  }
}

const randBetween = (min, max) => Math.round(Math.random() * (max - min) + min)

export default WaitingRoom
