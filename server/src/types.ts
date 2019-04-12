export interface RefSymbol {
  id: string
  symbol: string
  marketPercent: number
  volume: number
  name: string
}

export interface Chart {
  tenor: string
  date: Date
}

export interface News {
  id: string
  datetime: string
  headline: string
  source: string
  url: string
  summary: string
  related: string
}

export interface Tick {
  date: Date
  minute: any
  // Add more if needed
}
