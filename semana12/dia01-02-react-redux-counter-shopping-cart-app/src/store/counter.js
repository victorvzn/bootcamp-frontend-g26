import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: 99,
  reducers: {
    increment: (state) => {
      return state + 1
    },
    decrement: (state) => state - 1,
    incrementBy: (state, action) => state + action.payload

    // payload es la data que pasamos como parámetro al llamar a una acción desde el componente
  }
})

// Exportando el estado inicial y a los reducers del slice
export default counterSlice.reducer

// Expotamos las acciones
export const { increment, decrement, incrementBy } = counterSlice.actions