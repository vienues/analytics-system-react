import Downshift from 'downshift'
import React from 'react'
import { search_search } from '../../../__generated__/types'

export interface ISearchBarProps {
  items: search_search[]
  initialItem: search_search | null
  onChange: (symbol: search_search | null) => void
  onTextChange: (text: string) => void
}

class SearchInput extends React.Component<ISearchBarProps, {}> {
  public searchResultToOptionString = (item: search_search): string => (item ? `${item.id} ${item.name}` : '')

  public render() {
    return (
      // @ts-ignore
      <Downshift
        selectedItem={this.props.initialItem}
        onChange={this.props.onChange}
        itemToString={this.searchResultToOptionString}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => {
          this.props.onTextChange(inputValue || '')
          return (
            <div>
              <input {...getInputProps({ placeholder: 'Enter stock symbol...' })} />
              <ul {...getMenuProps()}>
                {isOpen
                  ? this.props.items
                      .filter(item => !inputValue || item.id.includes(inputValue) || item.name.includes(inputValue))
                      .map((item, index) => (
                        <li
                          key={item.id}
                          {...getItemProps({
                            index,
                            item,
                            style: {
                              backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                              fontWeight: selectedItem === item ? 'bold' : 'normal',
                            },
                          })}
                        >
                          <span>
                            {item.id} {item.name}
                          </span>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          )
        }}
      </Downshift>
    )
  }
}

export default SearchInput
