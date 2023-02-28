import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES_LINKS } from '@/routes'
import { Badge, Breadcrumb } from '@/components'
import { useCart } from '@/hooks'
import classes from './styles.module.css'
import { FaShoppingCart } from 'react-icons/fa'

function Header() {
  const { cartProducts } = useCart()
  return (
    <header>
      <nav>
        <NavLink className={classes.title} to={ROUTES_LINKS.HOME}>
          Products Shop
        </NavLink>
        <Breadcrumb />
        <Badge text={cartProducts.length}>
          <FaShoppingCart className={classes.cart} />
        </Badge>
      </nav>
    </header>
  )
}

export default memo(Header)
