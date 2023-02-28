import { memo } from 'react'
import { adapters } from '@/utils'
import { ProductDetails, ProductImage, ProductActions } from '@/components'
import products from '@/mocks/products.json'
import classes from './styles.module.css'

function ProductDetailsView() {
  const mapProduct = adapters.mappedProduct(products)
  return (
    <section className={classes.wrapper}>
      <ProductImage product={mapProduct[0]} />
      <section>
        <ProductDetails product={mapProduct[0]} />
        <ProductActions productId={mapProduct[0].id} />
      </section>
    </section>
  )
}

export default memo(ProductDetailsView)
