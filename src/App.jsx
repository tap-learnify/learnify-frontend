import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ReviewFrame from './Components/ReviewSection/ReviewFrame'
import Certification from './Components/CertificationSection/Certification'
import Features from './Components/FeatureSection/Features'
import CollectionVideo from './Components/CollectionVideoSection/CollectionVideo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection />
      <ReviewFrame/>
      <Features />
      <Certification />
      <CollectionVideo />
      <Outlet />
      
    </>
  )
}

export default App
