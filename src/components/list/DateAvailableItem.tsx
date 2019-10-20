import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    color: '#cecede',
    fontSize: 18,
  },
  day: {
    color: '#cecede',
    fontSize: 18,
  },
  selected: {
    height: 30,
    width: 30,
    borderRadius: 15,
    color: 'white',
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    lineHeight: 15,
    textAlign: 'center',
  },
})
interface Props {
  day: string
  date: string
  selected?: boolean
  onDateSelected: () => void
}
export default class DateAvailableItem extends Component<Props> {
  private static defaultProps = {
    selected: false,
  }
  public render() {
    const { selected, day, date, onDateSelected } = this.props
    const dateStyle = selected
      ? {
          ...styles.date,
          ...{ color: 'white' },
        }
      : styles.date
    const dayStyle = selected
      ? { ...styles.date, ...{ color: 'tomato' } }
      : styles.date
    return (
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={onDateSelected}
      >
        <Text style={[dayStyle]}>{day}</Text>
        <View style={selected ? styles.selected : {}}>
          <Text style={[dateStyle]}>{date}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
