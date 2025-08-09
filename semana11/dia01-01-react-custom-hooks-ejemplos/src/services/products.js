export const fetchProducts = () => {
  return fetch('https://dummyjson.com/products/?delay=1500')
      .then(response => response.json())
}