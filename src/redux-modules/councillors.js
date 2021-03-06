import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'

import mockData from '../mock-data/сouncillors'

const FETCH = 'app/FETCH'
const REQUEST = `${FETCH}_${PENDING}`
const SUCCESS = `${FETCH}_${FULFILLED}`
const ERROR = `${FETCH}_${REJECTED}`

const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  errors: []
}

function reducer(state = initialState, action = {}) {
  const { type, payload } = action

  switch (type) {
    case REQUEST:
      return { ...state, fetching: true }
    case SUCCESS:
      return { data: payload, fetching: false, fetched: true }
    case ERROR:
      return { ...initialState, errors: payload }
    default:
      return state
  }
}

export function fetchCouncillors() {
  return dispatch =>
    dispatch({
      type: FETCH,
      async payload() {
        const data = await new Promise(resolve => {
          setTimeout(() => resolve(mockData), 500)
        })

        return data
      }
    })
}

export default reducer
