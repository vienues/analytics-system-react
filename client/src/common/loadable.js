import { branch, renderComponent, compose } from 'recompose';
import React from 'react';

const Loading = props => <div>Loading</div>;

export const renderWhileLoading = (propName = 'data') => {
  return branch(props => props[propName] && props[propName].loading, renderComponent(Loading));
};

const renderForError = (propName = 'data') =>
  branch(props => props[propName] && props[propName].error, renderComponent(ErrorComponent));

const ErrorComponent = props => (
  <span>
    Something went wrong<span>{JSON.stringify(props.data.error)}</span>
  </span>
);

export const loadable = compose(renderWhileLoading(), renderForError());
