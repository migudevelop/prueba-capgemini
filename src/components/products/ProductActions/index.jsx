import { memo } from 'react'
import PropTypes from 'prop-types'
import { AddCartButton } from '@/components'
import classes from './styles.module.css'

function ProductActions() {
  return (
    <section className={classes.actions}>
      <AddCartButton />
    </section>
  )
}

ProductActions.propTypes = {
  productId: PropTypes.number.isRequired
}

export default memo(ProductActions)
