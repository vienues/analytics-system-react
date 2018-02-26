import styled from 'styled-components'
import { Async as AsyncSelect } from 'react-select'

import { colors } from '../../../styleguide/colors'

import componentStyle from './componentStyle'
import menuStyle from './menuStyle'
import multiStyle from './multiStyle'
import spinnerStyle from './spinnerStyle'

export default styled(AsyncSelect)`
  flex: 1;
  background-color: transparent;

  ${componentStyle};
  ${menuStyle};
  ${multiStyle};
  ${spinnerStyle};

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
      color: ${colors.white};
    }

    &-value {
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
        background: linear-gradient(135deg, ${colors.accent50a}, ${colors.accent30a});
        ${'' /* background-color: ${colors.accent}; */} mix-blend-mode: screen;
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
