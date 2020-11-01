import React from 'react'

type PreviousSearchesProps = { searches: string[] }

export default function PreviousSearches({ searches }: PreviousSearchesProps): JSX.Element {
  return !searches.length ? (
    <></>
  ) : (
    <ul>
      {searches.map((search, i) => (
        <li key={`search${i}`}>{search}</li>
      ))}
    </ul>
  )
}
