import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryLabel,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryTheme,
} from 'victory'
import PriceHistoryData from '../types/PriceHistoryDate'

interface PriceHistoryProps {
  data: PriceHistoryData
}

export default function PriceHistory({ data }: PriceHistoryProps): JSX.Element {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      height={250}
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) =>
            `${new Date(datum[0]).toLocaleDateString('en-UK')}, $${datum[1].toFixed(2)}`
          }
          labelComponent={
            <VictoryTooltip
              constrainToVisibleArea
              flyoutStyle={{ strokeWidth: 1 }}
              style={{ fontSize: 10 }}
            />
          }
        />
      }
    >
      <VictoryLabel
        text="7 day price history"
        x={200}
        y={30}
        textAnchor="middle"
        style={{ font: 'inherit' }}
      />
      <VictoryAxis dependentAxis tickFormat={(tick) => `$${tick}`} />
      <VictoryAxis tickFormat={() => ''} />
      <VictoryLine data={data.history} x={0} y={1} style={{ data: { strokeWidth: 1 } }} />
    </VictoryChart>
  )
}
