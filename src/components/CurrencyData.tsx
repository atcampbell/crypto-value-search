import React from 'react'
import Currency from '../types/Currency'

type CurrenctDataProps = { data: Currency }

export default function CurrencyData({ data }: CurrenctDataProps): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Current Value</th>
          <th>Market Cap Rank</th>
          <th>Percentage change in last 24h</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={data.imageUrl} alt={`${data.name} logo`}></img>
          </td>
          <td>{data.name}</td>
          <td>{`$${data.currentValue}`}</td>
          <td>{data.marketCapRank}</td>
          <td>{data.priceChangePercentage24h}</td>
        </tr>
      </tbody>
    </table>
  )
}
