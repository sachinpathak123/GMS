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
    <div className="soft-header bg-white m-8 py-2" id="soft-mainHeader">
   
   <p className="soft-head1 font-extrabold">Case Studies</p>
   <br />
   <p className='text-md text-black px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium temporibus illo incidunt officia quae, deserunt harum necessitatibus ipsum. <br />Velit architecto ab magnam saepe molestias, neque quis nesciunt suscipit eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Officiis numquam impedit voluptates nemo doloremque repellat ullam exercitationem atque praesentium deleniti.</p>

 </div>

 
    </>
  );
}

export default Slider;
