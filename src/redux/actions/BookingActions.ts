import { fetch } from '../../services/FetchDataService'
import * as actionType from './actionTypes'
const query = `query{
  getOpenTimeSlots{
    date
    bookingStartTime
    bookingEndTime
    timeSlots{
      startTime
      endTime
    }
  }
}`

export const getAvailableTimeSlots = () => async (dispatch: any) => {
  dispatch({
    type: actionType.APP_WORKING,
    payload: { working: true, loaded: false },
  })

  try {
    const { getOpenTimeSlots } = await fetch(query)
    dispatch({
      type: actionType.APP_WORKING,
      payload: { working: false, loaded: true },
    })
    if (getOpenTimeSlots.length > 0) {
      dispatch({
        type: actionType.BOOKING_AVAILABLE_TIME_SLOTS,
        payload: { slots: getOpenTimeSlots },
      })
    }
  } catch (e) {
    dispatch({
      type: actionType.APP_ERROR,
      payload: { error: true },
    })
  }
}
