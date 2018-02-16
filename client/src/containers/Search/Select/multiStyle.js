/**
 * copied from react-select
 */
import { css } from 'styled-components';

export default css`
/* */
/* Multi-Select */
/* ------------------------------ */


/* Base */

& .Select--multi {

	/* add margin to the input element */
	& .Select-input {
		vertical-align: middle;
		/* border: 1px solid transparent; */
		margin-left: @select-padding-horizontal;
		padding: 0;
	}
	&.Select--rtl .Select-input {
		margin-left: 0;
		margin-right: @select-padding-horizontal;
	}

	/* reduce margin once there is value */
	&.has-value .Select-input {
		margin-left: @select-item-gutter;
	}

	/* Items */
	& .Select-value {
    display: inline-block;
		color: @select-item-color;
		font-size: 1em;
		line-height: 1;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
		vertical-align: top;
	}

	/* common */
	& .Select-value-icon,
	& .Select-value-label {
		display: inline-block;
		vertical-align: middle;
	}

	/* label */
	& .Select-value-label {
		& .border-right-radius( @select-item-border-radius );
		cursor: default;
		padding: @select-item-padding-vertical @select-item-padding-horizontal;
	}
	a.Select-value-label {
		color: @select-item-color;
		cursor: pointer;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	/* icon */
	& .Select-value-icon {
		cursor: pointer;
		& .border-left-radius( @select-item-border-radius );
		border-right: 1px solid @select-item-border-color-fb;  /* Fallback color for IE 8 */
		border-right: 1px solid @select-item-border-color;

		/* move the baseline up by 1px */
		padding: (@select-item-padding-vertical - 1) @select-item-padding-horizontal (@select-item-padding-vertical + 1);

		&:hover,
		&:focus {
			background-color: @select-item-hover-bg-fb;  /* Fallback color for IE 8 */
			background-color: @select-item-hover-bg;
			color: @select-item-hover-color;
		}
		&:active {
			background-color: @select-item-border-color-fb;  /* Fallback color for IE 8 */
			background-color: @select-item-border-color;
		}
	}
	&.Select--rtl {
		& .Select-value {
		  margin-left: 0;
		  margin-right: @select-item-gutter;
		}
		& .Select-value-icon {
			border-right: none;
			border-left: 1px solid @select-item-border-color-fb; /* Fallback color for IE 8 */
			border-left: 1px solid @select-item-border-color;
		}
	}
}

.Select--multi.is-disabled {
	& .Select-value {
		background-color: @select-item-disabled-bg;
		border: 1px solid @select-item-disabled-border-color;
		color: @select-item-disabled-color;
	}
	/* icon */
	& .Select-value-icon {
		cursor: not-allowed;
		border-right: 1px solid @select-item-disabled-border-color;

		&:hover,
		&:focus,
		&:active {
			background-color: @select-item-disabled-bg;
		}
	}
}
`;
