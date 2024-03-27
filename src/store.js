
import { configureStore } from '@reduxjs/toolkit'
import placeReducer from './slices/place.slice'

export default configureStore({
  reducer: {
    places: placeReducer
  },
})