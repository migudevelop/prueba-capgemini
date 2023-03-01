import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function ColorButton({ color = 'blue', value }) {
  return (
    <div className={classes['color-button']}>
      <input type="radio" name="color" id={color} value={value} />
      <label htmlFor={color} className={classes.color_item}>
        <span className={classes[color]}></span>
      </label>
    </div>
  )
}

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default memo(ColorButton)
