import { loadable } from '../../common';
import { compose } from 'recompose';

import connect from './connector';
import History from './History';

export default compose(connect(History.fragment), loadable)(History);
