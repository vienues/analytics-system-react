import { Font } from 'expo'
import React, { Fragment } from 'react'
import { ApolloProvider } from 'react-apollo'
import { View } from 'react-native'
import client from './src/apollo/client'
import { lato, verta } from './src/assets/fonts/index'
import News from './src/containers/News/index'
import Search from './src/Search'
import History from './src/containers/History'

import StockPrice from './src/containers/StockPrice'
import { ApplicationBackground, Text, Divider } from './src/styleguide/index'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({ ...lato, ...verta })
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <ApplicationBackground>{this.state.fontLoaded && <Search details={Details} />}</ApplicationBackground>
      </ApolloProvider>
    )
  }
}
const Details = ({ id }) => {
  return (
    <Fragment>
      <View
        style={{
          width: '100%',
          marginTop: 8,
        }}
      >
        <StockPrice id={id} />
      </View>
      <History id={id} />
      <Text
        style={{
          fontSize: 18,
          marginTop: 26,
          color: '#7fb3ff',
        }}
      >
        Latest News
      </Text>
      <Divider />
      <News id={id} />
    </Fragment>
  )
}
