import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from '../screens/LoadingScreen'

const PreLoadNavigation = createStackNavigator({
  PreLoad: LoadingScreen,
})
export default PreLoadNavigation
