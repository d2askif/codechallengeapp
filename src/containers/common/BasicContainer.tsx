import * as React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexGrow: 1,
  },
})

interface Props {
  children: React.ReactNode
}

const BasicScreenContainer = ({ children }: Props) => (
  <SafeAreaView style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.innerContainer}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  </SafeAreaView>
)

export default BasicScreenContainer
