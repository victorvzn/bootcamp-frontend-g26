import Counter from './components/Counter'
import ProductList from './components/ProductList'

const App = () => {
  return (
    <main>
      <section>
        <ProductList />

        {/* CARRITO DE COMPRAS AQUÍ */}
      </section>

      <Counter />
    </main>
  )
}

export default App