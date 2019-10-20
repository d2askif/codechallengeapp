/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Provider } from 'react-redux'

import appStore from './src/redux/store'
const store = appStore()
import React from 'react'
import AppNavigation from './src/navigation'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App
