import { memo } from 'react'
import classes from './styles.module.css'

function Badge({ children, text }) {
  return (
    <div className={classes.badge_block}>
      {children}
      <span className={classes.badge}>{text}</span>
    </div>
  )
}

export default memo(Badge)
