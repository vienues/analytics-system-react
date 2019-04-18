import { branch, renderComponent, renderNothing, compose } from 'recompose'
import React from 'react'
import { styled } from '../rt-theme'
import { AdaptiveLoader } from '../styleguide/AdaptiveLoader'

const LoadableStyle = styled.div<{ minWidth?: string; minHeight?: string }>`
  width: 100%;
  min-width: ${({ minWidth = '100%' }) => minWidth};
  height: 100%;
  min-height: ${({ minHeight = '100%' }) => minHeight};
  border-radius: 0.1875rem;
  background-color: ${({ theme }) => theme.core.lightBackground};
  color: ${({ theme }) => theme.core.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.59;
  fill: ${({ theme }) => theme.core.textColor};
`

const LoadingText = (props: any) => (
  <LoadableStyle>
    <AdaptiveLoader size={50} speed={1.4} />
  </LoadableStyle>
)

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
