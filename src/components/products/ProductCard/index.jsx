import { memo } from 'react'
import PropTypes from 'prop-types'
import { Image } from '@/components'
import { formats } from '@/utils'
import classes from './styles.module.css'

function ProductCard({ product = {} }) {
  const { brand, model, image, price } = product
  const title = `${brand} - ${model}`
  return (
    <div className={classes.card}>
      <Image src={image} alt={title} />
      <div className={classes.info}>
        <h1>{model}</h1>
        <p>{brand}</p>
        <span className={classes.price}>
          {formats.numberToCurrency({ number: price })}
        </span>
      </div>
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
