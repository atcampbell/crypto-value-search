export async function fetchCurrencyData(name: string): Promise<ICurrency> {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`)
  try {
    const body = await response.json()
    const currencyData = {
      name: body.name,
      imageUrl: body.image.small,
      marketCapRank: body.market_cap_rank,
      currentValue: body.market_data.current_price.usd,
      priceChangePercentage24h: body.market_data.price_change_percentage_24h,
    }
    return currencyData
  } catch (e) {
    throw new Error(`${response.status} - Error finding currency ${name}`)
  }
}

export async function fetchPriceHistory(name: string): Promise<IPriceHistory> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=7`,
  )
  try {
    const body = await response.json()
    const currencyHistory = {
      history: body.prices,
    }
    return currencyHistory
  } catch (e) {
    throw new Error(`${response.status} - Error finding prices for currency ${name}`)
  }
}
