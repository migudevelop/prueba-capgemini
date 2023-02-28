import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Image } from '@/components'
import { formats, routeHelpers } from '@/utils'
import classes from './styles.module.css'

function ProductCard({ product = {} }) {
  const navigate = useNavigate()
  const { id, brand, model, image, price } = product
  const title = `${brand} - ${model}`
  const handleOnClick = () => {
    console.log(routeHelpers.generateProductDetailsURL(id))
    navigate(routeHelpers.generateProductDetailsURL(id))
  }
  return (
    <div className={classes.card} onClick={handleOnClick}>
      <Image className={classes.card_image} src={image} alt={title} />
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
