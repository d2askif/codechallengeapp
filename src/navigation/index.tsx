import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import PreLoadNavigation from './PreLoadNavigation'
import TabNavigation from './TabNavigation'

const AppNavigator = createSwitchNavigator(
  {
    Home: TabNavigation,
    PreLoad: PreLoadNavigation,
  },
  {
    initialRouteName: 'PreLoad',
  }
)

export default createAppContainer(AppNavigator)
