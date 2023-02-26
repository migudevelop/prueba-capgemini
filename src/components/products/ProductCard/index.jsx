import { memo } from 'react'
import PropTypes from 'prop-types'
import { Image } from '@/components'
import classes from './styles.module.css'

function ProductCard({ product = {} }) {
  const { brand, model, image, price } = product
  const title = `${brand} - ${model}`
  return (
    <div className={classes.card}>
      <Image src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{price}</h4>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
}

export default memo(ProductCard)
