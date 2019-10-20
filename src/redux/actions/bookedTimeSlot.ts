import { IBookedDate } from '../../types/bookingTypes'
import * as actionType from './actionTypes'
export const bookTimeSlot = (bookedDate: IBookedDate) => (dispatch: any) => {
  dispatch({
    type: actionType.BOOKED_DATE_TIME,
    payload: bookedDate,
  })
}
