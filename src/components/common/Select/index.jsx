import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function Select({ className = '', name, placeHolder, onChange, options = [] }) {
  return (
    <select
      className={`${classes.select} ${className}`}
      placeholder={placeHolder}
      name={name}
      onChange={onChange}
    >
      {options.map(({ label = '', value = '' }) => (
        <option key={value} className={classes.option} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

export default memo(Select)
