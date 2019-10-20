import React, { Component, Children } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

interface Props {
  children: React.ReactNode
  style?: any
}

export default class CenterView extends Component<Props> {
  public render() {
    const { style, children } = this.props
    return <View style={[styles.container, style]}>{children}</View>
  }
}
