import React from 'react'

export const CloseIcon = props => {
  const { fill = '#FFF' } = props

  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          id="as"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
        <path id="cc" d="M0 0h50v50H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bb" fill={fill}>
          <use xlinkHref="#as" />
        </mask>
        <g mask="url(#bb)">
          <use fill={fill} transform="translate(-13 -13)" xlinkHref="#cc" />
        </g>
      </g>
    </svg>
  )
}

export const MinimizeIcon = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" width={24} height={24} viewBox="0 0 24 24" {...props}>
    <defs>
      <path id="a" d="M19 13H5v-2h14z" />
      <path id="c" d="M0 0h50v50H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <g mask="url(#b)">
        <use fill="#fff" transform="translate(-13 -13)" xlinkHref="#c" />
      </g>
    </g>
  </svg>
)
