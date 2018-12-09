import { combineReducers } from 'redux'
import councillorsReducer from './councillors'

const rootReducer = combineReducers({
  councillors: councillorsReducer
})

export default rootReducer
