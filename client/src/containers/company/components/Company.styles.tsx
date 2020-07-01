import styled from 'styled-components/macro'
import { Text } from '../../../common/StyledComponents'
import { pxToRems } from 'utils'

export const CompanyDescription = styled(Text)`
  font-size: ${pxToRems(12)};
  line-height: 1.67;
  letter-spacing: 0.09px;
`
