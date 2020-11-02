import React from 'react'
import CurrencySearch from './CurrencySearch'
import PreviousSearches from './PreviousSearches'
import Currency from '../types/Currency'
import CurrencyData from './CurrencyData'
import PriceHistoryData from '../types/PriceHistoryDate'
import PriceHistory from './PriceHistory'
import { Container, Typography, Grid, CircularProgress } from '@material-ui/core'
import Error from './Error'

interface AppPropTypes {
  handleSearch: (query: string) => void
  prevSearches: string[]
  currencyData: Currency | null
  priceHistory: PriceHistoryData | null
  loading: boolean
  error: string
}

export default function App({
  handleSearch,
  prevSearches,
  currencyData,
  priceHistory,
  loading,
  error,
}: AppPropTypes): JSX.Element {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Cryptocurrency Search Tool
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <CurrencySearch onSubmit={handleSearch} />
        </Grid>
        <Grid item xs={6}>
          <PreviousSearches previousSearches={prevSearches} />
        </Grid>
        {loading && (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
        {error && (
          <Grid item xs={12}>
            <Error message={error} />
          </Grid>
        )}
        {currencyData && priceHistory && (
          <>
            <Grid item xs={12}>
              <CurrencyData data={currencyData} />
            </Grid>
            <Grid item xs={12}>
              <PriceHistory data={priceHistory} />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  )
}
