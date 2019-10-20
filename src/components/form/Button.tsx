import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#008CBA',
  },
  title: {
    color: 'white',
  },
})

interface Props {
  title: string
  textStyle?: any
  onPress: () => void
  style?: any
}
export default class Button extends Component<Props> {
  public render() {
    const { title, onPress, style, textStyle } = this.props
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.title, textStyle]}> {title} </Text>
      </TouchableOpacity>
    )
  }
}
