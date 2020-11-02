import React, { useState, useEffect } from 'react'
import { fetchCurrencyData, fetchPriceHistory } from '../utils/api'
import Currency from '../types/Currency'
import PriceHistoryData from '../types/PriceHistoryDate'
import App from '../components/App'

interface State {
  prevSearches: string[]
  currencyData: Currency | null
  priceHistory: PriceHistoryData | null
  loading: boolean
  error: string
}

export default function (): JSX.Element {
  const [state, setState] = useState<State>({
    prevSearches: [],
    currencyData: null,
    priceHistory: null,
    loading: false,
    error: '',
  })
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    const getCurrencyData = async (searchTerm: string) => {
      try {
        const currencyDataResponse = await fetchCurrencyData(searchTerm)
        const priceHistoryResponse = await fetchPriceHistory(searchTerm)
        setState((state) => ({
          ...state,
          currencyData: currencyDataResponse,
          priceHistory: priceHistoryResponse,
          loading: false,
          prevSearches: [currencyDataResponse.name, ...state.prevSearches],
        }))
      } catch (e) {
        setState((state: State) => ({
          ...state,
          currencyData: null,
          loading: false,
          error: e.message,
        }))
      }
    }

    if (query) {
      setState((state: State) => ({
        ...state,
        currencyData: null,
        priceHistory: null,
        loading: true,
      }))
      getCurrencyData(query)
    }
  }, [query])

  const handleSearch = (query: string): void => {
    setQuery(query)
  }

  return (
    <App
      currencyData={state.currencyData}
      priceHistory={state.priceHistory}
      error={state.error}
      prevSearches={state.prevSearches}
      loading={state.loading}
      handleSearch={handleSearch}
    />
  )
}
