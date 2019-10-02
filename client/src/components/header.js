import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const BrandBG = styled.div`
  background: green;
`

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <BrandBG>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </BrandBG>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
