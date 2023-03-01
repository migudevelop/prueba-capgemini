import { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDetails, ProductImage, ProductActions } from '@/components'
import { getProductById } from '@/services'
import classes from './styles.module.css'

function ProductDetailsView() {
  const { productId = '' } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductById({ productId }).then((res) => setProduct(res))
  }, [productId])
  if (product == null) return null
  return (
    <section className={classes.wrapper}>
      <ProductImage product={product} />
      <section className={classes['product-details']}>
        <ProductDetails product={product} />
        <ProductActions productId={productId} />
      </section>
    </section>
  )
}

export default memo(ProductDetailsView)
