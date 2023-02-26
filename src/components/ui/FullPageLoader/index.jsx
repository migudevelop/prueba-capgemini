import { memo } from 'react'
import classes from './styles.module.css'
import Loader from '../Loader'

export default memo(function FullPageLoader() {
  return (
    <div className={classes.fullPageLoader}>
      <Loader />
    </div>
  )
})
