import * as types from '../types/storyTypes'
import { ReduxAction } from '../models'

interface StoryState {
  trial?: any
}

const defaultState: StoryState = {}

const stateModifiers = {
  [types.TRIAL]: (state: StoryState, action: ReduxAction): StoryState => {
    return { ...state, trial: action.payload }
  }
}

export const StoryReducer = (
  state: StoryState = defaultState,
  action: ReduxAction
): StoryState => {
  const stateModifier = stateModifiers[action.type]
  if (!stateModifier) {
    return state
  }

  return stateModifier(state, action)
}
