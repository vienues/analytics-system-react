import React from 'react';
import { withProps } from 'recompose';
import * as Rebass from 'rebass';
import styled, { css } from 'styled-components';
import mapProps from './map-props';

import { theme } from '../theme';
import { Flex } from 'rebass';

export { colors, gradients } from './colors';

export { ViewportRow, ViewportFlex } from './ViewportRow';

export const Root = styled(Rebass.Flex)`
  flex: 1;
  color: ${theme.colors.primary50a};
  background-color: ${theme.gradients.primary[0]};
  background-image: linear-gradient(135deg, ${theme.gradients.primary.join(', ')} 120%);
`;

export const RootBleed = styled(Flex)`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

export const Divider = styled(Rebass.Border).attrs({ my: 2, color: 'accent', borderWidth: 2, top: true })`
  flex: 1 100%;
`;

export const Gutter = withProps({ p: [1, 2] })(Rebass.Box);

export const SectionHeading = props => <Rebass.Header f={2} caps {...props} />;

export const Bleed = ({ children, full, ...props }) => (
  <Rebass.Container px={[2, 3]} {...props}>
    <Rebass.Container maxWidth="4" p={0} px={0} children={children} />;
  </Rebass.Container>
);

export const textProps = mapProps({
  weight: {
    light: css`
      font-weight: 200;
    `,
    regular: css`
      font-weight: 300;
    `,
    bold: css`
      font-weight: 600;
    `,
    default: weight => css`
      font-weight: ${weight};
    `,
  },
  italic: css`
    font-style: italic;
  `,
  caps: css`
    text-transform: uppercase;
    letter-spacing: 0.0625rem;
  `,
  display: {
    inline: css`
      display: inline;
    `,
  },
});

export const Text = styled(Rebass.Text).attrs({ is: 'div' })`
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
