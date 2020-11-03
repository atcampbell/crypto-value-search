import React from 'react'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Currency } from '../types/Currency'
import { PriceHistory } from '../types/PriceHistory'
import QueryForm from './QueryForm'
import PreviousSearches from './PreviousSearches'
import CurrencyTable from './CurrencyTable'
import PriceHistoryChart from './PriceHistoryChart'
import ErrorCard from './ErrorCard'

const useStyles = makeStyles((theme) => ({
  progressOuter: {
    textAlign: 'center',
    margin: theme.spacing(4),
    height: '40px',
  },
}))

interface CryptocurrencySearchToolProps {
  handleSearch: (query: string) => void
  previousSearches: string[]
  currency: Currency | null
  priceHistory: PriceHistory | null
  loading: boolean
  error: string
}

function CryptocurrencySearchTool({
  handleSearch,
  previousSearches,
  currency,
  priceHistory,
  loading,
  error,
}: CryptocurrencySearchToolProps): JSX.Element {
  const classes = useStyles()

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Cryptocurrency Search Tool
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <QueryForm onSubmit={handleSearch} />
      </Grid>
      <Grid item xs={6}>
        <PreviousSearches previousSearches={previousSearches} />
      </Grid>
      {loading && (
        <Grid item xs={12}>
          <div className={classes.progressOuter}>
            <CircularProgress />
          </div>
        </Grid>
      )}
      {error && (
        <Grid item xs={12}>
          <ErrorCard message={error} />
        </Grid>
      )}
      {currency && priceHistory && (
        <>
          <Grid item xs={12}>
            <CurrencyTable currency={currency} />
          </Grid>
          <Grid item xs={12}>
            <PriceHistoryChart priceHistory={priceHistory} />
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default CryptocurrencySearchTool
