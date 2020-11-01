import React, { useState } from 'react'

type FormTestProps = { onSubmit: (searchTerm: string) => void }

export default function FormTest({ onSubmit }: FormTestProps): JSX.Element {
  const [currency, setCurrency] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setCurrency(e.currentTarget.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    onSubmit(currency)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Search by currency by name</label>
      <input
        id="coinSearch"
        placeholder="Currency..."
        type="text"
        value={currency}
        onChange={handleChange}
      />
      <button type="submit" disabled={!currency}>
        Search
      </button>
    </form>
  )
}
