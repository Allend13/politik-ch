import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

import rootReducer from '../redux-modules'

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
})

const middleware = applyMiddleware(thunkMiddleware, promiseMiddleware(), loggerMiddleware)

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, middleware)
}
