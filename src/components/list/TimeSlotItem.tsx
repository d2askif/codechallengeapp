import React, { PureComponent } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    width: 110,
    paddingVertical: 12,
    backgroundColor: '#ededed',
  },
  text: {
    color: '#00adad',
  },
})

interface Props {
  slot: string
  selected?: boolean
  onSlotSelected: () => void
}

export default class TimeSlotItem extends PureComponent<Props> {
  public static default = {
    selected: false,
  }
  public render() {
    const { slot, selected, onSlotSelected } = this.props

    const selectedStyle = selected
      ? { ...styles.container, ...{ backgroundColor: 'tomato' } }
      : styles.container
    const textStyle = selected
      ? { ...styles.text, ...{ color: 'white' } }
      : styles.text
    return (
      <TouchableOpacity
        style={[styles.container, selectedStyle]}
        onPress={onSlotSelected}
      >
        <Text style={[textStyle]}>{slot} </Text>
      </TouchableOpacity>
    )
  }
}
