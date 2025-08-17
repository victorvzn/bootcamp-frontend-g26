import { useEffect, useState } from 'react'
import Counter from './components/Counter'
import ProductList from './components/ProductList'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    <main>
      <section>
        <ProductList products={products} />

        {/* CARRITO DE COMPRAS AQUÍ */}
      </section>

      <Counter />
    </main>
  )
}

export default App