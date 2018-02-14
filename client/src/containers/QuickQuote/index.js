import { renderWhileLoading } from '../../common';

import connect from './connect';
import QuickQuote from './QuickQuote';

export default connect(renderWhileLoading({ loader: () => null })(QuickQuote));
