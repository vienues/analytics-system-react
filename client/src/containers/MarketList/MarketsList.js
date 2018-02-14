import wrapper from './marketDataQuery';
import React from 'react';
import { loadable } from '../../common/';

const Markets = ({ data: { markets } }) => {
  return (
    <div>
      {markets.map(({ id, name, lastUpdate }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{lastUpdate ? lastUpdate.change : '-'}</p>
        </div>
      ))}
    </div>
  );
};

export default wrapper(loadable(Markets));
