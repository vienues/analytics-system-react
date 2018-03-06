/**
 * copied from react-select
 */
import { css } from 'styled-components'
import { colors } from 'styleguide'

export default css`
  /* */
  /* Select Menu */
  /* ------------------------------ */

  /* wrapper around the menu */

  & .Select-menu-outer {
    /* Unfortunately, having both border-radius and allows scrolling using overflow defined on the same */
    /* element forces the browser to repaint on scroll.  However, if these definitions are split into an */
    /* outer and an inner element, the browser is able to optimize the scrolling behavior and does not */
    /* have to repaint on scroll. */

    color: ${colors.white50a};
    background-color: ${colors.black30a};
    border-top-color: mix(@select-input-bg, @select-input-border-color, 50%);
    box-shadow: @select-menu-box-shadow;
    box-sizing: border-box;
    max-height: 50vh;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
    padding: 0rem 0 1rem;
  }

  /* wrapper */

  & .Select-menu {
    max-height: 50vh;
    overflow-y: auto;
  }

  /* options */

  & .Select-option {
    box-sizing: border-box;
    background-color: @select-option-bg;
    color: @select-option-color;
    cursor: pointer;
    display: flex;
    padding: 0.5rem 1rem;

    &:last-child {
      .border-bottom-radius( @select-input-border-radius );
    }

    &.is-selected {
      background-color: @select-option-selected-bg-fb; /* Fallback color for IE 8 */
      background-color: @select-option-selected-bg;
      color: @select-option-selected-color;
    }

    &.is-focused {
      background-color: @select-option-focused-bg-fb; /* Fallback color for IE 8 */
      background-color: @select-option-focused-bg;
      color: @select-option-focused-color;
    }

    &.is-disabled {
      color: @select-option-disabled-color;
      cursor: default;
    }
  }

  /* no results */

  & .Select-noresults {
    box-sizing: border-box;
    color: @select-noresults-color;
    cursor: default;
    display: block;
    padding: @select-padding-vertical @select-padding-horizontal;
  }
`
