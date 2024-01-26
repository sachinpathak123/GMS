import React from 'react'
import LP from './LP/LP'
import Newstat from './Newstat'
import House from './house/House'
import Solution from './Leadsolution/Solution'
import GMheading from './GMcard/GMheading'
import Compare from './compare/Compare'

const page = () => {
  return (
    <>
    <div>
      
      <LP />
      <House />
      <Solution/>
      <Newstat/>
      <GMheading />
    </div>
      </>
  )
}

export default page
