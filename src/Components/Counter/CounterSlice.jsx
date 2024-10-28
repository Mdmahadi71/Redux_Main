import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('count')) ? JSON.parse(localStorage.getItem('count')) : 0,
  },
  reducers: {
    incremented: state => {
      
      let incre = state.value += 1
      localStorage.setItem('count', JSON.stringify(incre))
    },
    decremented: state => {
      let decre = state.value
      if(decre > 0){
        state.value -= 1
        localStorage.setItem('count', JSON.stringify(decre))
      }
    }
  }
})

export const { incremented, decremented } = CounterSlice.actions
export default CounterSlice.reducer

