import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxCircle } from "react-icons/rx";
import { TbCircleFilled } from "react-icons/tb";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slidercomp from "./Slidercomp";
function Slider() {
  return (
    <>
      <div className="font-inter text-center bg-white m-8">
        <p className="text-custom-purple text-6xl font-extrabold">
          Case Studies
        </p>
        <br />
        <p className="text-sm text-black px-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          laudantium temporibus illo incidunt officia quae, deserunt harum
          necessitatibus ipsum. <br />
          Velit architecto ab magnam saepe molestias, neque quis nesciunt
          suscipit eos?Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <br />
          Officiis numquam impedit voluptates nemo doloremque repellat ullam
          exercitationem atque praesentium deleniti.
        </p>
      </div>
      <Swiper
        style={{ margin: "0rem 0rem" }}
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        //  navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        //  scrollbar={{ draggable: true }}
        speed={1000}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Slidercomp
            headimg="slide1.png"
            content="A Semiautomatic Multi-Label Color Image Segmentation Coupling Dirichlet Problem and Colour Distances"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercomp
            headimg="slide1.png"
            content="A Semiautomatic Multi-Label Color Image Segmentation Coupling Dirichlet Problem and Colour Distances"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercomp
            headimg="slide1.png"
            content="A Semiautomatic Multi-Label Color Image Segmentation Coupling Dirichlet Problem and Colour Distances"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slidercomp
            headimg="slide1.png"
            content="A Semiautomatic Multi-Label Color Image Segmentation Coupling Dirichlet Problem and Colour Distances"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
