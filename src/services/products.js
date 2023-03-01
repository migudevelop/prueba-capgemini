import { adapters } from '@/utils'
import productsJSON from '@/mocks/products.json'

export const getAllProducts = async ({ search }) => {
  try {
    const mapProduct = adapters.mappedProduct(productsJSON.products)
    const filteredProducts = mapProduct?.filter(
      ({ brand, model }) =>
        brand.toUpperCase().includes(search.toUpperCase()) ||
        model.toUpperCase().includes(search.toUpperCase())
    )
    return filteredProducts
  } catch (e) {
    throw new Error('Error searching products')
  }
}
