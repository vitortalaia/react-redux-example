import * as types from './types'

export const incrementStatus = (id) => {
  return {
    type: types.INCREMENT_STATUS,
    taskID: id
  }
}
