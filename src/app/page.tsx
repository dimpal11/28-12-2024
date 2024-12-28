import React from 'react'
import Navbar from '@/components/Navbar'
import Herosection from '@/components/Herosection'
import Feacture from '@/components/Feacture'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'
function page() {
  return (
    <>
      <Navbar/>
      <Herosection/>
      {/* <Herosection/> */}
      <Feacture/>
      <Testimonial/>
      <Footer/>
      
    </>
  )
}

export default page
