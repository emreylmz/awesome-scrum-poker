import { combineReducers } from 'redux'
import { SprintReducer } from './sprintReducer'
import { StoryReducer } from './storyReducer'

const rootReducer = combineReducers({
  SprintReducer,
  StoryReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
