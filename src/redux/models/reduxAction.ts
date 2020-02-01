import { ReduxType } from './reduxType'

export type ReduxAction = {
  type: ReduxType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any
}
