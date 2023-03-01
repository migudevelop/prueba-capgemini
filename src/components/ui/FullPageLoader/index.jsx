import { memo } from 'react'
import classes from './styles.module.css'
import Loader from '../Loader'

function FullPageLoader() {
  return (
    <div className={classes.fullPageLoader}>
      <Loader />
    </div>
  )
}

export default memo(FullPageLoader)
