import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import {LeftLine, RightLine} from '../components/design/design/Pricing'

function Pricing() {
  return (
    <Section className='overflow-hidden' id='pricing'>
      <div className='container relative z-2'>
         <div className='hidden relative justify-center
         lg:flex mb-[6.5rem]'>
          <img src={smallSphere} className='relative z-1'
          width={255} height={255} alt="sphere" />
          <div className='absolute top-1/2 left-1/2 w-[60rem]
          -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
           <img src={stars} alt="stars" className='w-full'
           width={950} height={400} />
          </div>
         </div>
         
         <Heading 
         title='Pay Once, Use Forever.'
         tag='Get started with myAI'/>

      <div className=''>
         <PricingList/>
         <LeftLine/>
         <RightLine/>
      </div>
<div className='flex justify-center mt-10'>
<a className='text-ss font-code font-bold tracking-wider uppercase
border-b ' href='/pricing'>See full details</a>
</div>
      </div>
    </Section>
  )
}

export default Pricing
