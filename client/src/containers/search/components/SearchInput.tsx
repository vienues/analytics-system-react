import Downshift, { GetItemPropsOptions } from 'downshift'
import React from 'react'
import { search_symbols as SearchResult, MarketSegment } from '../../../__generated__/types'
import { fonts } from 'rt-theme/fonts'
import styled from 'styled-components/macro'
interface ISearchBarProps {
  items: SearchResult[]
  initialItem: SearchResult | null
  maxItems?: number
  onChange: (symbol: SearchResult | null) => void
  onTextChange: (text: string) => void
  placeholder: string
}

const SearchInput: React.FC<ISearchBarProps> = ({
  initialItem,
  placeholder,
  items,
  maxItems,
  onChange,
  onTextChange,
}) => {
  const getItemId = ({ id, marketSegment }: SearchResult) => {
    if (marketSegment && marketSegment.toUpperCase() === MarketSegment.FX) {
      return `${id.slice(0, 3)}/${id.slice(3)}`
    }
    return id
  }

  const searchResultToOptionString = (item: SearchResult | null): string => {
    return item ? `${getItemId(item)} - ${item.name}` : ''
  }

  const renderItems = (getItemProps: (options: GetItemPropsOptions<SearchResult>) => any) => {
    if (items.length === 0) {
      return <SearchResultNoItem>No results found...</SearchResultNoItem>
    }
    let sliceTo = (maxItems || items.length) + 1
    return items.slice(0, sliceTo).map((item, index) => (
      <SearchResultItem key={item.id} {...getItemProps({ index, item })}>
        {item.marketSegment && (
          <>
            <small>{item.marketSegment}</small>
            <small>/</small>
          </>
        )}
        {getItemId(item)} - {item.name}
      </SearchResultItem>
    ))
  }

  return (
    <Downshift
      selectedItem={initialItem}
      onChange={onChange}
      itemToString={searchResultToOptionString}
      defaultHighlightedIndex={0}
    >
      {({ getInputProps, getItemProps, getMenuProps, getRootProps, isOpen, selectedItem, inputValue }) => {
        onTextChange(inputValue || '')
        return (
          <SearchWrapper {...getRootProps()}>
            <input
              {...getInputProps({ placeholder: placeholder })}
              style={{ width: '100%' }}
              autoFocus={true}
              spellCheck={false}
            />
            {isOpen ? <SearchResults {...getMenuProps()}>{renderItems(getItemProps)}</SearchResults> : null}
          </SearchWrapper>
        )
      }}
    </Downshift>
  )
}

const SearchWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr auto;
  position: relative;
  font-family: ${fonts.secondaryFontFamily};
  & svg {
    color: ${({ theme }) => theme.primary.corePrimary};
  }
  > input {
    color: ${({ theme }) => theme.textColorPrimary};
  }
`

const SearchResults = styled.menu`
  position: absolute;
  background: ${({ theme }) => theme.primary.corePrimary};
  z-index: 1000;
  border: solid 1px ${({ theme }) => theme.secondary.coreSecondary};
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
  > small {
    display: inline-block;
    font-size: 0.5em;
    padding-right: 5px;
  }
  &[aria-selected='true'] {
    color: ${({ theme }) => theme.primary.corePrimary};
    background: ${({ theme }) => theme.secondary.coreSecondary};
  }
`

export default SearchInput
