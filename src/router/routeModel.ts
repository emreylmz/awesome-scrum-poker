import React from 'react'

export interface RouteModel {
  path: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>
}
