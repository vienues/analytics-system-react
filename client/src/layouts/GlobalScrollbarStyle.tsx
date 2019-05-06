import { rgba } from 'polished'
import React, { useMemo } from 'react'
import { createGlobalStyle, withTheme } from 'styled-components'
import { Theme } from '../rt-theme'

const ScrollbarGlobal = createGlobalStyle`
body, #root {
  overflow: hidden;
}

body ::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}

body ::-webkit-scrollbar-thumb {
  border-radius: 22px;
  background-color: rgba(212, 221, 232, .4);
  

  height: 16px;
  border: 4.5px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
}

body ::-webkit-scrollbar-corner {
  background-color: rgba(0,0,0,0);
}

body .ag-body ::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}
`

const GlobalScrollbarStyle: React.FunctionComponent<{ theme: Theme }> = props => {
  const getCss: (color: string) => string = color => `
  body ::-webkit-scrollbar-thumb {
    background-color: ${color};
  }
`
  const css = useMemo(() => getCss(rgba(props.theme.secondary[3], 0.2)), [rgba(props.theme.secondary[3], 0.2)])

  return (
    <React.Fragment>
      <ScrollbarGlobal />
      <style>{css}</style>
    </React.Fragment>
  )
}

export default withTheme(GlobalScrollbarStyle)
