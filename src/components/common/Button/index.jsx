import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function Button({ children, className = '', disabled = false, onClick }) {
  return (
    <button
      className={`${classes.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default memo(Button)
