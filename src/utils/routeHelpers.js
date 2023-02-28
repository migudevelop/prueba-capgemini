import { ROUTES_LINKS } from '@/routes'
export const generateProductDetailsURL = (productId = '') =>
  ROUTES_LINKS.PRODUCT_DETAILS.replace(':productId', productId)
