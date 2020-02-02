import Redux from 'redux'
import { Sprint } from '../../models'
import { sprintServices } from '../../services'
import { constants } from '../../utils'
import * as types from '../types/sprintTypes'

export const startSession = (sprintName: string, numberOfVoters: number, stories: string[]) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return async (dispatch: Redux.Dispatch) => {
    try {
      const input = {
        sprintName,
        numberOfVoters,
        stories
      }
      const result = (await sprintServices.start(input)) as Sprint

      dispatch({ type: types.START_SESSION_SUCCESS, payload: result })
      return result
    } catch (error) {
      dispatch({ type: types.START_SESSION_ERROR, payload: error })
    }
  }
}

export const getSession = (): any => {
  return async (dispatch: Redux.Dispatch, getState: any) => {
    try {
      const sprintId: string | null = window.localStorage.getItem(constants.SPRINT_ID_KEY)
      if (!sprintId) {
        throw new Error('Sprint Id not found')
      }
      const input = {
        sprintId
      }
      const result = (await sprintServices.get(input)) as Sprint

      dispatch({ type: types.GET_SESSION_SUCCESS, payload: result })
      return result
    } catch (error) {
      dispatch({ type: types.GET_SESSION_ERROR, payload: error })
    }
  }
}
