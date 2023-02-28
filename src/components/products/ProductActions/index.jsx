import { memo } from 'react'
import PropTypes from 'prop-types'
import { Select, AddCartButton } from '@/components'
import classes from './styles.module.css'

function ProductActions() {
  const colors = [
    { label: 'blue', value: 1 },
    { label: 'blue', value: 2 },
    { label: 'blue', value: 3 }
  ]
  const storage = [{ label: '1GB', value: 1 }]
  return (
    <section className={classes.actions}>
      <div className={classes['product-options']}>
        <Select options={colors} />
        <Select options={storage} />
      </div>
      <div>
        <AddCartButton />
      </div>
    </section>
  )
}

ProductActions.propTypes = {
  productId: PropTypes.number.isRequired
}

export default memo(ProductActions)
