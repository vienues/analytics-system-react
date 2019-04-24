import Select from 'react-select'
import styled from 'styled-components'
import componentStyle from './componentStyle'
import menuStyle from './menuStyle'
import multiStyle from './multiStyle'
import spinnerStyle from './spinnerStyle'

export default styled(Select)`
  flex: 1;
  background-color: transparent;

  ${props => componentStyle(props.theme)};
  ${props => menuStyle(props.theme)};
  ${props => multiStyle(props.theme)};
  ${props => spinnerStyle(props.theme)};

  .Select {
    &-multi-value-wrapper {
      font-size: 0;
      line-height: 0;
      display: flex;
      align-items: baseline;
      height: 2.5rem;
    }

    &-placeholder,
    &-noresults,
    &-value,
    &-input {
      padding: 0.25rem 0.5rem;
      padding-left: 0;
      height: 2.5rem;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 300;
      display: inline-block;
    }

    &-value,
    &-input {
      color: ${({ theme }) => theme.core.textColor};
    }

     {
      display: flex;
      flex-direction: row-reverse;
    }

    &-input {
      line-height: 0;
      input {
        display: block;
        line-height: 2rem;
        font-size: 2rem;
        height: 2rem;
        padding: 0;
        margin: 0;
        overflow: visible;
      }
    }

    &-menu-outer {
      transform: translateY(calc(0.75rem - 2px));
      color: ${({ theme }) => theme.core.textColor};
      background: ${({ theme }: any) => theme.core.lightBackground};
      border-color: ${({ theme }: any) => theme.secondary.base};
      border-style: solid;
      border-size: 0.5rem;
    }

    &-noresults {
      padding: 1rem;
    }
    &-noresults,
    &-option {
      font-size: 1.125rem;
      line-height: 1.25rem;
      font-weight: 300;
      height: 2.5rem;

      &.is-focused {
        color: ${({ theme }) => theme.primary.base};
        background: ${({ theme }) => theme.secondary.base};
      }
    }

    &-option {
      color: ${({ theme }) => theme.core.textColor};
    }

    &-clear {
      font-size: 2rem;
    }
    &-arrow {
      display: none;
    }
  }
`
