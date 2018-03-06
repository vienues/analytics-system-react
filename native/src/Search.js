import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components'

import { mapProps } from './styleguide/mapProps'
import { Text, TextInput, View, viewProps } from './styleguide/index'
import connect from './connector'

class SearchManager extends PureComponent {
  state = {
    value: null,
    options: false,
  }

  handleChangeText = text => {
    this.props.search.refetch({ text })
    this.setState({ options: true })
  }

  handleChange = symbol => {
    this.setState({ value: symbol, inputText: '', options: false })
  }

  handleBlur = e => {
    this.props.onBlur(e)
  }

  handlePress = () => {
    this.handleChange(null)
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
    const { details: Details } = this.props
    const { value } = this.state

    return (
      <View style={{ flexDirection: 'column', width: '100%', alignItems: 'flex-start' }}>
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
        {this.state.options && this.props.search.search
          ? this.props.search.search.map(symbol => (
              <SearchResult
                key={symbol.id}
                onPress={e => {
                  this.handleChange(symbol)
                }}
              >
                <Text style={{ width: 4 * 16 }}>{symbol.id} </Text>
                <Text>{symbol.name}</Text>
              </SearchResult>
            ))
          : null}
        {value && Details && <Details id={value.id} />}
      </View>
    )
  }
}

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
