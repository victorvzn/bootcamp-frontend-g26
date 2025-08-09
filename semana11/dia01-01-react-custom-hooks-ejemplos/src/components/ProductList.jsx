import { useProducts } from "../hooks/useProducts"

const ProductList = () => {
  const { products, loading } = useProducts()

  if (loading) {
    return (
      <div className="font-medium text-center mt-4">
        Loading...
      </div>
    )
  }

  return (
    <div className="border p-2 mt-2">
      <h1 className="text-2xl">Product list</h1>

      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <h5>{product.id} - {product.title}</h5>
              <p>{product.description}</p>
              <img src={product.thumbnail} width={100} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList