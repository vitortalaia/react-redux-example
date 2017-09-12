import * as types from '../actions/types'

export const tasks = (state = [], action) => {
  switch (action.type) {
    case types.INCREMENT_STATUS:
      return state.map(t => task(t, action))
    default:
      return state;
  }
}

export const task = (state = {}, action) => {
  switch (action.type) {
    case types.INCREMENT_STATUS:
      if (state.id !== action.taskID || state.status === 3) {
        return state
      }

      return { ...state, status: state.status + 1 }
    default:
      return state;
  }
}
