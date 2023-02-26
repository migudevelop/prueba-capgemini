import { memo } from 'react'
import { SearchBar } from '@/components/ui'
import classes from './styles.module.css'

function ProductListView() {
  const hanldeOnSearch = () => {}

  return (
    <section className={classes.wrapper}>
      <div className={classes.searchbar}>
        <SearchBar onSearch={hanldeOnSearch} />
      </div>
    </section>
  )
}

export default memo(ProductListView)
