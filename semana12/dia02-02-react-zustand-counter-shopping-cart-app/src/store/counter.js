import { create } from 'zustand'

export const useCounterStore = create(
  (set, get) => ({
    // Estado inicial
    count: 999,
    // Actions
    increment: () => {
      console.log('incrementando++')
      set(state => {
        return {
          count: state.count + 1
        }
      })
    },
    decrement: () => {
      set(state => ({ count: state.count - 1 }))
    },
    // TODO: Implementar la función incrementByValue y usarla en el componente <Counter />
    incrementByValue: (value) => {
      set(state => ({ count: state.count + value }))
    }
  })
)