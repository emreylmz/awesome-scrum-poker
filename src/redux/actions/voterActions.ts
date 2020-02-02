import Redux from 'redux'
import { voterServices } from '../../services'
import { SuccessOutput } from '../../services/serviceModels'
import * as types from '../types/voterTypes'
import * as sprintActions from './sprintActions'

export const vote = (point: number): any => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return async (dispatch: Redux.Dispatch) => {
    try {
      const input = {
        point
      }
      const result = (await voterServices.vote(input)) as SuccessOutput

      dispatch({ type: types.VOTE_SUCCESS, payload: result })
      await dispatch(sprintActions.getSession())
      return result
    } catch (error) {
      dispatch({ type: types.VOTE_ERROR, payload: error })
    }
  }
}
