import React from 'react'
import Search from '../../containers/Search'

import { Root, ViewportRowPadding } from 'styleguide'

export default ({ id }) => (
  <Root>
    <ViewportRowPadding>
      <Search id={id} url={/search/} />
    </ViewportRowPadding>
  </Root>
)
