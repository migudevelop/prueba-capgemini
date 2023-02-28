import { useState } from 'react'

export default function useCartState() {
  const [cartProducts, setCartProducts] = useState([])

  const addProduct = (newProduct) => {
    setCartProducts((pev) => [...pev, newProduct])
  }

  return { cartProducts, addProduct }
}
