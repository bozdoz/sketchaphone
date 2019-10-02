import React from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Layout from '../components/layout'
import CodeInput from '../components/CodeInput'
import Button from '../components/Button'

const SmallContainer = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
`

const SmallerContainer = styled.div`
  width: 50%;
  text-align: center;
  margin: 0 auto;
`

class JoinGame extends React.Component {
  render() {
    const { code, setCode } = this.props
    return (
      <Layout>
        <SmallContainer>
          <SmallerContainer>
            <div>Join a game:</div>
            <div>4-letter Game Room:</div>
            <CodeInput
              value={code}
              onChange={setCode}
              onEnter={this.handleClick}
            />
          </SmallerContainer>
          <Button disabled={code.length !== 4} onClick={this.handleClick}>
            Join Game
          </Button>
        </SmallContainer>
      </Layout>
    )
  }

  handleClick = () => {
    if (this.props.code.length === 4) {
      navigate(`/waiting-room`, {
        state: {
          code: this.props.code,
        },
      })
    }
  }
}

const mapStateToProps = state => ({
  code: state.code,
})

const actions = {
  setCode: code => ({
    type: 'SETGAMECODE',
    payload: code,
  }),
}

const mapDispatchToProps = dispatch => ({
  setCode: code => dispatch(actions.setCode(code)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinGame)
