import React from 'react'
import { Text, View } from '../../styleguide/index'

const StockPrice = props => {
  return !props.data ? (
    <Text>no data</Text>
  ) : props.data.loading ? null : (
    <View>
      <Text>{`${props.data.stock.company.name} (${props.data.stock.company.id})`}</Text>
      <Text>{'$' + props.data.stock.quote.latestPrice}</Text>
      <Text>{props.data.stock.quote.changePercent}</Text>
      <Text>{props.data.stock.quote.change}</Text>
    </View>
  )
}

export default StockPrice
