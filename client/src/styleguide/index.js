import React from 'react';
import * as Rebass from 'rebass';
import styled, { css } from 'styled-components';

import { theme } from '../theme';

export const background = ['rgb(2, 35, 93)', `rgb(0, 24, 63)`, 'rgb(0, 7, 18)'];

export const Root = styled(Rebass.Flex)`
  flex: 1;
  color: ${theme.colors.primary50a};
  background-color: ${theme.gradients.primary[0]};
  background-image: linear-gradient(135deg, ${background[0]}, ${background[1]} 40%, ${background[2]} 120%);
  background-image: linear-gradient(135deg, ${theme.gradients.primary.join(', ')} 120%);
`;

export const Special = styled.div`
  flex: 1 1 1;
  max-width: 64rem;
  margin: 0 auto;
`;

export const Divider = props => <Rebass.Border my={2} color="accent" borderWidth={2} top {...props} />;

export const SectionHeading = props => <Rebass.Header f={2} caps {...props} />;

export const Bleed = ({ children, full, ...props }) => (
  <Rebass.Container px={[2, 3]} {...props}>
    <Rebass.Container maxWidth="4" p={0} px={0} children={children} />;
  </Rebass.Container>
);

export const textProps = css`
  ${({ weight }) =>
    weight
      ? css`
          font-weight: ${weight};
        `
      : ''}
  ${({ italic }) =>
    italic
      ? css`
          font-style: italic;
        `
      : ''}
  ${({ caps }) =>
    caps
      ? css`
          letter-spacing: 0.0625rem;
        `
      : ''}
  ${({ inline }) =>
    inline
      ? css`
          display: inline;
        `
      : ''}
`;

export const Text = styled(Rebass.Text)`
  ${textProps};
`;
export const Heading = styled(Rebass.Heading)`
  ${textProps};
`;
export const Lead = styled(Rebass.Lead)`
  ${textProps};
`;

export const BlockLink = styled(Text).attrs({ is: 'a', f: 0 })`
  display: block;
`;
