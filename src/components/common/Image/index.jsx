import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function Image({ src, alt = '' }) {
  return <img className={classes.image} src={src} alt={alt} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default memo(Image)
