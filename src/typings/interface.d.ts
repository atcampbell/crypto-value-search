interface ICurrency {
  name: string
  imageUrl: string
  marketCapRank: number
  currentValue: number
  priceChangePercentage24h: number
}

interface IPriceHistory {
  history: number[][]
}
