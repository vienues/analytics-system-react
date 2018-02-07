import React from 'react';
import * as Rebass from 'rebass';

export const Container = props => <Rebass.Container mx="auto" maxWidth="4" {...props} />;
export const Divider = props => <Rebass.Border my={2} color="gray3" borderWidth={4} top {...props} />;
export const Edge = props => <Rebass.Border color="gray3" borderWidth={4} top {...props} />;
export const Column = props => <Rebass.Box flex={1 / 2} {...props} />;
export const Row = props => <Rebass.Flex {...props} />;

export const Bleed = ({ children, ...props }) => (
  <Rebass.Container px={[1, 2, 3, 4]} {...props}>
    <Container children={children} />
  </Rebass.Container>
);
