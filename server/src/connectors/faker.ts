import * as IEXCloud from 'iexcloud_api_wrapper'
import {
  AccountMetaData,
  AdvancedStats,
  Auction,
  BalanceSheet,
  Book,
  CashFlowStatement,
  CeoCompensation,
  CollectionType,
  Company,
  CryptoQuote,
  DEEPBook,
  DEEPOfficialPrice,
  DEEPTrade,
  DelayedQuote,
  Dividends,
  Earnings,
  EarningsToday,
  EffectiveSpread,
  EndOfDay,
  EndOfDayCloseOnly,
  Estimates,
  Financials,
  IEXSymbol,
  IncomeStatement,
  Intraday,
  IntradayIEXOnly,
  KeyStats,
  ListType,
  Logo,
  MarketSymbol,
  MarketVolume,
  NewsItem,
  OHLC,
  PreviousDay,
  PriceTarget,
  Quote,
  SectorPerformance,
  SentimentType,
  SocialSentiment,
  Splits,
  TOPS,
  TOPSLast,
  VolumeByVenue,
} from 'iexcloud_api_wrapper'

const isMarketDataRequest = (path: string) => path.match(/stock\/market/)
const isStockDataRequest = (path: string) => path.match(/stock\/(\w+)/)
const fetchCompanyData = (store: { [s: string]: any }, symbol: string) => store[symbol] || Object.values(store)[0]
const decimalConversion = (val: number) => Math.round(val * 100) / 100

const modify = (ctx: any, quote: any) => {
  const result = { ...quote }
  const { symbol } = result
  const prev = ctx[symbol]

  if (prev) {
    const dir = Math.round(Math.random()) ? -1 : 1
    const delta = Math.random() * dir

    const latestPrice = prev.latestPrice + delta
    const change = latestPrice - prev.previousClose
    const percent = change / prev.previousClose

    result.latestPrice = decimalConversion(latestPrice)
    result.change = decimalConversion(change)
    result.changePercent = percent
  }

  ctx[symbol] = result

  return result
}

type IFaker = typeof IEXCloud
declare type timePeriod = 'next' | '1m' | '3m' | '6m' | 'ytd' | '1y' | '2y' | '5y'
declare type UsageType = 'messages' | 'rules' | 'rule-records' | 'alerts' | 'alert-records'

interface IHistoryConfig {
  changeFromClose?: boolean | undefined
  closeOnly?: boolean | undefined
  chartByDay?: boolean | undefined
  date?: string | undefined
  iexOnly?: boolean | undefined
  interval?: number | undefined
  lastN?: number | undefined
  period?: string | undefined
  reset?: boolean | undefined
  simplify?: boolean | undefined
}

/**
 *  Important to note that in the real IEXCloud API wrapper some responses get
 *  mapped to add fields or convert data. This is not done in the faker.
 *  If you are going to save .json data make sure the results came from the
 *  iexcloud_api_wrapper, not from the REST response.
 */

import companyData from '../mock-data/companyData.json'
import marketData from '../mock-data/marketListData.json'
import stockData from '../mock-data/stockData.json'

class Faker implements IFaker {
  public Auction = Auction
  public AdvancedStats = AdvancedStats
  public BalanceSheet = BalanceSheet
  public Book = Book
  public CashFlowStatement = CashFlowStatement
  public CeoCompensation = CeoCompensation
  public Company = Company
  public CryptoQuote = CryptoQuote
  public DEEPBook = DEEPBook
  public DEEPOfficialPrice = DEEPOfficialPrice
  public DEEPTrade = DEEPTrade
  public DelayedQuote = DelayedQuote
  public Dividends = Dividends
  public Earnings = Earnings
  public EarningsToday = EarningsToday
  public EffectiveSpread = EffectiveSpread
  public EndOfDay = EndOfDay
  public EndOfDayCloseOnly = EndOfDayCloseOnly
  public Estimates = Estimates
  public Financials = Financials
  public Intraday = Intraday
  public Quote = Quote
  public IEXSymbol = IEXSymbol
  public IntradayIEXOnly = IntradayIEXOnly
  public IncomeStatement = IncomeStatement
  public KeyStats = KeyStats
  public Logo = Logo
  public MarketSymbol = MarketSymbol
  public MarketVolume = MarketVolume
  public NewsItem = NewsItem
  public OHLC = OHLC
  public PreviousDay = PreviousDay
  public PriceTarget = PriceTarget
  public SectorPerformance = SectorPerformance
  public SocialSentiment = SocialSentiment
  public Splits = Splits
  public TOPS = TOPS
  public TOPSLast = TOPSLast
  public VolumeByVenue = VolumeByVenue
  public AccountMetaData = AccountMetaData

  private dataStore = {
    chart: stockData,
    company: companyData,
    marketData,
    news: companyData,
    peers: companyData,
    quote: stockData,
    stats: stockData,
  }

  private context = {}

  public advancedStats: (symbol: string) => Promise<AdvancedStats> = () => {
    throw new Error(`not yet implemented`)
  }

  public auction: (symbol: string) => Promise<Auction> = () => {
    throw new Error(`not yet implemented`)
  }

  public balanceSheet: (symbol: string, period?: string, lastN?: number) => Promise<BalanceSheet[]> = (
    symbol,
    period = 'quarter',
    lastN = 1,
  ) => {
    return this.iexApiRequest(`/stock/${symbol}/balance-sheet/${lastN}?period=${period}`)
  }
  // return this.iexApiRequest()
  public book: (symbol: string) => Promise<Book> = symbol => {
    return this.iexApiRequest(`/stock/${symbol}/book`)
  }

  public cashFlowStatement: (symbol: string, period?: string, lastN?: number) => Promise<CashFlowStatement[]> = (
    symbol,
    period = 'quarter',
    lastN = 1,
  ) => {
    return this.iexApiRequest(`/stock/${symbol}/cash-flow/${lastN}?period=${period}`)
  }

  public ceoCompensation: (symbol: string) => Promise<CeoCompensation> = symbol => {
    return this.iexApiRequest(`/stock/${symbol}/ceo-compensation`)
  }

  public collection: (collectionType: CollectionType, collectionName: string) => Promise<Quote[]> = (
    collectionType,
    collectionName,
  ) => {
    return this.iexApiRequest(`/stock/market/collection/${collectionType}?collectionName=${collectionName}`)
  }

  public company: (symbol: string) => Promise<Company> = symbol => {
    return this.iexApiRequest(`/stock/${symbol}/company`)
  }

  public cryptoQuote: (symbol: string) => Promise<CryptoQuote> = () => {
    throw new Error(`not yet implemented`)
  }

  public deepBook: (symbol: string) => Promise<any> = () => {
    throw new Error(`not yet implemented`)
  }

  public deepTrades: (symbol: string) => Promise<DEEPTrade[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public officialPrice: (symbol: string) => Promise<DEEPOfficialPrice> = () => {
    throw new Error(`not yet implemented`)
  }

  public delayedQuote: (symbol: string) => Promise<DelayedQuote> = () => {
    throw new Error(`not yet implemented`)
  }

  public dividends: (symbol: string, range?: timePeriod) => Promise<Dividends[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public earnings: (symbol: string, lastn?: number) => Promise<Earnings[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public effectiveSpread: (symbol: string) => Promise<EffectiveSpread[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public endOfDay: (
    symbol: string,
    period?: timePeriod,
    chartLastN?: number,
    chartInterval?: number,
    changeFromClose?: boolean,
    chartReset?: boolean,
    chartSimplify?: boolean,
  ) => Promise<EndOfDay[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public endOfDayCloseOnly: (
    symbol: string,
    period?: '1m' | '3m' | '6m' | 'ytd' | '1y' | '2y' | '5y',
    chartLastN?: number,
    chartInterval?: number,
    changeFromClose?: boolean,
    chartReset?: boolean,
    chartSimplify?: boolean,
  ) => Promise<EndOfDayCloseOnly[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public earningsToday: (symbol: string) => Promise<EarningsToday[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public estimates: (symbol: string, lastN?: number) => Promise<Estimates[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public financials: (symbol: string, lastn?: number) => Promise<Financials[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public history: (symbol: string, config?: IHistoryConfig) => Promise<Array<EndOfDay | Intraday>> = symbol => {
    // ignore config, only 1d for
    return this.iexApiRequest(`/stock/${symbol}/chart/1d`)
  }

  public iexSymbols: () => Promise<IEXSymbol[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public incomeStatement: (symbol: string, period?: string, lastN?: number) => Promise<IncomeStatement[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public intraday: (
    symbol: string,
    chartLastN?: number,
    chartInterval?: number,
    changeFromClose?: boolean,
    chartReset?: boolean,
    chartSimplify?: boolean,
  ) => Promise<Intraday[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public intradayForDate: (
    symbol: string,
    date: string,
    chartLastN?: number,
    chartInterval?: number,
    changeFromClose?: boolean,
    chartReset?: boolean,
    chartSimplify?: boolean,
  ) => Promise<IntradayIEXOnly[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public intradayIEXOnly: (
    symbol: string,
    chartLastN?: number,
    chartInterval?: number,
    changeFromClose?: boolean,
    chartReset?: boolean,
    chartSimplify?: boolean,
  ) => Promise<IntradayIEXOnly[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public keyStats: (symbol: string) => Promise<KeyStats> = symbol => {
    return this.iexApiRequest(`/stock/${symbol}/stats`)
  }

  public list: (listType?: ListType) => Promise<Quote[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public logoURL: (symbol: string) => Promise<Logo> = () => {
    throw new Error(`not yet implemented`)
  }

  public marketSymbols: () => Promise<MarketSymbol[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public marketVolume: () => Promise<MarketVolume[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public news: (symbol: string, lastN?: number) => Promise<NewsItem[]> = (symbol, lastN = 10) => {
    return this.iexApiRequest(`/stock/${symbol}/news/last/${lastN}`)
  }

  public ohlc: (symbol: string) => Promise<OHLC> = () => {
    throw new Error(`not yet implemented`)
  }

  public peers: (symbol: string) => Promise<string[]> = symbol => {
    return this.iexApiRequest(`/stock/${symbol}/peers`)
  }

  public previousDay: (symbol: string) => Promise<PreviousDay> = () => {
    throw new Error(`not yet implemented`)
  }

  public price: (symbol: string) => Promise<number> = () => {
    throw new Error(`not yet implemented`)
  }

  public priceTarget: (symbol: string) => Promise<PriceTarget> = () => {
    throw new Error(`not yet implemented`)
  }

  public quote: (symbol: string) => Promise<Quote> = symbol => {
    return this.iexApiRequest(`/stock/${symbol}/quote`)
  }

  public sectorPerformance: () => Promise<SectorPerformance[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public socialSentiment: (
    symbol: string,
    type?: SentimentType,
    date?: string,
  ) => Promise<SocialSentiment | SocialSentiment[] | null> = () => {
    throw new Error(`not yet implemented`)
  }

  public splits: (
    symbol: string,
    period?: 'next' | '1m' | '3m' | '6m' | 'ytd' | '1y' | '2y' | '5y',
  ) => Promise<Splits[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public tops: (symbol: string) => Promise<TOPS[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public topsLast: (symbol: string) => Promise<TOPSLast[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public volumeByVenue: (symbol: string) => Promise<VolumeByVenue[]> = () => {
    throw new Error(`not yet implemented`)
  }

  public iexApiRequest: (endpoint: string) => Promise<any> = endpoint => {
    if (isMarketDataRequest(endpoint)) {
      return Promise.resolve(this.dataStore.marketData)
    }

    if (isStockDataRequest(endpoint)) {
      const [, , symbol, resource] = endpoint.split('/')

      if (!Object.keys(this.dataStore).includes(resource)) {
        return Promise.reject(new Error('Unrecognized request'))
      }

      const store = (this.dataStore as any)[resource]
      const fetchedCompanyData = fetchCompanyData(store, symbol)

      if (resource === 'quote') {
        const quote = modify(this.context, fetchedCompanyData.quote)
        return Promise.resolve(quote)
      }

      return Promise.resolve(fetchedCompanyData[resource])
    }

    return Promise.reject(new Error('Unrecognized request'))
  }

  public accountMetadata: () => Promise<AccountMetaData> = () => {
    throw new Error(`not yet implemented`)
  }

  public enablePayAsYouGo: () => Promise<any> = () => {
    throw new Error(`not yet implemented`)
  }

  public disablePayAsYouGo: () => Promise<any> = () => {
    throw new Error(`not yet implemented`)
  }

  public accountUsage: (type: UsageType) => Promise<any> = () => {
    throw new Error(`not yet implemented`)
  }
}

export default new Faker()
