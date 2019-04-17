/**
 * copied from react-select
 */
import { css } from 'styled-components'

const internalInputHeight = css`2.5rem`

const arrowWidth = '0.25rem'
const clearWidth = '1rem'

export default (theme: any) => {
  const { colors } = theme

  const backgroundColor = colors.transparent
  const inputBgFocus = colors.transparent
  const arrowColor = colors.good

  return css`

  .Select-multi-value-wrapper {
    display: flex;
  }

&.Select {
  position: relative;
  input::-webkit-contacts-auto-fill-button,
  input::-webkit-credentials-auto-fill-button {
    display: none !important;
  }
  input::-ms-clear {
    display: none !important;
  }
  input::-ms-reveal {
    display: none !important;
  }
}


/* base */

&.Select {
  position: relative;

  /* disable some browser-specific behaviours that break the input */
  input::-webkit-contacts-auto-fill-button,
  input::-webkit-credentials-auto-fill-button {
    display: none !important;
  }
  input::-ms-clear {
    display: none !important;
  }
  input::-ms-reveal {
    display: none !important;
  }

  /* handle disabled state */
  &.is-disabled {
    & .Select-arrow-zone {
      cursor: default;
      pointer-events: none;
      opacity: 0.35;
    }

    > .Select-control {
      background-color: ${backgroundColor};
      &:hover {
        box-shadow: none;
      }
    }
  }

  &.is-open > .Select-control {
    ${'' /* .border-bottom-radius( 0 ); */}
    background: ${backgroundColor};
    ${
      '' /* border-color: darken(@select-input-border-color, 10%) @select-input-border-color lighten(@select-input-border-color, 5%); */
    }

    /* flip the arrow so its pointing up when the menu is open */
    & .Select-arrow {
      top: -2px;
      border-color: transparent transparent ${arrowColor};
      border-width: 0 ${arrowWidth} ${arrowWidth};
    }
  }

  &.is-searchable {
    &.is-open > .Select-control {
      cursor: text;
    }

    &.is-focused:not(.is-open) > .Select-control {
      cursor: text;
    }
  }

  &.is-focused > .Select-control {
    background: ${inputBgFocus};
  }

  &.is-focused:not(.is-open) > .Select-control {
    ${'' /* .Select-focus-state(@select-input-border-focus); */}
  }

  &.has-value.is-clearable.Select--single > .Select-control .Select-value {
    padding-right: (${clearWidth} + ${arrowWidth} * 5);
  }

  &.has-value.Select--single > .Select-control .Select-value,
  &.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value {

    a.Select-value-label {
      cursor: pointer;
      text-decoration: none;

      &:hover,
      &:focus {
        color: @select-link-hover-color;
        outline: none;
        text-decoration: underline;
      }

      &:focus {
        background: @select-input-bg-focus;
      }
    }
  }

  /* fake-hide the input when the control is pseudo-focused */
  &.has-value.is-pseudo-focused .Select-input {
    opacity: 0;
  }

  &.is-open .Select-arrow,
  & .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: ${arrowColor}-hover;
  }
  &.Select--rtl {
    direction: rtl;
    text-align: right;
  }
}

/* base */

& .Select-control {
  background-color: ${colors.transparent};
  color: ${colors.primary70};
  cursor: default;
  display: table;
  border-spacing: 0;
  border-collapse: separate;
  height: 2.5rem;
  outline: none;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:hover {
    box-shadow: @select-input-hover-box-shadow;
  }

  & .Select-input:focus {
    outline: none;
    background: @select-input-bg-focus;
  }
}

/* placeholder */
& .Select-placeholder,
& .Select--single > .Select-control .Select-value {
  display: inline-block;

  line-height: ${internalInputHeight};
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  color: ${colors.primary70};

  /* crop text */
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* the <input> element users type in */

& .Select-input {
  /* inherits display: inline-block from "react-input-autosize" */
  height: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  vertical-align: middle;

  > input {
    width: 100%;
    background: none transparent;
    border: 0 none;
    box-shadow: none;
    cursor: default;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    height: ${internalInputHeight};
    margin: 0;
    outline: none;
    line-height: 1em;
    padding: 0.25rem 0.5rem;
    -webkit-appearance: none;

    & .is-focused & {
      cursor: text;
    }
  }

}

/* fake-hide the input when the control is pseudo-focused */
& .has-value.is-pseudo-focused .Select-input {
  opacity: 0;
}

/* fake input */
& .Select-control:not(.is-searchable) > .Select-input {
  outline: none;
}

/* loading indicator */
& .Select-loading-zone {
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 1rem;
}
& .Select-loading {
  & .Select-spinner(1rem, ${colors.transparent}, ${colors.bad});
  vertical-align: middle;
}


/* the little cross that clears the field */

& .Select-clear-zone {
  & .animation( Select-animation-fadeIn 200ms );
  color: @select-clear-color;
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: ${clearWidth};

  &:hover {
    color: @select-clear-hover-color;
  }
}
& .Select-clear {
  display: inline-block;
  font-size: 1rem;
  line-height: 1;
}
& .Select--multi .Select-clear-zone {
  width: ${clearWidth};
}


/* arrow indicator */

& .Select-arrow-zone {
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: calc(${arrowWidth} * 5);
  padding-right: ${arrowWidth};

  & .Select--rtl & {
    padding-right: 0;
    padding-left: ${arrowWidth};
  }
}

& .Select-arrow {
  border-color: ${arrowColor} transparent transparent;
  border-style: solid;
  border-width: ${arrowWidth} ${arrowWidth} calc(${arrowWidth} / 2);
  display: inline-block;
  height: 0;
  width: 0;
  position: relative;
}

& .Select-control > *:last-child {
  padding-right: 1rem;
}

& .Select--multi .Select-multi-value-wrapper {
  display: inline-block;
}

& .Select .Select-aria-only {
  position: absolute;
  display: inline-block;
  height: 1px;
  width: 1px;
  margin: -1px;
  clip: rect(0,0,0,0);
  overflow: hidden;
  float: left;
}

/* Animation */
/* ------------------------------ */

/* fade in */

@-webkit-keyframes Select-animation-fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes Select-animation-fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`
}
