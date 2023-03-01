import { memo } from 'react'
import { SearchBar, ProductList, Loader } from '@/components'
import classes from './styles.module.css'
import useProductListViewState from './hooks/useProductListViewState'

function ProductListView() {
  const { productsToDisplay, showLoader, handleOnSearch } =
    useProductListViewState()

  return (
    <>
      {showLoader && (
        <div className={classes['search-loader']}>
          <Loader />
        </div>
      )}
      {!showLoader && (
        <section className={classes.wrapper}>
          <div className={classes.searchbar}>
            <SearchBar onSearch={handleOnSearch} />
          </div>
          <ProductList products={productsToDisplay} />
        </section>
      )}
    </>
  )
}

export default memo(ProductListView)
