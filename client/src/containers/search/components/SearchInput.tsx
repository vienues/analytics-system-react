import Downshift, { DownshiftInterface, GetItemPropsOptions } from 'downshift'
import React from 'react'
import { search_symbols as SearchResult } from '../../../__generated__/types'
import { styled } from '../../../rt-theme'

const TypedDownshift: DownshiftInterface<SearchResult> = Downshift

interface ISearchBarProps {
  items: SearchResult[]
  initialItem: SearchResult | null
  onChange: (symbol: SearchResult | null) => void
  onTextChange: (text: string) => void
  placeholder: string
}

class SearchInput extends React.Component<ISearchBarProps, {}> {
  constructor(props: ISearchBarProps) {
    super(props)
  }

  public searchResultToOptionString = (item: SearchResult | null): string => (item ? `${item.id} - ${item.name}` : '')

  public render() {
    return (
      <TypedDownshift
        selectedItem={this.props.initialItem}
        onChange={this.props.onChange}
        itemToString={this.searchResultToOptionString}
        defaultHighlightedIndex={0}
      >
        {({ getInputProps, getItemProps, getMenuProps, getRootProps, isOpen, inputValue }) => {
          this.props.onTextChange(inputValue || '')
          return (
            <SearchWrapper {...getRootProps()}>
              <input
                {...getInputProps({ placeholder: this.props.placeholder })}
                style={{ width: '100%' }}
                autoFocus={true}
                spellCheck={false}
              />
              {isOpen ? (
                <SearchResults {...getMenuProps()}>
                  {this.renderItems(this.props.items, inputValue, getItemProps)}
                </SearchResults>
              ) : null}
            </SearchWrapper>
          )
        }}
      </TypedDownshift>
    )
  }

  private renderItems(
    itemsList: SearchResult[],
    inputValue: string | null,
    getItemProps: (options: GetItemPropsOptions<SearchResult>) => any,
  ) {
    const filteredList = itemsList.filter(
      item => !inputValue || item.id.includes(inputValue) || item.name.includes(inputValue),
    )
    if (filteredList.length === 0) {
      return <SearchResultNoItem>No results found...</SearchResultNoItem>
    }
    return itemsList.map((item, index) => (
      <SearchResultItem key={item.id} {...getItemProps({ index, item })}>
        {item.id.toUpperCase()} - {item.name}
      </SearchResultItem>
    ))
  }
}

const SearchWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr auto;
  position: relative;
  & svg {
    color: ${({ theme }) => theme.core.lightBackground};
  }
`

const SearchResults = styled.menu`
  position: absolute;
  background: ${({ theme }) => theme.core.darkBackground}E0;
  z-index: 1000;
  border: solid 1px ${({ theme }) => theme.secondary.base};
  border-radius: 5px;
  margin-top: 5px;
  top: 2.25rem;
  left: 0;
  right: 0;
  cursor: pointer;
`
const SearchResultItemBase = styled.div`
  padding: 5px;
`

const SearchResultNoItem = styled(SearchResultItemBase)`
  opacity: 0.59;
`

const SearchResultItem = styled(SearchResultItemBase)`
  padding: 5px;
  &[aria-selected='true'] {
    color: ${({ theme }) => theme.primary.base};
    background: ${({ theme }) => theme.secondary.base};
  }
`

export default SearchInput
