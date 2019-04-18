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
      color: ${props => props.theme.colors.white};
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
      background: linear-gradient(to bottom, rgb(0, 19, 48), rgba(0, 8, 19, 0.8));
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
        background: linear-gradient(
          135deg,
          ${props => props.theme.colors.accent50a},
          ${props => props.theme.colors.accent30a}
        );
        mix-blend-mode: screen;
      }
    }

    &-option {
      color: white;
    }

    &-clear {
      font-size: 2rem;
    }
    &-arrow {
      display: none;
    }
  }
`
