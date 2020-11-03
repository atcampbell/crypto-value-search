import React, { useState, useEffect } from 'react'
import { fetchCurrencyData, fetchPriceHistory } from '../api/api'
import CryptocurrencySearchTool from '../components/CryptocurrencySearchTool'

interface State {
  previousSearches: string[]
  currencyData: ICurrency | null
  priceHistory: IPriceHistory | null
  loading: boolean
  error: string
}

function CryptocurrencySearchToolContainer(): JSX.Element {
  const [state, setState] = useState<State>({
    previousSearches: [],
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
          previousSearches: [currencyDataResponse.name, ...state.previousSearches],
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
        currencyData: null,
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
      currencyData={state.currencyData}
      priceHistory={state.priceHistory}
      error={state.error}
      previousSearches={state.previousSearches}
      loading={state.loading}
      handleSearch={handleSearch}
    />
  )
}

export default CryptocurrencySearchToolContainer
