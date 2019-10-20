import React from 'react'
import { ActivityIndicator } from 'react-native'

interface Props {
  color?: string
}

export const AppSpinner = ({ color }: Props) => (
  <ActivityIndicator size="large" color={color} />
)

AppSpinner.defaultProps = {
  color: 'green',
}
