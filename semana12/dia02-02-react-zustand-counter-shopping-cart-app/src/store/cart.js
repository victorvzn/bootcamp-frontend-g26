import { create } from 'zustand'

export const useCartStore = create(
  (set, get) => ({
    // Estado INICIAL
    cart: [
      // { id: 1, title: 'Product hola1', qty: 1},
      // { id: 2, title: 'Product adios2', qty: 91},
    ],

    // Actions
    addToCart: (newProduct) => {
      console.log('agregando nuevo producto al carrito', newProduct)

      // ¿Existe el nuevo producto en el carrito de compras?
      const currentCartState = get().cart

      const productInCartIndex = currentCartState.findIndex(
        product => product.id === newProduct.id
      )

      if (productInCartIndex >= 0) {
        const newCartState = currentCartState.map(product => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              qty: product.qty + 1
            }
          }

          return product
        })

        set(() => ({ cart: newCartState }))

        return
      }

      // Esto se ejecuta cuando el producto es nuevo en el carrito de compras
      set(state => ({
        cart: [...state.cart, { ...newProduct, qty: 1 }]
      }))
    },
    removeFromCart: (productId) => {
      // TODO: Remover el producto usando el id que tenemos en el parámetro de la función
    },
    clearCart: () => {
      // DONE: Limpiar el carrito de compras
      set(() => ({ cart: [] }))
    }
  })
)