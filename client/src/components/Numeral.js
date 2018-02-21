import { PureComponent } from 'react';
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

  render() {
    const { format } = this.props;

    return numeral(this.props.children).format(FORMATS[format] || format);
  }
}
