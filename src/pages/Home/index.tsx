import React from 'react'
import { Container } from '@material-ui/core'
import CryptocurrencySearchToolContainer from '../../containers/CryptocurrencySearchToolContainer'

function Home(): JSX.Element {
  return (
    <Container>
      <CryptocurrencySearchToolContainer />
    </Container>
  )
}

export default Home
