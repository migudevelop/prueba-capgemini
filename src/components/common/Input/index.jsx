import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function Input({
  type = 'text',
  name = '',
  placeholder = '',
  className = '',
  onClick,
  onChange,
  onKeyDown,
  disabled = false,
  value
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={`${classes.input} ${className}`}
      onClick={onClick}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
      value={value}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string
}

export default memo(Input)
