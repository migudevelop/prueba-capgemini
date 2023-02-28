import { memo } from 'react'
import PropTypes from 'prop-types'
import classes from './styles.module.css'

function Badge({ children, text }) {
  return (
    <div className={classes.badge_block}>
      {children}
      <span className={classes.badge}>{text}</span>
    </div>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default memo(Badge)
