import { combineReducers } from 'redux'
import appReducer from './appReducer'
import bookedTimeSlotReducer from './bookedTimeSlotReducer'
import bookingReducer from './bookingReducer'
import homeReducer from './homeReducer'

const rootReducer = combineReducers({
  homeReducer,
  bookedDateTime: bookedTimeSlotReducer,
  app: appReducer,
  booking: bookingReducer,
})

export default rootReducer
