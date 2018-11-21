import styled from 'styled-components'
import { Wrapper, Container } from '../Spacing/styles'

export const PostWrapper = styled(Wrapper)`
  list-style: none;

  h3 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1em;
  }

  p {
    margin-top: 0;
    line-height: 1.4em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const EachWrapper = styled(Container)`
  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 600px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ProjectTxt = styled.div`
  max-width: 30em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 600px) {
    padding-left: 30px;
  }
`

export const ProjectImg = styled.img`
  max-width: 125px;

  @media (min-width: 768px) {
    max-width: 200px;
  }
`
