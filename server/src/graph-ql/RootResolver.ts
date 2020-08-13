import { IResolvers } from 'graphql-tools'
import { DateScalar, DateTimeScalar, TimeScalar } from './DateScalars'
import companyResolver from './company/Company.resolver'
import fxResolver from './fx/Fx.resolver'
import newResolver from './news/News.resolver'
import quoteResolver from './quote/Quote.resolver'
import refResolver from './ref-data/RefData.resolver'
import stockResolver from './stock/Stock.resolver'
import tickResolver from './tick/Tick.resolver'
import statsResolver from './stats/Stats.resolver'
import mergeResolvers from './mergeResolvers'

const rootResolver: IResolvers = {
  Date: DateScalar,
  DateTime: DateTimeScalar,
  Time: TimeScalar,
}

export default mergeResolvers(
  [fxResolver, companyResolver, newResolver, quoteResolver, refResolver, stockResolver, tickResolver, statsResolver],
  rootResolver,
) as IResolvers
