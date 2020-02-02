import { Story } from '../../models'
import * as types from '../types/storyTypes'
import { ReduxAction } from '../models'

export interface StoryState {
  story?: Story
  selectedPoint?: string
}

const initialState: StoryState = {}

const stateModifiers = {
  [types.END_VOTING_SUCCESS]: (state: StoryState, action: ReduxAction): StoryState => {
    return { ...state, story: action.payload }
  },
  [types.SELECT_POINT]: (state: StoryState, action: ReduxAction): StoryState => {
    return { ...state, selectedPoint: action.payload }
  }
}

export const StoryReducer = (state: StoryState = initialState, action: ReduxAction): StoryState => {
  const stateModifier = stateModifiers[action.type]
  if (!stateModifier) {
    return state
  }

  return stateModifier(state, action)
}
