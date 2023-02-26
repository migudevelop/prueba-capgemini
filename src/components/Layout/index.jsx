import { memo } from 'react'
import classes from './styles.module.css'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  )
}

export default memo(Layout)
