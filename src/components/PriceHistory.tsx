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
import { Paper } from '@material-ui/core'

interface PriceHistoryProps {
  data: IPriceHistory
}

function PriceHistory({ data }: PriceHistoryProps): JSX.Element {
  return (
    <Paper>
      <VictoryChart
        theme={VictoryTheme.material}
        height={200}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `${new Date(datum[0]).toLocaleDateString('en-UK')}, $${datum[1].toFixed(6)}`
            }
            labelComponent={
              <VictoryTooltip
                constrainToVisibleArea
                flyoutStyle={{ strokeWidth: 1 }}
                style={{ fontSize: 6 }}
              />
            }
          />
        }
      >
        <VictoryLabel
          style={{ fontSize: 8 }}
          text="7 day price history"
          x={200}
          y={30}
          textAnchor="middle"
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `$${tick}`}
          style={{ tickLabels: { fontSize: 8 } }}
        />
        <VictoryAxis tickFormat={() => ''} />
        <VictoryLine data={data.history} x={0} y={1} style={{ data: { strokeWidth: 1 } }} />
      </VictoryChart>
    </Paper>
  )
}

export default PriceHistory
