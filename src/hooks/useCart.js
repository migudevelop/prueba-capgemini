import { useContext } from 'react'
import { CartContext } from '@/providers'

export default function useCart() {
  return useContext(CartContext)
}
