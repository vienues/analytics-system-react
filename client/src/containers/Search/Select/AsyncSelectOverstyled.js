import styled, { css } from 'styled-components'
import { Async as AsyncSelect } from 'react-select'

const AsyncSelectOverStyled = styled(AsyncSelect)`
  background-color: transparent;

  .Select-control {
    background-color: transparent;
    border: none;
    color: white;
    height: 2rem;
  }

  &.Select {
    &.is-focused,
    &.has-value,
    &.is-focused:not(.is-open) {
      & .Select {
        &-control {
          background-color: transparent;
          border: none;
          color: white;
          height: 2rem;
        }
      }
    }
  }
`

export default AsyncSelectOverStyled
