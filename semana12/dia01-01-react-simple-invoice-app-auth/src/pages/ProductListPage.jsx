// TODO: Renderizar los productos del endpoint https://dummyjson.com/products

import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"

const fetchProducts = async (accessToken) => {
  // console.log(accessToken)

  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }

  const response = await fetch('https://dummyjson.com/auth/products', options)

  return await response.json()
}

const ProductListPage = () => {
  const { user } = useAuth()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts(user?.accessToken)
      .then(data => {
        setProducts(data.products)
      })
  }, [])

  return (
    <main>
      <h2 className="text-xl font-bold">ProductsList</h2>

      <ul>
        {products && products.map(product => {
          return (
            <li key={product.id}>* {product.title}</li>
          )
        })}
      </ul>
    </main>
  )
}

export default ProductListPage