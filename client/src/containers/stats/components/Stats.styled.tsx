import styled from 'styled-components/macro'
import { DataContents } from 'common/StyledComponents'

export const FieldsWrapper = styled(DataContents)`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`

export const LabeledData = styled.div`
  min-height: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.secondary.coreSecondary3};
  display: grid;
  grid-template-columns: 1fr auto;
`
