import { useEffect, useState } from "react"
import { fetchProducts } from "../services/products"

// TODO: Implementar el custom hooks que maneje los datos de listado de producto
export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetchProducts()
      .then(data => setProducts(data.products))
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    products,
    loading
  }
}