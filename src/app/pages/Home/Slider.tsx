import { motion } from 'framer-motion';
import React, { useState,useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxCircle } from 'react-icons/rx';
import { TbCircleFilled } from 'react-icons/tb';
function Slider() {
  const slides = [
    {
      url: '/slide1.png',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt error itaque recusandae labore repellendus perferendis ipsam sunt unde nemo.',
    },
    {
        url: '/widecard.png',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, explicabo.Lorem ipsum dolor sit Lorem ',
    },
    {
        url: '/widecard2.png',
        text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis assumenda modi! Ducimus?'
    },
    {
        url: '/widecard3.png',
        text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita perspiciatis suscipit laudantium veniam? Minima distinctio voluptates praesentium?'
    },
    // ... (other slides)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [filled, setFilled] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:any) => {
    setCurrentIndex(slideIndex);
  };
  const startAutoSlide = () => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); 

    return intervalId;
  };

  useEffect(() => {
    const intervalId = startAutoSlide();
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
    <div className="soft-header bg-white m-3" id="soft-mainHeader">
   
   <p className="soft-head1 font-extrabold">Case Studies</p>
   <br />
   <p className='text-md text-black px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium temporibus illo incidunt officia quae, deserunt harum necessitatibus ipsum. <br />Velit architecto ab magnam saepe molestias, neque quis nesciunt suscipit eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Officiis numquam impedit voluptates nemo doloremque repellat ullam exercitationem atque praesentium deleniti.</p>

 </div>

    <div className='max-w-screen w-1/2 h-[80vh] m-auto py-16 px-4 relative group'> 
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 flex items-end justify-end'
      >
        <div>
          <p className='text-white text-lg text-center py-12 px-6'>
            {slides[currentIndex].text}
            <br />
            <span className='text-light-pUrple font-bold'>
              <motion.a href='#' whileHover={{
                color:'#fff'
              }}>READ MORE</motion.a>
            </span>
          </p>
        </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <motion.div
              style={{
                margin: '0.2rem',
              }}
              whileHover={{
                scale: 1.3,
              }}
              onClick={() => {
                setFilled(!filled);
                // You can add logic here to toggle between the icons or use a conditional rendering approach
              }}
            >
              <RxCircle />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Slider;
