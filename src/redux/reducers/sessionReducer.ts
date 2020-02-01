import * as types from '../types/sessionTypes'
import { ReduxAction } from '../models'

interface SessionState {
  trial?: any
}

const defaultState: SessionState = {};

const stateModifiers = {
  [types.TRIAL]: (state: SessionState, action: ReduxAction) => {
    return { ...state, trial: action.payload };
  }
}

export const SessionReducer = (state: SessionState = defaultState, action: ReduxAction): SessionState => {
  const stateModifier = stateModifiers[action.type];
  if (!stateModifier) {
    return state;
  }

  return stateModifier(state, action);
}
