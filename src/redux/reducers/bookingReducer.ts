import * as actionType from '../actions/actionTypes'

const bookingReducer = (state: any, action: any) => {
  const newState = { ...state }
  switch (action.type) {
    case actionType.BOOKING_AVAILABLE_TIME_SLOTS: {
      return { ...newState, ...action.payload }
    }

    case 'Login Failed': {
      return newState
    }
    default:
      return newState
  }
}
export default bookingReducer
