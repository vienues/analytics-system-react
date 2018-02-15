import { loadable } from '../../common';
import { compose } from 'recompose';

import connect from './connector';
import Stats from './Stats';

export default compose(connect, loadable)(Stats);
