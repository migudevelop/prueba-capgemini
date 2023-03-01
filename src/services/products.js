import { adapters, constants } from '@/utils'

export const getProducts = async () => {
  try {
    const response = await fetch(`${constants.BASE_URL}/products`)
    const products = await response.json()
    const mapProducts = adapters.mappedProducts(products)
    return mapProducts
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
