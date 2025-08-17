import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: 'cart',
  initialState: [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
  ],
  reducers: {
    addToCart: (state, action) => {
      console.log('Añadiendo al carrito', action)
    },
    removeToCart: (state, action) => {
      // TODO: remover el producto del carrito de compras
    },
    clearCart: (state) => {
      // TODO: Limpiar el carrito de compras
    }
  }
})

export default CartSlice.reducer // Exportando el estado inicial y a los reducers del slice

export const { addToCart, removeToCart, clearCart } = CartSlice.actions