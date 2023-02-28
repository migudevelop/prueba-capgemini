import { memo } from 'react'
import PropTypes from 'prop-types'
import { formats } from '@/utils'
import classes from './styles.module.css'

function ProductDetails({ product = {} }) {
  const { brand, model, price, details } = product
  const { cpu, ram, os, screen_size, battery, cameras, dimensions, weight } =
    details
  const title = `${brand} - ${model}`
  return (
    <section className={classes.details}>
      <h1 className={classes.details_title}>{title}</h1>
      <h2 className={classes.details_price}>
        {formats.numberToCurrency({ number: price })}
      </h2>
      <ul className={classes.details_list}>
        <li>{`CPU: ${cpu}`}</li>
        <li>{`RAM: ${ram}`}</li>
        <li>{`OS: ${os}`}</li>
        <li>{`Screen Size: ${screen_size}`}</li>
        <li>{`Battery: ${battery}`}</li>
        <li>{`Cameras: ${cameras}`}</li>
        <li>{`Dimensions: ${dimensions}`}</li>
        <li>{`Weight: ${weight}`}</li>
      </ul>
    </section>
  )
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
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
}

export default memo(ProductDetails)
