import {About, Contact, Hero, Services, Slider } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Services/>
      <About/>
      <Contact/>

    </div>
  )
}
