import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from '@/providers'
import { Router } from '@/routes'
import './App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
