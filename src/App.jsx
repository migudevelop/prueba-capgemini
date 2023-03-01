import { QueryClient, QueryClientProvider } from 'react-query'
import { CartProvider } from '@/providers'
import { Router } from '@/routes'
import './App.css'

const oneHour = 60 * (60 * 1000)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: oneHour,
      cacheTime: oneHour
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router />
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
