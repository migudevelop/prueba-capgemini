import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { adapters } from '@/utils'
import { ProductDetails, ProductImage, ProductActions } from '@/components'
import classes from './styles.module.css'
import productsJSON from '@/mocks/dummyProducts.json'

function ProductDetailsView() {
  const { productId = '' } = useParams()
  const mapProduct = adapters
    .mappedProduct(
      productsJSON.products.filter(({ id }) => `${id}` === `${productId}`)
    )
    ?.at(0)
  return (
    <section className={classes.wrapper}>
      <ProductImage product={mapProduct} />
      <section className={classes['product-details']}>
        <ProductDetails product={mapProduct} />
        <ProductActions productId={productId} />
      </section>
    </section>
  )
}

export default memo(ProductDetailsView)
