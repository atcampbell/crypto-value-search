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
import { Currency } from '../types/Currency'

interface CurrenctTableProps {
  currency: Currency
}

function CurrencyTable({ currency }: CurrenctTableProps): JSX.Element {
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
              <img src={currency.imageUrl} alt={`${currency.name} logo`}></img>
            </TableCell>
            <TableCell>{currency.name}</TableCell>
            <TableCell align="right">{`$${currency.currentValue}`}</TableCell>
            <TableCell align="right">{currency.marketCapRank}</TableCell>
            <TableCell
              align="right"
              style={{ color: currency.priceChangePercentage24h > 0 ? green[500] : red[500] }}
            >
              {`${currency.priceChangePercentage24h.toFixed(1)}%`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CurrencyTable
