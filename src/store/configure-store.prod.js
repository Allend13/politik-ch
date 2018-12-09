import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import rootReducer from '../redux-modules'

const middleware = applyMiddleware(thunkMiddleware, promiseMiddleware())

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, middleware)
}
