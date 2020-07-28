import React, { useEffect } from 'react'
import { useTheme, ThemeName } from 'rt-theme'

const getBarColor = (color: ThemeName) => (color === ThemeName.Dark ? '#4D4D4D' : '#F1F2F2')

export const PWAToolbar: React.FC = () => {
  const { themeName } = useTheme()

  useEffect(() => {
    const head = document.getElementById('themeColor')

    head && head.setAttribute('content', getBarColor(themeName))
  }, [themeName])

  return null
}
