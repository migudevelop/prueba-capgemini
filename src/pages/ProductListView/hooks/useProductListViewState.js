import { useState } from 'react'
import { useQuery } from 'react-query'
import { getProducts } from '@/services'
import { constants } from '@/utils'
import { useCookie } from '@/hooks'

const filterProductsBySearch = ({ products = [], search = '' }) =>
  products?.filter(
    ({ brand, model }) =>
      brand.toUpperCase().includes(search.toUpperCase()) ||
      model.toUpperCase().includes(search.toUpperCase())
  )

export default function useProductListViewState() {
  const [productsToDisplay, setProductToDisplay] = useState()
  const { cookie, updateCookie } = useCookie(constants.COOKIE_KEY, [])
  const {
    isLoading,
    isError,
    data: products
  } = useQuery('products', () => getProducts({}))

  const showLoader = isLoading && !isError && products == null

  const handleOnSearch = (search) => {
    updateCookie([...cookie])
    const filteredProducts = filterProductsBySearch({ products, search })
    setProductToDisplay(filteredProducts)
  }

  return { productsToDisplay, showLoader, handleOnSearch }
}
