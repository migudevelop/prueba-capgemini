import { useState } from 'react'
import { useQuery } from 'react-query'
import { getProducts } from '@/services'

const filterProductsBySearch = ({ products = [], search = '' }) =>
  products?.filter(
    ({ brand, model }) =>
      brand.toUpperCase().includes(search.toUpperCase()) ||
      model.toUpperCase().includes(search.toUpperCase())
  )

export default function useProductListViewState() {
  const [productsToDisplay, setProductToDisplay] = useState()

  const {
    isLoading,
    isError,
    data: products
  } = useQuery('products', () => getProducts({}))

  const showLoader = isLoading && !isError && products == null

  const handleOnSearch = (search) => {
    const filteredProducts = filterProductsBySearch({ products, search })
    setProductToDisplay(filteredProducts)
  }

  return { productsToDisplay, showLoader, handleOnSearch }
}
