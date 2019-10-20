import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppSpinner } from '../../components/LoadingSpinner'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
})

const AppLoading = () => (
  <View style={styles.container}>
    <AppSpinner />
  </View>
)

export default AppLoading
