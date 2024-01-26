"use client"
import React from 'react'
import { url } from 'inspector'
import {motion} from 'framer-motion'

const GMheading = () => {
  return (
    <div className=''>
      <div>
      <h6 className='space-x-2 font-sans font-semibold text-center tracking-[0.3rem] text-light-pUrple'>
        PROCESS AND PROCEDURE
      </h6>
      </div>
      <div>
        <p className='text-center font-extrabold text-3xl'>
          WHICH PROMISE <span className='text-custom-purple'>DESIRED</span> RESULT
        </p>
      </div>
     <br /><br />
      <div className='grid grid-cols-4 place-content-center mx-24 px-24'>
        <motion.div id="first" className='py-24 px-0 border border-1 rounded-xl text-center' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}
          whileHover={{ scale:1.09
          }}
          >
        <h2 className='text-center text-white'>STEP ONE</h2>
        </motion.div>
        <motion.div id="second" className='py-24 px-0 border border-1 rounded-xl' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}
          whileHover={{ scale:1.09
          }}
          transition={{type:'spring',stiffness:300}}>
        <h2 className='text-center text-white'>STEP ONE</h2>
        </motion.div>
        <motion.div id="third" className='py-24 px-0 border border-1 rounded-xl' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}
          whileHover={{ scale:1.09
          }}
          transition={{type:'spring',stiffness:300}}>
        <h2 className='text-center text-white'>STEP ONE</h2>
        </motion.div>
        <motion.div id="fourth" className='py-24 px-0 border border-1 rounded-xl' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}
          whileHover={{ scale:1.09
          }}
          transition={{type:'spring',stiffness:300}}>
        <h2 className='text-center text-white'>STEP ONE</h2>
        </motion.div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default GMheading