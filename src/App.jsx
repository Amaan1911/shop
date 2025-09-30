import { useState, useEffect, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import LoadingSpinner from './components/LoadingSpinner'

// Lazily load route components for code-splitting
const Home = lazy(() => import('./components/Home'))
const Necklaces = lazy(() => import('./components/Necklaces'))
const Earrings = lazy(() => import('./components/Earings'))
const Bangles = lazy(() => import('./components/Bangles'))
const Rings = lazy(() => import('./components/Rings'))
const BestSellers = lazy(() => import('./components/BestSellers'))
const Contact = lazy(() => import('./components/Contact'))
const ProductDetail = lazy(() => import('./components/ProductDetails'))
const Cart = lazy(() => import('./components/Cart'))

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Reset loading state on route change
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [location.pathname])

  if (isLoading && location.pathname === '/') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <LoadingSpinner size="xl" text="Welcome to A.K Jewellery" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <div className="pt-20">
        <AnimatePresence mode="wait">
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <LoadingSpinner size="lg" text="Loading..." />
            </div>
          }>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } />
              <Route path="/necklaces" element={
                <PageTransition>
                  <Necklaces />
                </PageTransition>
              } />
              <Route path="/earrings" element={
                <PageTransition>
                  <Earrings />
                </PageTransition>
              } />
              <Route path="/bangles" element={
                <PageTransition>
                  <Bangles />
                </PageTransition>
              } />
              <Route path="/rings" element={
                <PageTransition>
                  <Rings />
                </PageTransition>
              } />
              <Route path="/product/:category/:id" element={
                <PageTransition>
                  <ProductDetail />
                </PageTransition>
              } />
              <Route path="/best-sellers" element={
                <PageTransition>
                  <BestSellers />
                </PageTransition>
              } />
              <Route path="/contacts" element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              } />
              <Route path="/cart" element={
                <PageTransition>
                  <Cart />
                </PageTransition>
              } />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  )
}

export default App
