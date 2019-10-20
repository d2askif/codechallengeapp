import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import BookedNavigation from './BookedSlotsNavigation'
import HomeNavigation from './HomeNavigation'
const TabNavigator = createBottomTabNavigator({
  Home: HomeNavigation,
  Booked: BookedNavigation,
})

export default createAppContainer(TabNavigator)
