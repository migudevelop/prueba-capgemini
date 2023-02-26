import { memo } from 'react'
import PropTypes from 'prop-types'
import { ProductCard } from '@/components'
import classes from './styles.module.css'

function ProductList({ products = [] }) {
  const hasProducts = products?.length > 0
  return hasProducts ? (
    <ul className={classes.productlist}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  ) : (
    <>
      <h1>No results</h1>
    </>
  )
}

ProductList.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default memo(ProductList)
