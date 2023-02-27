import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './styles.module.css'

function Breadcrumb() {
  return (
    <div className={classes.breadcrumb}>
      <NavLink className={classes.breadcrumb__item}>Home</NavLink>
      <NavLink className={classes.breadcrumb__item}>Product</NavLink>
    </div>
  )
}

export default memo(Breadcrumb)
