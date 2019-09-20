import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/Button'

import { GAMEKEY } from './waiting-room'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Button
      to="/waiting-room"
      onClick={() => {
        localStorage.removeItem(GAMEKEY)
      }}
    >
      Start
      <br />
      <small>a new game</small>
    </Button>
    <Button to="/join-game">
      Join
      <br />
      <small>a game</small>
    </Button>
  </Layout>
)

export default IndexPage
