import React, { useState } from 'react'

type FormTestProps = { onSubmit: (searchTerm: string) => void }

export default function FormTest({ onSubmit }: FormTestProps): JSX.Element {
  const [coin, setCoin] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setCoin(e.currentTarget.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // console.log('do the search')
    onSubmit(coin)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Search by coin name</label>
      <input
        id="coinSearch"
        placeholder="Coin name..."
        type="text"
        value={coin}
        onChange={handleChange}
      />
      <button type="submit" disabled={!coin}>
        Search
      </button>
    </form>
  )
}
