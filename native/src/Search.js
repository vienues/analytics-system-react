import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import connect from './connector'

import { Text, TextInput, View, viewProps } from './styleguide/index'

class SearchManager extends PureComponent {
  state = {
    value: null,
    showOptions: false,
  }

  handleChangeText = text => {
    this.props.search.refetch({ text })
    this.setState({ showOptions: true })
  }

  onSelection = symbol => {
    this.setState({ value: symbol, inputText: '', showOptions: false })
  }

  handleBlur = e => {
    this.props.onBlur(e)
  }

  handlePress = () => {
    this.onSelection(null)
    if (this.input) {
      this.input.focus()
    }
  }

  setInput = ref => {
    this.input = ref && ref.root
    if (this.input) {
      this.input.focus()
    }
  }

  render() {
    const { renderDetails } = this.props
    const { value } = this.state

    return (
      <Layout>
        <SearchInputContainer>
          {value ? (
            <SearchValue onPress={this.handlePress}>
              <Text>{value.name}</Text>
            </SearchValue>
          ) : (
            <SearchInput
              placeholder="Search"
              ref={this.setInput}
              onChangeText={this.handleChangeText}
              onBlur={this.handleBlur}
              hidden={!!value}
            />
          )}
        </SearchInputContainer>
        {this.state.showOptions &&
          this.props.search.search &&
          renderOptions({ lastSearchResults: this.props.search.search, onSelection: this.onSelection })}
        {value && renderDetails({ id: value.id })}
      </Layout>
    )
  }
}

const renderOptions = ({ lastSearchResults, onSelection }) =>
  lastSearchResults.map(symbol => (
    <SearchResult
      key={symbol.id}
      onPress={() => {
        onSelection(symbol)
      }}
    >
      <Text style={{ width: 4 * 16 }}>{symbol.id} </Text>
      <Text>{symbol.name}</Text>
    </SearchResult>
  ))

const Layout = styled(View)`
  flex-flow: column;
  width: 100%;
  align-items: flex-start;
`

const SearchInputContainer = styled(View)`
  width: 100%;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.12);
  flex-flow: row nowrap;
  ${viewProps({ h: 3, px: 1 })};
`

const SearchValue = styled(TouchableOpacity)`
  width: 100%;
  justify-content: center;
`

const SearchInput = styled(TextInput)`
  width: 100%;
`

const SearchResult = styled(TouchableOpacity)`
  width: 100%;
  flex-flow: row nowrap;
  ${viewProps({ h: 4, p: 1 })};
`

export default connect(SearchManager)
