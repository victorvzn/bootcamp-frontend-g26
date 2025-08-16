import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1
    },
    decrement: (state) => state - 1,
  }
})

// Exportando el estado inicial y a los reducers del slice
export default counterSlice.reducer

// Expotamos las acciones
export const { increment, decrement } = counterSlice.actions