import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DateItem from '../list/DateAvailableItem'
import SelectList from '../list/SelectList'
const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
  },
})
interface Props {
  dates: string[]
  selectedDate: string
  onDateSelected: (date: string) => void
}
export default class PickDate extends Component<Props> {
  public renderItem = (item: string) => {
    const { selectedDate, onDateSelected } = this.props
    const date = new Date(item)
    return (
      <DateItem
        onDateSelected={() => onDateSelected(item)}
        selected={selectedDate === item}
        day={date.toLocaleDateString('en-US', { weekday: 'short' })}
        date={date.getDate().toString()}
      />
    )
  }
  public render() {
    const { dates } = this.props
    return (
      <View>
        <SelectList
          style={styles.list}
          data={dates}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
