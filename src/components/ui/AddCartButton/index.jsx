import { memo } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@/components'
import { useCart } from '@/hooks'
import classes from './styles.module.css'
import { FaCartPlus } from 'react-icons/fa'

function AddCartButton({ disabled, elementToAdd = {} }) {
  const { addProduct } = useCart()
  const handleOnClick = () => {
    if (Object.keys(elementToAdd).length > 0) {
      addProduct(elementToAdd)
    }
  }
  return (
    <Button
      disabled={disabled}
      className={classes['add-cart-button']}
      onClick={handleOnClick}
    >
      <FaCartPlus />
      <span>Add to Cart</span>
    </Button>
  )
}

AddCartButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  elementToAdd: PropTypes.object.isRequired
}

export default memo(AddCartButton)
