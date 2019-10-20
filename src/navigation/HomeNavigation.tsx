import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import BookingScreen from '../screens/BookingScreen'
import HomeScreen from '../screens/HomeScreen'

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Booking: {
      screen: BookingScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
)

export default HomeNavigator
