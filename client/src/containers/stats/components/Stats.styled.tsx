import styled from 'styled-components/macro'
import { DataContents } from 'common/StyledComponents'
import { pxToRems } from 'utils'

export const FieldsWrapper = styled(DataContents)`
  margin-top: ${pxToRems(8)};
  grid-row-gap: ${pxToRems(8)};
  grid-column-gap: ${pxToRems(30)};
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: ${pxToRems(1)};
    width: 100%;
    background-color: ${({ theme }) => theme.secondary.coreSecondary1};
  }
`

export const LabeledData = styled.div`
  font-size: ${pxToRems(12)};
  min-height: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.secondary.coreSecondary3};
  display: grid;
  grid-template-columns: 1fr auto;
  padding: ${pxToRems(7)} ${pxToRems(7)} 0;
`
