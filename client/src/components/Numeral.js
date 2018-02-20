import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

const FORMATS = {
  number: '0,0[.]00',
  integer: '0,0',
  approximate: '(0.00 a)',
  // use locale … for locale
  currency: '$ 0,0[.]00',
};

export default class Numeral extends PureComponent {
  static defaultProps = {
    format: '0,0[.]00',
  };

  static propTypes = {
    format: PropTypes.string.isRequired,
  };

  render() {
    const { children, format } = this.props;

    return numeral(this.props.children).format(FORMATS[format] || format);
  }
}
