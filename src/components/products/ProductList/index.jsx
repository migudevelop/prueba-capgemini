import { memo } from 'react'
import PropTypes from 'prop-types'
import { ProductCard } from '@/components'
import classes from './styles.module.css'
import { FaSearch } from 'react-icons/fa'

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
    <div className={classes['not-found_block']}>
      <FaSearch />
      <h1>No results</h1>
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      details: PropTypes.shape({
        cpu: PropTypes.string.isRequired,
        ram: PropTypes.number.isRequired,
        os: PropTypes.string.isRequired,
        screen_size: PropTypes.number.isRequired,
        battery: PropTypes.number.isRequired,
        cameras: PropTypes.number.isRequired,
        dimensions: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired
      })
    })
  )
}

export default memo(ProductList)
