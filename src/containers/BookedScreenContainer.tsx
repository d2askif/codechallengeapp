import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CenterView from '../components/view/CenterView'
import { IBookedDate } from '../types/bookingTypes'

interface Props {
  booked: IBookedDate
}
export default class BookedScreenContainer extends Component<Props> {
  public renderBookedDateTime = () => {
    const { booked } = this.props

    if (booked.time === '' || booked.time === '') {
      return (
        <View>
          <Text>No booked interview</Text>
        </View>
      )
    }
    return (
      <View>
        <Text>Booked Interview</Text>
        <Text>{`${'Date:'}` + new Date(booked.date).toDateString()}</Text>
        <Text>{`${'Time:'}` + booked.time}</Text>
      </View>
    )
  }
  public render() {
    return <CenterView>{this.renderBookedDateTime()}</CenterView>
  }
}
