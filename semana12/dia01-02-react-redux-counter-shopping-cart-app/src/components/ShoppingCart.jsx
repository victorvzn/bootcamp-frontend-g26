import { useSelector } from "react-redux"

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

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
            <span>S/ 0.00 (qty: 1)</span>
            <button
              className="bg-red-400 text-white py-1 rounded-lg cursor-pointer w-full"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-4 font-bold bg-amber-100 px-4 py-2 flex justify-between rounded-lg">
        <strong>TOTAL:</strong> <span>S/ 0.00</span>
      </div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </section>
  )
}

export default ShoppingCart