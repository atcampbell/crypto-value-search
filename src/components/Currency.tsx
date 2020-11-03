import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'

interface CurrenctProps {
  data: ICurrency
}

function Currency({ data }: CurrenctProps): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell align="right">Current Value</TableCell>
            <TableCell align="right">Market Cap Rank</TableCell>
            <TableCell align="right">24h Percentage Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <img src={data.imageUrl} alt={`${data.name} logo`}></img>
            </TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell align="right">{`$${data.currentValue}`}</TableCell>
            <TableCell align="right">{data.marketCapRank}</TableCell>
            <TableCell
              align="right"
              style={{ color: data.priceChangePercentage24h > 0 ? green[500] : red[500] }}
            >
              {`${data.priceChangePercentage24h.toFixed(1)}%`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Currency
