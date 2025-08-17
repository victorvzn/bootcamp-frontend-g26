import { useCartStore } from "../store/cart"

const ShoppingCart = () => {
  const { cart } = useCartStore()

  const total = cart.reduce((acc, product) => {
    const qty = product.qty
    const price = product.price
    const subtotal = qty * price

    return acc + subtotal
  }, 0)

  const isCartEmpty = cart.length === 0

  const formatNumber = (number) => {
    const localeDefault = 'en-US'

    const options = {
      minimumFractionDigits: 2
    }

    return new Intl.NumberFormat(localeDefault, options).format(number)
  }

  if (isCartEmpty) {
    return (
      <section className="w-56 p-2">
        <h3 className="text-2xl mb-2">Shopping Cart</h3>

        <div className="mb-2 bg-slate-300 h-32 rounded-lg p-4 flex flex-col items-center">
          🛒
          <p className="text-lg text-center text-slate-500">Shopping cart empty</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-56 p-2">
      <h3 className="text-2xl mb-2">Shopping Cart</h3>

      <div className="mb-2">
        <button
          className="bg-violet-400 text-white px-3 py-2 rounded-lg cursor-pointer w-full"
        >
          Clean cart
        </button>
      </div>

      <ul
        className="flex flex-col gap-3"
      >
        {cart && cart.map(product => (
          <li
            className="flex flex-col gap-2 font-bold bg-slate-200 p-2 rounded-lg shadow"
            key={product.id}
          >
            <span>{product.title}</span>
            <span>S/ {product.price} (qty: {product.qty})</span>
            <button
              className="bg-red-400 text-white py-1 rounded-lg cursor-pointer w-full"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-4 font-bold bg-amber-100 px-4 py-2 flex justify-between rounded-lg">
        {/* <strong>TOTAL:</strong> <span>S/ {total.toFixed(2)}</span> */}
        <strong>TOTAL:</strong> <span>S/ {formatNumber(total)}</span>
      </div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </section>
  )
}

export default ShoppingCart