import Redux from 'redux'
import { storyServices } from '../../services'
import { SuccessOutput } from '../../services/serviceModels'
import * as types from '../types/storyTypes'
import * as sprintActions from './sprintActions'
import * as voterActions from './voterActions'

export const endVoting = (storyId: string, point: number) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return async (dispatch: Redux.Dispatch) => {
    try {
      const input = {
        storyId,
        point
      }
      const result = (await storyServices.endVoting(input)) as SuccessOutput

      dispatch({ type: types.END_VOTING_SUCCESS, payload: result })
      await dispatch(sprintActions.getSession())
      return result
    } catch (error) {
      dispatch({ type: types.END_VOTING_ERROR, payload: error })
    }
  }
}

export const selectPoint = (point?: string) => {
  return (dispatch: Redux.Dispatch): void => {
    console.log(point, point && !Number.isNaN(Number(point)))
    if (point && !Number.isNaN(+point)) {
      dispatch(voterActions.vote(+point))
    }
    dispatch({ type: types.SELECT_POINT, payload: point })
  }
}
