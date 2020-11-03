import React from 'react'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import QueryForm from './QueryForm'
import PreviousSearches from './PreviousSearches'
import Currency from './Currency'
import PriceHistory from './PriceHistory'
import ErrorCard from './ErrorCard'

interface CurrencyAppProps {
  handleSearch: (query: string) => void
  previousSearches: string[]
  currencyData: ICurrency | null
  priceHistory: IPriceHistory | null
  loading: boolean
  error: string
}

function CryptocurrencySearchTool({
  handleSearch,
  previousSearches,
  currencyData,
  priceHistory,
  loading,
  error,
}: CurrencyAppProps): JSX.Element {
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
          <CircularProgress />
        </Grid>
      )}
      {error && (
        <Grid item xs={12}>
          <ErrorCard message={error} />
        </Grid>
      )}
      {currencyData && priceHistory && (
        <>
          <Grid item xs={12}>
            <Currency data={currencyData} />
          </Grid>
          <Grid item xs={12}>
            <PriceHistory data={priceHistory} />
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default CryptocurrencySearchTool
