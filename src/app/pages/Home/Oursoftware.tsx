import React from 'react'
import Softwarecard from '@/app/Components/Cards/Softwarecard'

const software = [
    {
      lnk : "/software1.jpg"
    },
    {
      lnk : "/software2.jpg"
    },
    {
      lnk : "/software3.jpg"
    },
    {
      lnk : "/software4.jpg"
    },
    {
      lnk : "/software5.jpg"
    },
    {
      lnk : "/software6.jpg"
    },
    {
      lnk : "/software7.jpg"
    },
    {
      lnk : "/software8.jpg"
    },
    {
      lnk : "/software9.jpg"
    },
    {
      lnk : "/software10.jpg"
    },
    {
      lnk : "/software11.jpg"
    },
    {
      lnk : "/software12.jpg"
    },
    {
      lnk : "/software13.jpg"
    },
    {lnk : "/software14.jpg"
    },
    {
      lnk : "/software15.jpg"
    },
    {
      lnk : "/software16.jpg"
    },
    {
      lnk : "/software17.jpg"
    },
    {
      lnk : "/software18.jpg"
    },
    {
      lnk : "/software19.jpg"
    }
  ]

const Oursoftware = () => {
  return (
    <>
        <div className=' bg-berserk '>
              <br/><br/>
              <p className="text-7xl font-extrabold text-custom-purple text-center font-sans from-slate-300 to-custom-purple md:text-center sm:text-center lg:text-center mb-12">Our Softwares</p>
              <div className='software p-8'>
                            {software.map(softwares => (
                                <Softwarecard 
                                    lnk={softwares.lnk}
                                />
                            ))
                            }
                        </div>
            </div>
    </>
  )
}

export default Oursoftware