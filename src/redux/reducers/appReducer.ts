import * as actionType from '../actions/actionTypes'
const appReducer = (state: any, action: any) => {
  const newState = { ...state }
  switch (action.type) {
    case actionType.APP_WORKING: {
      return { ...newState, ...action.payload }
    }

    case actionType.APP_ERROR: {
      return { ...newState, ...action.payload }
    }
    default:
      return newState
  }
}
export default appReducer
