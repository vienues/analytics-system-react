import { branch, renderComponent, renderNothing, compose } from 'recompose';
import React from 'react';

const LoadingText = props => <div>Loading</div>;

export const renderWhileLoading = ({ propName = 'data', loader = LoadingText } = {}) => {
  return branch(props => props[propName] && props[propName].loading, renderComponent(loader));
};

const renderForError = (propName = 'data') =>
  branch(props => props[propName] && props[propName].error, renderComponent(ErrorComponent));

const ErrorComponent = props => {
  console.error(props.data.error);

  return (
    <span>
      Something went wrong<span>{JSON.stringify(props.data.error)}</span>
    </span>
  );
};

export const maybe = ({ cond, render = renderNothing }) => branch(cond, render);

export const loadable = compose(renderWhileLoading(), renderForError());
