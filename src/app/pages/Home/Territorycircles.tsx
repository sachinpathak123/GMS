import React from 'react'
import Territory from './Territory'

const Territorycircles = () => {
  return (
    <>
       <br />
       <h1 className='text-7xl font-extrabold text-custom-purple text-center font-sans from-slate-300 to-custom-purple md:text-center sm:text-center lg:text-center'>OUR TERRITORY</h1> 
       <br />
       <br />
       <br />
    <div className='flex items-center justify-between mx-16'>
        
       <Territory imaga="/neurology.png" topic="Neurology" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Territory imaga="/neurology.png" topic="Neurology" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Territory imaga="/neurology.png" topic="Neurology" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Territory imaga="/neurology.png" topic="Neurology" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
      <br />
      <br />
      <div className='flex items-center justify-between mx-16 '>
      <Territory imaga="/neurology.png" topic="Neurology" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Territory imaga="/neurology.png" topic="Neurology" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Territory imaga="/neurology.png" topic="Neurology" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Territory imaga="/neurology.png" topic="Neurology" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </div>
    </>
  )
}

export default Territorycircles
