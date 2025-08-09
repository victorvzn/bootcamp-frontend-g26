import { Counter } from "./components/Counter"
import ProductList from "./components/ProductList"

const App = () => {
  return (
    <>
      <h1 className="text-center text-3xl mb-4">Custom hooks</h1>

      <Counter />

      <ProductList />
    </>
  )
}

export default App