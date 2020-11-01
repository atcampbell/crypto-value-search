import Currency from '../types/Currency'
import CurrencyHistory from '../types/CurrencyHistory'

export async function fetchCurrencyData(name: string): Promise<Currency> {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`)
  try {
    const body = await response.json()
    if (body.error) {
      throw new Error(body.error)
    }
    const currencyData = {
      name: body.name,
      imageUrl: body.image.small,
      marketCapRank: body.market_cap_rank,
      currentValue: body.market_data.current_price.usd,
      priceChangePercentage24h: body.market_data.price_change_percentage_24h,
    }
    return currencyData
  } catch (e) {
    throw new Error(e)
  }
}

export async function fetchCurrencyHistory(name: string): Promise<CurrencyHistory> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=7`,
  )
  try {
    const body = await response.json()
    if (body.error) {
      throw new Error(body.error)
    }
    const currencyHistory = {
      history: body.prices,
    }
    return currencyHistory
  } catch (e) {
    throw new Error(e)
  }
}
