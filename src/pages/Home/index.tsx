import React, { useState } from 'react'
import FormTest from '../../components/FormTest'

function Home(): JSX.Element {
  const [previousSearches, setPreviousSearches] = useState([])

  const handleSearch = (name: string): void => console.log(name)

  return (
    <>
      <div>Hello from Cozero!</div>
      <FormTest onSubmit={handleSearch} />
    </>
  )
}

export default Home
