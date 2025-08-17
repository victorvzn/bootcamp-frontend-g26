import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: 'cart',
  initialState: [
    // { id: 1, title: 'Product 1' },
    // { id: 2, title: 'Product 2' },
    // { id: 3, title: 'Product 3' },
  ],
  reducers: {
    addToCart: (state, action) => {
      console.log('Añadiendo al carrito', action)
      const newProduct = action.payload

      const productInCartIndex = state.findIndex(
        product => product.id === newProduct.id
      )

      // Validar cuando el producto existe en el carrito de compras
      if (productInCartIndex >= 0) {
        return state.map(product => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              qty: product.qty + 1
            }
          }

          return product
        })
      }

      // Entra aquí cuando el producto es nuevo en el carrito de compras
      return [
        ...state,
        {
          ...newProduct,
          qty: 1
        }
      ]
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