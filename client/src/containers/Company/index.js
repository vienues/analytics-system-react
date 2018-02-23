import { loadable } from '../../common';
import { compose } from 'recompose';

import connect from './openfinConnector';
import Company from './Company';

export default compose(connect(Company.fragment), loadable)(Company);
