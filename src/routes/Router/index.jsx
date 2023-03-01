import { lazy, Suspense } from 'react'
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { FullPageLoader } from '@/components'
import ROUTES_LINKS from '@/routes/routesLinks.js'
const Layout = lazy(() => import('@/components/Layout'))
const ProductDetailsView = lazy(() => import('@/pages/ProductDetailsView'))
const ProductListView = lazy(() => import('@/pages/ProductListView'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES_LINKS.HOME} element={<Layout />}>
      <Route index element={<ProductListView />} />
      <Route
        path={ROUTES_LINKS.PRODUCT_DETAILS}
        element={<ProductDetailsView />}
        handle={{
          crumb: (data) => ({
            to: data.pathName,
            label: `Product ${data.params.productId}`
          })
        }}
      />
    </Route>
  )
)

export default function Router() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
