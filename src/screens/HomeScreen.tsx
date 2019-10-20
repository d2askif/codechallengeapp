import React, { Component } from 'react'
import { NavigationScreenProp, NavigationState } from 'react-navigation'
import { connect } from 'react-redux'
import HomeScreenContainer from '../containers/HomeScreenContainer'
import { getAvailableTimeSlots } from '../redux/actions/BookingActions'

interface Props {
  navigation: NavigationScreenProp<NavigationState>
  onBook: () => void
}
export class HomeScreen extends Component<Props> {
  public async componentDidMount() {}
  public handleOnBook = () => {
    const { navigation, onBook } = this.props
    onBook()
    navigation.navigate('Booking')
  }
  public render() {
    return <HomeScreenContainer onBook={this.handleOnBook} />
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch: any) => ({
  onBook: () => {
    dispatch(getAvailableTimeSlots())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
