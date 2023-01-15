import ContactSection from '@/components/ContactSection'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const Home = () => {
  return (
    <>
      <div >
        <Header />
        <HeroSection />
        <ContactSection />
        <div className=' h-screen'></div>
      </div>
    </>
  )
}

export default Home