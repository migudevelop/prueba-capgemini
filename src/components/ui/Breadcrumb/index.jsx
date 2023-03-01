import { memo } from 'react'
import Proptypes from 'prop-types'
import { NavLink, useMatches } from 'react-router-dom'
import classes from './styles.module.css'
import { ROUTES_LINKS } from '@/routes'

function Breadcrumb({ className = '' }) {
  const matches = useMatches()
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) =>
      match.handle.crumb({ params: match.params, pathName: match.pathname })
    )

  return (
    <div className={`${classes.breadcrumb} ${className}`}>
      <NavLink className={classes.breadcrumb__item} to={ROUTES_LINKS.HOME}>
        Home
      </NavLink>
      {crumbs.map(({ to, label }, i) => (
        <NavLink key={i} className={classes.breadcrumb__item} to={to}>
          {label}
        </NavLink>
      ))}
    </div>
  )
}

Breadcrumb.prototype = {
  className: Proptypes.string
}

export default memo(Breadcrumb)
