import { adapters, constants } from '@/utils'

export const getProducts = async ({ search }) => {
  try {
    const searchQuery = search ? `?q=${search}` : ''
    const response = await fetch(`${constants.BASE_URL}/products${searchQuery}`)
    const products = await response.json()
    const mapProducts = adapters.mappedProducts(products)
    const filteredProducts = mapProducts?.filter(
      ({ brand, model }) =>
        brand.toUpperCase().includes(search.toUpperCase()) ||
        model.toUpperCase().includes(search.toUpperCase())
    )
    return filteredProducts
  } catch (e) {
    throw new Error('Error searching products')
  }
}

export const getProductById = async ({ productId }) => {
  try {
    const response = await fetch(`${constants.BASE_URL}/products/${productId}`)
    const products = await response.json()
    const mapProduct = adapters.mappedProduct(products)
    return mapProduct
  } catch (e) {
    throw new Error('Error searching product')
  }
}
