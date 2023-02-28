import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function Image({ className = '', src, alt = '' }) {
  return <img className={`${classes.image} ${className}`} src={src} alt={alt} />
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default memo(Image)
