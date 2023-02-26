import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { FullPageLoader } from '@/components'
import ROUTES_LINKS from '@/routes/routesLinks.js'
const Layout = lazy(() => import('@/components/Layout'))
const ProductDetailsView = lazy(() => import('@/pages/ProductDetailsView'))
const ProductListView = lazy(() => import('@/pages/ProductListView'))

export default function Router() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Routes>
        <Route path={ROUTES_LINKS.HOME} element={<Layout />}>
          <Route index element={<ProductListView />} />
          <Route
            path={ROUTES_LINKS.PRODUCT_DETAILS}
            element={<ProductDetailsView />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}
