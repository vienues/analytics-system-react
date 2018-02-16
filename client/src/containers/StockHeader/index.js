import { loadable } from '../../common';
import { compose } from 'recompose';
import connect from './connector';
import StockHeader from './StockHeader';

export default compose(connect, loadable)(StockHeader);
