import React from 'react'
import Reviewcard from './Reviewcard'

const Reviews = () => {
  return (
    <div className='max-w-full bg-[#F1F2FF] flex flex-col'>
         <div className="text-center justify-items-center font-bold text-[30px] pt-8 tracking-tight">
            Real Stories from Satisfied Customers
         </div>
         
         <div className="text-center justify-items-center font-normal text-base pt-1">
            See how our landing page ui kit is making an impact.
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-20 mx-10 md:mx-64 py-20  justify-items-center">
            <Reviewcard imgsource="client1.png" name="Sarah K." who="UX Designer @Brello" data ="I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!" star ="Star Rating.png" />
            <Reviewcard imgsource="client1.png" name="Sarah K." who="person" data ="I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!" star ="4 Star Rating.png" />
            <Reviewcard imgsource="client1.png" name="Sarah K." who="person" data ="I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!" star ="Star Rating.png" />
         </div>
    </div>
  )
}

export default Reviews