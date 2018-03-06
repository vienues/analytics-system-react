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
import { ApplicationBackground, Text } from './src/styleguide/index'

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
          flexDirection: 'row',
          width: '100%',
          borderBottomWidth: 1,
          borderColor: '#ddd',
          marginTop: 8,
          paddingBottom: 8,
        }}
      >
        <StockPrice id={id} />
      </View>
      <History id={id} />
      <News id={id} />
    </Fragment>
  )
}
