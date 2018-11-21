import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 768px) {
    padding: 40px 10px;
  }
`

export const Container = styled.div`
  max-width: 38em;
  margin: 0 20px;

  @media (min-width: 768px) {
    margin: 0 40px;
  }
`
