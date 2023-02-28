import { memo } from 'react'
import Proptypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import classes from './styles.module.css'
import { ROUTES_LINKS } from '@/routes'

function Breadcrumb({ className = '', breadcrumbsItems = [] }) {
  return (
    <div className={`${classes.breadcrumb} ${className}`}>
      <NavLink className={classes.breadcrumb__item} to={ROUTES_LINKS.HOME}>
        Home
      </NavLink>
      {breadcrumbsItems.map(({ to, label }, i) => (
        <NavLink key={i} className={classes.breadcrumb__item} to={to}>
          {label}
        </NavLink>
      ))}
    </div>
  )
}

Breadcrumb.prototype = {
  className: Proptypes.string,
  breadcrumbsItems: Proptypes.shape({
    to: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired
  }).isRequired
}

export default memo(Breadcrumb)
