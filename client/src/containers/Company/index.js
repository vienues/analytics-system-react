import { loadable } from '../../common';
import { compose } from 'recompose';

import connect from './connector';
import Company from './Company';

export default compose(connect, loadable)(Company);
