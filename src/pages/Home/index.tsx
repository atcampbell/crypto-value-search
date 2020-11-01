import React, { useState } from 'react'
import FormTest from '../../components/FormTest'
import PreviousSearches from '../../components/PreviousSearches'

function Home(): JSX.Element {
  const [prevSearches, setPrevSearches] = useState<string[]>([])

  const handleSearch = (name: string): void => {
    console.log(name)
    // TODO only add when search copmlete
    setPrevSearches([name, ...prevSearches])
  }

  return (
    <>
      <div>Hello from Cozero!</div>
      <FormTest onSubmit={handleSearch} />
      <PreviousSearches searches={prevSearches} />
    </>
  )
}

export default Home
