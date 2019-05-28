import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Downshift, { DownshiftInterface, GetItemPropsOptions } from 'downshift'
import React from 'react'
import { search_search as SearchResult } from '../../../__generated__/types'
import { styled } from '../../../rt-theme'

interface IClearSearchProps {
  clearFunction: () => void
  style?: React.CSSProperties
}

const ClearSearch: React.FunctionComponent<IClearSearchProps> = ({ clearFunction, style }) => {
  const clearClick = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    clearFunction()
  }
  return (
    <button style={{ ...style, cursor: 'pointer' }} onClick={clearClick}>
      <FontAwesomeIcon icon={faTimes} title="Clear selection" />
    </button>
  )
}

const TypedDownshift: DownshiftInterface<SearchResult> = Downshift

interface ISearchBarProps {
  items: SearchResult[]
  initialItem: SearchResult | null
  onChange: (symbol: SearchResult | null) => void
  onTextChange: (text: string) => void
}

class SearchInput extends React.Component<ISearchBarProps, {}> {
  constructor(props: ISearchBarProps) {
    super(props)
    this.inputFocus = this.inputFocus.bind(this)
  }

  public searchResultToOptionString = (item: SearchResult | null): string => (item ? `${item.id} - ${item.name}` : '')

  public inputFocus = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.currentTarget.select()
  }

  public render() {
    return (
      <TypedDownshift
        selectedItem={this.props.initialItem}
        onChange={this.props.onChange}
        itemToString={this.searchResultToOptionString}
        defaultHighlightedIndex={0}
      >
        {({ getInputProps, getItemProps, getMenuProps, getRootProps, isOpen, inputValue, clearSelection }) => {
          this.props.onTextChange(inputValue || '')
          return (
            <SearchWrapper {...getRootProps()}>
              {inputValue === '' ? (
                <FontAwesomeIcon style={{ paddingRight: '1rem' }} icon={faSearch} />
              ) : (
                <ClearSearch style={{ paddingRight: '1rem' }} clearFunction={clearSelection} />
              )}
              <input
                {...getInputProps({ placeholder: 'Enter a stock or symbol...' })}
                onClick={this.inputFocus}
                onFocus={this.inputFocus}
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
  grid-template-columns: auto 1fr auto;
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
