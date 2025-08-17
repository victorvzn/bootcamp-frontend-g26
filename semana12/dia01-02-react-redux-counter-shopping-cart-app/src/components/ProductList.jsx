// TODO: Listar los productos en una grilla de 1 columna que contengan el title, thumbnail(imagen) y un boton con el texto "Add to cart"
// Usar el endpoint https://dummyjson.com/products

const ProductList = ({ products }) => {
  return (
    <section className="flex flex-col p-4">
      <h3 className="text-2xl mb-4">Product List</h3>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products && products.map(product => {
          return (
            <div
              key={product.id}
              className="bg-amber-100 p-2 min-w-14 rounded-lg flex flex-col items-center gap-2"
            >
              <img src={product.thumbnail} width={150} />
              <p className="text-center font-bold">{product.title}</p>
              <button
                className="bg-blue-400 p-2 min-w-36 rounded-lg cursor-pointer text-white font-bold"
              >
                Add to cart
              </button>
            </div>
          )
        })}
      </section>

      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </section>
  )
}

export default ProductList