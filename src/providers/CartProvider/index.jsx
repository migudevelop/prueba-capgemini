import { createContext } from 'react'
import useCartState from './useCartState'

export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const cartState = useCartState()
  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  )
}
