import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Components/Counter/CounterSlice'

export default configureStore({
  reducer: {
    counter:counterReducer
  },
})