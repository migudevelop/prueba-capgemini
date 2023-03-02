import { memo } from 'react'
import { Skeleton } from '@/components'
import classes from './styles.module.css'

function ProductCardSkeleton() {
  return (
    <div className={classes['productcard-skeleton_block']}>
      <Skeleton className={classes['productcard-skeleton_image']} />
      <Skeleton className={classes['productcard-skeleton_text']} />
      <Skeleton className={classes['productcard-skeleton_text']} />
      <Skeleton className={classes['productcard-skeleton_text']} />
    </div>
  )
}

export default memo(ProductCardSkeleton)
