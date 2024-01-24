"use client"
import React from 'react'
import { url } from 'inspector'
import { animated, useSpring } from 'react-spring'
import { start } from 'repl'
const GMheading = () => {
  const { scale } = useSpring({
    scale: 1,
  });

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
        <animated.div id="first" className='py-24 px-0 border border-1 rounded-xl text-center' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}
          onMouseEnter={() => {
            // Increase scale on hover
            scale.start({ scale: 1.1 });
          }}
          onMouseLeave={() => {
            // Return to original scale when not hovering
            scale.start({ scale: 1 });
          }}
          >
        <h2 className='text-center text-white'>STEP ONE</h2>
        </animated.div>
        <div id="second" className='py-24 px-0 border border-1 rounded-xl' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}>
        <h2 className='text-center text-white'>STEP ONE</h2>
        </div>
        <div id="third" className='py-24 px-0 border border-1 rounded-xl' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}>
        <h2 className='text-center text-white'>STEP ONE</h2>
        </div>
        <div id="fourth" className='py-24 px-0 border border-1 rounded-xl' style={{
          backgroundImage:'url("/first.png")',
          backgroundSize:'cover',
          width:'85%',
          height:'110%',
          }}>
        <h2 className='text-center text-white'>STEP ONE</h2>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default GMheading
