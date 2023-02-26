import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES_LINKS } from '@/routes'
import classes from './styles.module.css'
import { FaShoppingCart } from 'react-icons/fa'

function Header() {
  return (
    <header>
      <nav>
        <NavLink className={classes.title} to={ROUTES_LINKS.HOME}>
          Products Shop
        </NavLink>
        <FaShoppingCart className={classes.cart} />
      </nav>
    </header>
  )
}

export default memo(Header)
