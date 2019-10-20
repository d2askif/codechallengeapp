import { createStackNavigator } from 'react-navigation-stack'
import BookedScreen from '../screens/BookedScreen'

const BookedNavigator = createStackNavigator(
  {
    Booked: {
      screen: BookedScreen,
    },
  },
  {
    initialRouteName: 'Booked',
  }
)

export default BookedNavigator
