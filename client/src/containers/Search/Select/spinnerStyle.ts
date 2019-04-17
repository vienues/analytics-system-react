/**
 * copied from react-select
 */
import { css } from 'styled-components'

export default ({ colors }: any) => css`
  /*  */
  /* Spinner */
  /* ------------------------------ */

  .Select-spinner {
    animation: Select-animation-spin 400ms infinite linear;
    height: 1rem;
    width: 1rem;
    box-sizing: border-box;
    border-radius: 50%;
    border: calc(1rem / 8) solid 1rem;
    border-right-color: ${colors.accent};
    display: inline-block;
    position: relative;
  }

  @keyframes Select-animation-spin {
    to {
      transform: rotate(1turn);
    }
  }
  @-webkit-keyframes Select-animation-spin {
    to {
      -webkit-transform: rotate(1turn);
    }
  }
`
