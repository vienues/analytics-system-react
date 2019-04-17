import { branch, renderComponent, renderNothing, compose } from 'recompose'
import React from 'react'

const LoadingText = (props: any) => <div>Loading</div>

export const renderWhileLoading = ({ propName = 'data', loader = LoadingText } = {}) => {
  return branch((props: any) => props[propName] && props[propName].loading, renderComponent(loader))
}

const renderForError = (propName = 'data') =>
  branch(props => props[propName] && props[propName].error, renderComponent(ErrorComponent))

const ErrorComponent = (props: any) => {
  console.error(props.data.error)

  return (
    <span>
      Something went wrong
      <span />
    </span>
  )
}

export const maybe = ({ cond, render = renderNothing }: any) => branch(cond, render)

export const loadable = compose(
  renderWhileLoading(),
  renderForError(),
)
