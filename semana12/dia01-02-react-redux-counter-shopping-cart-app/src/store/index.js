// PASO-01: Creamos un store con los reducers que necesitamos

import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})