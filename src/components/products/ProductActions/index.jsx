import { memo } from 'react'
import PropTypes from 'prop-types'
import { Select, AddCartButton, ColorSelector, ColorButton } from '@/components'
import classes from './styles.module.css'
import useActionsState from './hooks/useActionsState'
useActionsState

function ProductActions({ productId }) {
  const {
    productColor,
    productStorage,
    haveEmptyValues,
    handleOnChangeColor,
    handleOnChangeStorage
  } = useActionsState()

  const objectToSend = {
    id: productId,
    color: productColor,
    storage: productStorage
  }

  const storage = [{ label: '1GB', value: 1 }]

  return (
    <section className={classes.actions}>
      <div className={classes['product-options']}>
        <ColorSelector onChange={handleOnChangeColor}>
          <ColorButton color="blue" value={1} />
          <ColorButton color="orange" value={2} />
          <ColorButton color="green" value={3} />
        </ColorSelector>
        <Select
          name="storage"
          className={classes['storage-selector']}
          options={storage}
          onChange={handleOnChangeStorage}
        />
      </div>
      <div className={classes['actions-buttons_block']}>
        <AddCartButton disabled={haveEmptyValues} elementToAdd={objectToSend} />
      </div>
    </section>
  )
}

ProductActions.propTypes = {
  productId: PropTypes.number.isRequired
}

export default memo(ProductActions)
