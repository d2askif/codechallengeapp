import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PickDate from '../components/date/PickDate'
import GridView from '../components/list/GridView'
import TimeSlot from '../components/list/TimeSlotItem'
import BookTimeModal from '../components/view/Modal'
import BasicContainerWithLoading from '../containers/common/BasicContainerWithLoading'
import { ISlots } from '../types/bookingTypes'

interface Props {
  working: boolean
  loaded: boolean
  slots: ISlots[]
  dateSelected: string
  slotSelected: string
  showModal: boolean
  onDateSelected: (date: string) => void
  onSlotSelected: (slot: string) => void
  onModalClose: () => void
  onBookTimeSlot: () => void
}

interface State {
  dateSelected: string
  slotSelected: string
}

export default class BookingScreenContainer extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { dateSelected: '', slotSelected: '' }
  }
  public renderTimeSlots = () => {
    const { slots, slotSelected, onSlotSelected, dateSelected } = this.props

    if (!slots || slots.length === 0) {
      return []
    }
    const selectedSlot = slots.find(
      slot => slot.bookingStartTime === String(dateSelected)
    )
    if (!selectedSlot) {
      return []
    }
    const timeSlotsString = selectedSlot.timeSlots.map(tSlot => {
      const startTime = new Date(tSlot.startTime)
      const endTime = new Date(tSlot.endTime)

      const startTimeString =
        startTime.getHours() +
        ':' +
        String(startTime.getMinutes()).padStart(2, '0')
      const endTimeString =
        endTime.getHours() + ':' + String(endTime.getMinutes()).padStart(2, '0')

      return startTimeString + '-' + endTimeString
    })

    return timeSlotsString.map((slot: string, index: number) => (
      <TimeSlot
        onSlotSelected={() => onSlotSelected(slot)}
        key={index.toString()}
        slot={slot}
        selected={slot === slotSelected}
      />
    ))
  }

  public renderSelectedDate = () => {
    const { dateSelected } = this.props
    let displayText = 'Pick a date for interview'
    if (dateSelected !== '') {
      displayText = new Date(dateSelected).toDateString()
    }
    return <Text style={{ color: '#aeaeae' }}>{displayText}</Text>
  }
  public render() {
    const {
      working,
      loaded,
      slots,
      dateSelected,
      slotSelected,
      onDateSelected,
      showModal,
      onModalClose,
      onBookTimeSlot,
    } = this.props
    return (
      <BasicContainerWithLoading working={working} loaded={loaded}>
        <BookTimeModal
          showModal={showModal}
          date={dateSelected}
          time={slotSelected}
          onBookSlot={onBookTimeSlot}
          onModalClose={onModalClose}
        />
        <View style={{ alignContent: 'center' }}>
          <PickDate
            dates={slots.map(slot => slot.bookingStartTime)}
            selectedDate={dateSelected}
            onDateSelected={onDateSelected}
          />
        </View>
        <View
          style={{
            paddingVertical: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {this.renderSelectedDate()}
        </View>
        <GridView>{this.renderTimeSlots()}</GridView>
      </BasicContainerWithLoading>
    )
  }
}
