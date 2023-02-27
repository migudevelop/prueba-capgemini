import { memo, useState } from 'react'
import { SearchBar, ProductList } from '@/components'
import { getAllProducts } from '@/services'
import classes from './styles.module.css'

function ProductListView() {
  const [products, setProducts] = useState([])
  const hanldeOnSearch = (search) => {
    getAllProducts({ search }).then((res) => setProducts(res))
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
