import React from 'react'
import { Headline, Sub } from './styles'
import { Wrapper, Container } from '../Spacing/styles'
import Link from 'gatsby-link'

const Header = () => (
  <Wrapper>
    <Container>
      <Headline>
        <Link to="/">Media Company</Link>
      </Headline>

      <Sub>News Delivered Via Hyper Text Markup Language.</Sub>
    </Container>
  </Wrapper>
)

export default Header
