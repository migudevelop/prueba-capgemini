import { memo } from 'react'
import { useParams } from 'react-router-dom'
import {
  ProductDetails,
  ProductImage,
  ProductActions,
  Loader
} from '@/components'
import { getProductById } from '@/services'
import { useQuery } from 'react-query'
import classes from './styles.module.css'

function ProductDetailsView() {
  const { productId = '' } = useParams()
  const {
    isLoading,
    isError,
    data: product
  } = useQuery(`product-${productId}`, () => getProductById({ productId }))

  const showLoader = isLoading && !isError && product == null

  return (
    <>
      {showLoader && (
        <div className={classes['search-loader']}>
          <Loader />
        </div>
      )}
      {!showLoader && (
        <section className={classes.wrapper}>
          <ProductImage product={product} />
          <section className={classes['product-details']}>
            <ProductDetails product={product} />
            <ProductActions productId={productId} />
          </section>
        </section>
      )}
    </>
  )
}

export default memo(ProductDetailsView)
