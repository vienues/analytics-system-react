import * as moment from 'moment/moment';
import React from 'react';
import { Box, Measure } from 'rebass';
import { Text, Lead } from '../../styleguide';

const NewsSidebar = props => {
  return (props.data.stock.news || []).map(newsItem => (
    <Box key={newsItem.id} is="a" target="_blank" href={newsItem.url} flex={1}>
      <Measure f={1} my={2}>
        <Lead f={1} color="offwhite">
          {newsItem.headline}
        </Lead>
        <Text f={0} color="offwhite50">
          {moment(newsItem.datetime).fromNow()} - {newsItem.source}
        </Text>
      </Measure>
    </Box>
  ));
};

export default NewsSidebar;
