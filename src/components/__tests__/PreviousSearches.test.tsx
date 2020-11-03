import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PreviousSearches from '../PreviousSearches'

describe('<PreviousSearches />', () => {
  describe('when no previous searches', () => {
    it('should not render list', () => {
      const { queryByRole } = render(<PreviousSearches previousSearches={[]} />)
      expect(queryByRole('list')).not.toBeInTheDocument()
    })
  })
  describe('when previous searches', () => {
    it('should display searches', () => {
      const { getByText } = render(<PreviousSearches previousSearches={['bitcoin', 'ethereum']} />)
      expect(getByText('bitcoin')).toBeInTheDocument()
      expect(getByText('ethereum')).toBeInTheDocument()
    })
  })
})
