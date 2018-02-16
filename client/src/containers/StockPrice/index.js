import { loadable, maybe } from '../../common';
import { compose } from 'recompose';
import connect from './connector';
import StockPrice from './StockPrice';

export default compose(maybe({ cond: ({ id }) => id == null }), connect, loadable)(StockPrice);
