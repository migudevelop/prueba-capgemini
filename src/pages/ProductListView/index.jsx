import { memo } from 'react'
import { SearchBar, ProductList } from '@/components'
import classes from './styles.module.css'

function ProductListView() {
  const hanldeOnSearch = () => {}

  return (
    <section className={classes.wrapper}>
      <div className={classes.searchbar}>
        <SearchBar onSearch={hanldeOnSearch} />
      </div>
      <ProductList products={[]} />
    </section>
  )
}

export default memo(ProductListView)
