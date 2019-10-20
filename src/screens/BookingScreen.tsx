import React, { Component } from 'react'
import { NavigationScreenProp, NavigationState } from 'react-navigation'
import { connect } from 'react-redux'
import BookingScreenContainer from '../containers/BookingScreenContainer'
import { bookTimeSlot } from '../redux/actions/bookedTimeSlot'
import { IBookedDate, ISlots } from '../types/bookingTypes'

interface Props {
  navigation: NavigationScreenProp<NavigationState>
  loaded: boolean
  working: boolean
  slots: ISlots[]
  bookedDate: string
  bookedTime: string
  onBookTimeDate: (booked: IBookedDate) => void
}

interface State {
  dateSelected: string
  slotSelected: string
  showModal: boolean
}

class BookingScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { dateSelected: '', slotSelected: '', showModal: false }
  }

  public componentDidMount() {
    const { bookedDate, bookedTime } = this.props
    this.setState({
      dateSelected: bookedDate,
      slotSelected: bookedTime,
    })
  }
  public selectDate = (date: string) => {
    this.setState(prevState => ({
      ...prevState,
      dateSelected: date,
      slotSelected: '',
    }))
  }

  public selectTimeSlot = (slot: string) => {
    this.setState(prevState => ({
      ...prevState,
      slotSelected: slot,
      showModal: true,
    }))
  }

  public onCloseModal = () => {
    this.setState(prevState => ({ ...prevState, showModal: false }))
  }

  public onBookTimeSlot = () => {
    const { onBookTimeDate, navigation } = this.props
    onBookTimeDate({
      date: this.state.dateSelected,
      time: this.state.slotSelected,
    })

    this.setState(prevState => ({ ...prevState, showModal: false }))
  }

  public render() {
    const { loaded, working, slots } = this.props
    return (
      <BookingScreenContainer
        slotSelected={this.state.slotSelected}
        dateSelected={this.state.dateSelected}
        showModal={this.state.showModal}
        onDateSelected={this.selectDate}
        onSlotSelected={this.selectTimeSlot}
        onBookTimeSlot={this.onBookTimeSlot}
        onModalClose={this.onCloseModal}
        slots={slots}
        working={working}
        loaded={loaded}
      />
    )
  }
}
const mapStateToProps = (state: any) => ({
  working: state.app.working,
  loaded: state.app.loaded,
  slots: state.booking.slots,
  bookedDate: state.bookedDateTime.date,
  bookedTime: state.bookedDateTime.timeSlot,
})
const mapDispatchToProps = (dispatch: any) => ({
  onBookTimeDate: (booked: IBookedDate) => {
    dispatch(bookTimeSlot(booked))
  },
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingScreen)
