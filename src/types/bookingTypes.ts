export interface ITimeSlot {
  startTime: string
  endTime: string
}
export interface ISlots {
  date: string
  bookingStartTime: string
  bookingEndTime: string
  timeSlots: ITimeSlot[]
}
export interface IBookedDate {
  date: string
  time: string
}
