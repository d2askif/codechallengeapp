import * as React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import LoadingContainer from './AppLoadingContainer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

interface Props {
  loaded: boolean
  working: boolean
  children: React.ReactNode
  error?: string
}

class BasicRefreshContainer extends React.Component<Props> {
  public componentDidMount = () => {}

  public renderLoading = () => {
    const { loaded, error } = this.props

    if (loaded) {
      return null
    }

    if (error) {
      return (
        <View>
          <Text>Error</Text>
        </View>
      )
    }

    return <LoadingContainer />
  }

  public renderContent = () => {
    const { loaded, children } = this.props
    if (!loaded) {
      return null
    }

    return children
  }

  public render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderLoading()}
        {this.renderContent()}
      </SafeAreaView>
    )
  }
}

export default BasicRefreshContainer
