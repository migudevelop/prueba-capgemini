import { memo } from 'react'
import { SearchBar, ProductList, ProductCardSkeleton } from '@/components'
import classes from './styles.module.css'
import useProductListViewState from './hooks/useProductListViewState'

function ProductListView() {
  const { productsToDisplay, showLoader, handleOnSearch } =
    useProductListViewState()

  return (
    <>
      {showLoader && (
        <ul className={classes.skeletonlist}>
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <ProductCardSkeleton />
            </li>
          ))}
        </ul>
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
