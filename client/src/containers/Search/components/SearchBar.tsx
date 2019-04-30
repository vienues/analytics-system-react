import Downshift from 'downshift'
import React from 'react'
import { search_search } from '../../../__generated__/types'

export interface ISearchBarProps {
  items: search_search[]
  onChange: (symbol: search_search | null) => void
  onTextChange: (text: string) => void
}

class SearchBar extends React.Component<ISearchBarProps, {}> {
  public searchResultToOptionString = (item: search_search): string => (item ? `${item.id} ${item.name}` : '')

  public render() {
    return (
      <Downshift onChange={this.props.onChange} itemToString={this.searchResultToOptionString}>
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
              <label {...getLabelProps()}>Enter a fruit</label>
              <input {...getInputProps()} />
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

export default SearchBar
