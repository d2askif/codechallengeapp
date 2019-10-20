import * as actionType from '../actions/actionTypes'
const bookedTimeSlotReducer = (state: any, action: any) => {
  const newState = { ...state }
  switch (action.type) {
    case actionType.BOOKED_DATE_TIME: {
      return {
        ...newState,
        ...{ timeSlot: action.payload.time, date: action.payload.date },
      }
    }

    case 'Login Failed': {
      return newState
    }
    default:
      return newState
  }
}
export default bookedTimeSlotReducer
