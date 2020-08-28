import React from 'react'
import { Text, View } from '../../styleguide/index'
import numeral from 'numeral'
import { colors } from '@reactive-analytics/common'

const StockPrice = props => {
  return !props.data ? (
    <Text>no data</Text>
  ) : props.data.loading ? null : (
    <View>
      <Text
        style={{
          fontSize: 22,
          marginTop: 8,
        }}
      >
        <Text>{`${props.data.stock.company.name}`}</Text>
        <Text
          style={{
            color: '#beccdc',
            marginTop: 8,
          }}
        >{` (${props.data.stock.company.id})`}</Text>
      </Text>
      <View
        style={{
          marginTop: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: 28,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 39,
            }}
          >
            $
          </Text>
          {props.data.stock.quote.latestPrice}
        </Text>
        <Text
          style={{
            fontSize: 28,
            color: props.data.stock.quote.changePercent > 0 ? colors.good : colors.bad,
          }}
        >
          {`${numeral(props.data.stock.quote.change).format('0.00 a')}| ${numeral(
            props.data.stock.quote.changePercent * 100,
          ).format('0.00a')}`}
          <Text
            style={{
              fontSize: 16,
              lineHeight: 39,
              color: props.data.stock.quote.changePercent > 0 ? colors.good : colors.bad,
            }}
          >
            %
          </Text>
        </Text>
      </View>
    </View>
  )
}

export default StockPrice
