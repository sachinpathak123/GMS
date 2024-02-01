import React from 'react'
import LP from './LP/LP'
import Newstat from './Newstat'
import Solution from './Leadsolution/Solution'
import GMheading from './GMcard/GMheading'
import Compare from './Compare'

const page = () => {
  return (
    <>
    <div>
      <LP />
      <Solution/>
      <Newstat/>
      <GMheading />
      <Compare />
      <br />
      <br />
    </div>
      </>
  )
}

export default page
