import React from 'react'
import { Text, View } from 'react-native'
import { NavigationScreenProp, NavigationState } from 'react-navigation'
import { connect } from 'react-redux'

interface Props {
  navigation: NavigationScreenProp<NavigationState>
}

class LoadingScreen extends React.Component<Props> {
  public componentDidMount() {
    const navigateTo = 'Home'
    const { navigation } = this.props
    navigation.navigate(navigateTo)
  }

  public componentDidUpdate() {}

  public render() {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }
}

export default LoadingScreen
