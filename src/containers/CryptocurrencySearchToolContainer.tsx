import React, { useState, useEffect } from 'react'
import { fetchCurrency, fetchPriceHistory } from '../api/api'
import { Currency } from '../types/Currency'
import { PriceHistory } from '../types/PriceHistory'
import CryptocurrencySearchTool from '../components/CryptocurrencySearchTool'

interface State {
  previousSearches: string[]
  currency: Currency | null
  priceHistory: PriceHistory | null
  loading: boolean
  error: string
}

function CryptocurrencySearchToolContainer(): JSX.Element {
  const [state, setState] = useState<State>({
    previousSearches: [],
    currency: null,
    priceHistory: null,
    loading: false,
    error: '',
  })
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    const getCurrencyData = async (searchTerm: string) => {
      try {
        const currency = await fetchCurrency(searchTerm)
        const priceHistory = await fetchPriceHistory(searchTerm)

        setState((state) => ({
          ...state,
          currency,
          priceHistory,
          loading: false,
          previousSearches: [currency.name, ...state.previousSearches],
        }))
      } catch (e) {
        setState((state: State) => ({
          ...state,
          loading: false,
          error: e.message,
        }))
      }
    }

    if (query) {
      setState((state: State) => ({
        ...state,
        currency: null,
        priceHistory: null,
        loading: true,
        error: '',
      }))
      getCurrencyData(query)
    }
  }, [query])

  const handleSearch = (query: string): void => {
    setQuery(query)
  }

  return (
    <CryptocurrencySearchTool
      currency={state.currency}
      priceHistory={state.priceHistory}
      error={state.error}
      previousSearches={state.previousSearches}
      loading={state.loading}
      handleSearch={handleSearch}
    />
  )
}

export default CryptocurrencySearchToolContainer
