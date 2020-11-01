import React, { useState } from 'react'
import FormTest from '../../components/FormTest'
import PreviousSearches from '../../components/PreviousSearches'
import { fetchCurrencyData, fetchCurrencyHistory } from '../../utils/api'
import Currency from '../../types/Currency'
import CurrencyData from '../../components/CurrencyData'
import CurrencyHistory from '../../types/CurrencyHistory'
import PriceHistory from '../../components/PriceHistory'
// maybe change to pricehistory?

// TODO should these just be the types?
// maybe make a generic response type?
type CurrencyResponse = {
  loading: boolean
  data: Currency | null
  error: string
}

type CurrencyHistoryResponse = {
  loading: boolean
  data: CurrencyHistory | null
  error: string
}

// TODO seperate out errors into own object?
// seperate loadings into own object?
function Home(): JSX.Element {
  const [prevSearches, setPrevSearches] = useState<string[]>([])
  const [currencyData, setCurrencyData] = useState<CurrencyResponse>({
    loading: false,
    data: null,
    error: '',
  })
  const [currencyHistory, setCurrencyHistory] = useState<CurrencyHistoryResponse>({
    loading: false,
    data: null,
    error: '',
  })
  // const [searchTerm, setSearchTerm] = useState<string>('')

  const getCurrencyData = async (searchTerm: string) => {
    try {
      const data = await fetchCurrencyData(searchTerm)
      setCurrencyData({ loading: false, data, error: '' })
      setPrevSearches([data.name, ...prevSearches])
    } catch (e) {
      setCurrencyData({ loading: false, data: null, error: e.message })
    }
  }

  const getCurrencyHistory = async (searchTerm: string) => {
    try {
      const data = await fetchCurrencyHistory(searchTerm)
      setCurrencyHistory({ loading: false, data, error: '' })
    } catch (e) {
      setCurrencyHistory({ loading: false, data: null, error: e.message })
    }
  }

  const handleSearch = (name: string): void => {
    setCurrencyData({ loading: true, data: null, error: '' })
    getCurrencyData(name)
    setCurrencyHistory({ loading: true, data: null, error: '' })
    getCurrencyHistory(name)
  }

  return (
    <>
      <h1>Cryptocurrency Search Tool</h1>
      <FormTest onSubmit={handleSearch} />
      <PreviousSearches searches={prevSearches} />
      {currencyData.loading && <div>LOADING...</div>}
      {currencyData.data && <CurrencyData data={currencyData.data} />}
      {currencyData.error && <div>{currencyData.error}</div>}
      {currencyHistory.data && <PriceHistory data={currencyHistory.data} />}
    </>
  )
}

export default Home
