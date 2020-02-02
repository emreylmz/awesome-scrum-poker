import { Sprint } from '../../models'
import { constants } from '../../utils'
import * as types from '../types/sprintTypes'
import { ReduxAction } from '../models'

export interface SprintState {
  sprint?: Sprint
}

const initialState: SprintState = {}

const stateModifiers = {
  [types.START_SESSION_SUCCESS]: (state: SprintState, action: ReduxAction): SprintState => {
    console.log('Sprint', action.payload)
    window.localStorage.setItem(constants.SPRINT_ID_KEY, action.payload.id)
    return { ...state, sprint: action.payload }
  },
  [types.START_SESSION_ERROR]: (state: SprintState, action: ReduxAction): SprintState => {
    return { ...state, sprint: undefined }
  },
  [types.GET_SESSION_SUCCESS]: (state: SprintState, action: ReduxAction): SprintState => {
    console.log('Sprint', action.payload)
    window.localStorage.setItem(constants.SPRINT_ID_KEY, action.payload.id)
    return { ...state, sprint: action.payload }
  },
  [types.GET_SESSION_ERROR]: (state: SprintState, action: ReduxAction): SprintState => {
    return { ...state, sprint: undefined }
  }
}

export const SprintReducer = (state: SprintState = initialState, action: ReduxAction): SprintState => {
  const stateModifier = stateModifiers[action.type]
  if (!stateModifier) {
    return state
  }

  return stateModifier(state, action)
}
