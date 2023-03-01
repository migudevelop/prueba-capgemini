import { memo, useState } from 'react'
import { SearchBar, ProductList } from '@/components'
import { getProducts } from '@/services'
import { constants } from '@/utils'
import { useCookie } from '@/hooks'
import classes from './styles.module.css'

function ProductListView() {
  const [products, setProducts] = useState([])
  const { cookie, updateCookie } = useCookie(constants.COOKIE_KEY, [])

  const hanldeOnSearch = (search) => {
    updateCookie([...cookie])
    getProducts({ search }).then((res) => setProducts(res))
  }

  return (
    <section className={classes.wrapper}>
      <div className={classes.searchbar}>
        <SearchBar onSearch={hanldeOnSearch} />
      </div>
      <ProductList products={products} />
    </section>
  )
}

export default memo(ProductListView)
