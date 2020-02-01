import { combineReducers } from 'redux'
import { SessionReducer } from './sessionReducer'
import { StoryReducer } from './storyReducer'

export default combineReducers({
  SessionReducer,
  StoryReducer
})
