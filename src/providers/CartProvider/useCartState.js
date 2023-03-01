import { useEffect, useState } from 'react'
import { constants } from '@/utils'
import { useCookie } from '@/hooks'

export default function useCartState() {
  const { updateCookie } = useCookie(constants.COOKIE_KEY, [])
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    updateCookie([...cartProducts])
  }, [cartProducts])

  const addProduct = (newProduct) => {
    setCartProducts((pev) => [...pev, newProduct])
  }

  return { cartProducts, addProduct }
}
