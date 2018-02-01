import React from 'react';
import { branch, renderComponent } from 'recompose';

export const Loading = () => (
  <div>Loading</div>
);
export const displayLoadingState = branch(
  (props) => {
    return !props.data
  },
  renderComponent(Loading),
);
