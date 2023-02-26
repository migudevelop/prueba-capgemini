import { memo } from 'react'
import classes from './styles.module.css'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/ui'

function Layout() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  )
}

export default memo(Layout)
