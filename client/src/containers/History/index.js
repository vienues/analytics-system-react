import { loadable } from '../../common';
import { compose } from 'recompose';

import connect from './connector';
import History from './History';

export default compose(connect, loadable)(History);
