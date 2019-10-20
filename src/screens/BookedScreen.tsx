import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookedScreenContainer from '../containers/BookedScreenContainer'
import { IBookedDate } from '../types/bookingTypes'
interface Props {
  booked: IBookedDate
}
export class BookedScreen extends Component<Props> {
  public render() {
    const { booked } = this.props

    return <BookedScreenContainer booked={booked} />
  }
}

const mapStateToProps = (state: any) => ({
  booked: {
    date: state.bookedDateTime.date,
    time: state.bookedDateTime.timeSlot,
  },
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookedScreen)
