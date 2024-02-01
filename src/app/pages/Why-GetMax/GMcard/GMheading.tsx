"use client"
import React, { useState } from 'react'
import { url } from 'inspector'
import {motion} from 'framer-motion'

const GMheading = () => {
  const [change,setChange]=useState(false);
  return (
    <div className='my-28'>
      <div className='py-6'>
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
      <div className='grid grid-cols-4 place-content-center mx-24 px-24 py-12'>
        <motion.div id="first" className='py-36 px-12 border border-1 rounded-xl text-center' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}
          whileHover={{ scale:1.09
          }}
          >
        <motion.h2 className='text-center text-white'
          >STEP ONE</motion.h2>

        </motion.div>
        <motion.div id="second" className='py-36 px-0 border border-1 rounded-xl' style={{
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
        <motion.div id="third" className='py-36 px-0 border border-1 rounded-xl' style={{
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
        <motion.div id="fourth" className='py-40 px-3 border border-1 rounded-xl' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}
          whileHover={{ 
            scale:1.1
          }}
          transition={{type:'spring',stiffness:300}}
          >
        <h2 className='text-center text-white'>STEP ONE</h2>
        </motion.div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default GMheading
