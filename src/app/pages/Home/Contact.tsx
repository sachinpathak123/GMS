import React, { useState } from 'react'
import Form from './Form';
import { animated, useSpring } from 'react-spring';

const Contact = () => {
    const[cLick,setcLick]=useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const fade = useSpring({
        opacity: cLick ? 1 : 0,
        from: { opacity: cLick ? 0 : 1 },
        onClick: () => {
          setcLick((prev) => !prev);
        },
        config: { duration: 200 },
    })
  return (
    <animated.div className='bg-custom-purple text-center'>

      <input type="text" placeholder='Enter your email address' onClick={() => {
        setcLick(!cLick)
      }} className='m-7 px-8 py-2 rounded-full cursor-pointer' />
      <animated.div style={fade}>
      {cLick ? <Form />: null}
      </animated.div>
    </animated.div>
  )
}

export default Contact
