import { memo } from 'react'
import PropTypes from 'prop-types'
import { Image } from '@/components'
import classes from './styles.module.css'

function ProductImage({ product = {} }) {
  const { brand, model, image } = product
  const title = `${brand} - ${model}`
  return (
    <section className={classes.wrapper}>
      <Image src={image} alt={title} />
    </section>
  )
}

ProductImage.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
}

export default memo(ProductImage)
