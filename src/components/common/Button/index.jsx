import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function Button({ children, className = '', onClick }) {
  return (
    <button className={`${classes.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default memo(Button)
