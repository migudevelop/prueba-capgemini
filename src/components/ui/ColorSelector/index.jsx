import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function ColorSelector({ children, onChange }) {
  return (
    <form
      className={classes['color-selector']}
      name="colors-selector"
      onChange={onChange}
    >
      {children}
    </form>
  )
}

ColorSelector.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
}

export default memo(ColorSelector)
