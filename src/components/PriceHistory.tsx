import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryLabel,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory'
import CurrencyHistory from '../types/CurrencyHistory'

type PriceHistoryProps = { data: CurrencyHistory }

export default function PriceHistory({ data }: PriceHistoryProps): JSX.Element {
  return (
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) =>
            `${new Date(datum[0]).toLocaleDateString('en-UK')}, $${datum[1].toFixed(2)}`
          }
        />
      }
    >
      <VictoryLabel text="7 day price history" x={225} y={30} textAnchor="middle" />
      <VictoryAxis dependentAxis tickFormat={(tick) => `$${tick}`} />
      <VictoryAxis tickFormat={() => ''} />
      <VictoryLine
        data={data.history}
        x={0}
        y={1}
        style={{ data: { stroke: 'red', strokeWidth: 1 } }}
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
  )
}
