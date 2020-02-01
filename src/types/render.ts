import React from 'react'

export type Render =
  | React.ReactElement
  | string
  | number
  | {}
  | React.ReactNodeArray
  | React.ReactPortal
  | boolean
  | null
  | undefined
