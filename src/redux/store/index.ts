import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from '../reducers'

const initialState = {
  app: {
    working: false,
    loaded: true,
    error: false,
  },
  homeReducer: {
    working: false,
  },
  bookedDateTime: {
    timeSlot: '',
    date: '',
  },
  booking: {
    slots: [],
  },
}

const middleware = [thunkMiddleware]
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () =>
  createStore(
    appReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
