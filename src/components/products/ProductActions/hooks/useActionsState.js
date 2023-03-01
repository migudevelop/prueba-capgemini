import { useState } from 'react'

export default function useActionsState() {
  const [productColor, setProductColor] = useState(null)
  const [productStorage, setProductStorage] = useState(null)

  const handleOnChangeColor = (e) => {
    setProductColor(e.target.value)
  }
  const handleOnChangeStorage = (e) => {
    setProductStorage(e.target.value)
  }

  return {
    productColor,
    productStorage,
    setProductColor,
    setProductStorage,
    handleOnChangeColor,
    handleOnChangeStorage
  }
}
