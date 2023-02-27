import { adapters } from '@/utils'
import products from '@/mocks/products.json'

export const getAllProducts = async ({ search }) => {
  try {
    // const response = await fetch(`${constants.BASE_URL}/api/product`)
    // const products = await response.json()
    const filteredProducts = products?.filter(
      ({ brand, model }) =>
        brand.toUpperCase().includes(search.toUpperCase()) ||
        model.toUpperCase().includes(search.toUpperCase())
    )
    return adapters.mappedProduct(filteredProducts)
  } catch (e) {
    throw new Error('Error searching products')
  }
}
