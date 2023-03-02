import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function Skeleton({ className = '' }) {
  return <div className={`${classes.skeleton} ${className}`} />
}

Skeleton.propTypes = {
  className: PropTypes.string
}

export default memo(Skeleton)
