import { Currency } from '../types/Currency'
import { PriceHistory } from '../types/PriceHistory'

export async function fetchCurrency(name: string): Promise<Currency> {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`)
  try {
    const body = await response.json()
    const currency = {
      name: body.name,
      imageUrl: body.image.small,
      marketCapRank: body.market_cap_rank,
      currentValue: body.market_data.current_price.usd,
      priceChangePercentage24h: body.market_data.price_change_percentage_24h,
    }
    return currency
  } catch (e) {
    throw new Error(`${response.status} - Error finding currency ${name}`)
  }
}

export async function fetchPriceHistory(name: string): Promise<PriceHistory> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=7`,
  )
  try {
    const body = await response.json()
    const priceHistory = {
      history: body.prices,
    }
    return priceHistory
  } catch (e) {
    throw new Error(`${response.status} - Error finding prices for currency ${name}`)
  }
}
