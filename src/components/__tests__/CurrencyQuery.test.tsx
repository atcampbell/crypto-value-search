import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CurrencyApp from '../CurrencyApp'

const defaultProps = {
  handleSearch: jest.fn(),
  previousSearches: [],
  currencyData: null,
  priceHistory: null,
  loading: false,
  error: '',
}

const currencyData: ICurrency = {
  currentValue: 1,
  imageUrl: 'img',
  marketCapRank: 2,
  name: 'Bitcoin',
  priceChangePercentage24h: 3,
}

const priceHistory: IPriceHistory = {
  history: [
    [123, 1.1],
    [456, 2.2],
  ],
}

describe('<CurrencyQuery />', () => {
  describe('when rendered without currency data', () => {
    it('should render title', () => {
      const { getByText } = render(<CurrencyApp {...defaultProps} />)
      expect(getByText('Cryptocurrency Search Tool')).toBeInTheDocument()
    })

    it('should render search fields', () => {
      const { getByText, getByRole } = render(<CurrencyApp {...defaultProps} />)
      expect(getByRole('button', { name: 'Search' })).toBeInTheDocument()
      expect(getByRole('button', { name: 'Search' })).toBeDisabled()
      expect(getByText('Cryptocurrency name')).toBeInTheDocument()
    })

    it('should render previous searches', () => {
      const { getByText } = render(
        <CurrencyApp {...defaultProps} previousSearches={['bitcoin', 'ethereum']} />,
      )
      expect(getByText('bitcoin')).toBeInTheDocument()
      expect(getByText('ethereum')).toBeInTheDocument()
    })
  })

  describe('when loading', () => {
    it('should render loading spinner', () => {
      const { getByRole } = render(<CurrencyApp {...defaultProps} loading />)
      expect(getByRole('progressbar')).toBeInTheDocument()
    })
  })

  describe('when error is present', () => {
    it('should render error message', () => {
      const { getByText } = render(<CurrencyApp {...defaultProps} error="error text" />)
      expect(getByText('error text')).toBeInTheDocument()
    })
  })

  describe('when data present', () => {
    it('should render currency data', () => {
      const { getByText } = render(
        <CurrencyApp {...defaultProps} currencyData={currencyData} priceHistory={priceHistory} />,
      )
      expect(getByText(currencyData.name)).toBeInTheDocument()
    })
    it('should render price history', () => {
      const { getByText } = render(
        <CurrencyApp {...defaultProps} currencyData={currencyData} priceHistory={priceHistory} />,
      )
      expect(getByText('7 day price history')).toBeInTheDocument()
    })
  })
})
