import React from "react";
import SlideCard from "./SlideCard";

import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Autoplay,
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const Final = () => {
  return (
    <div className="bg-[#FBF8FF] h-screen max-w-screen ">
      <div className="flex flex-col gap-2">
        <h1 className="font-inter text-center text-5xl font-bold text-custom-purple py-4 mt-8">
          <span className="text-custom-purple">RCM</span> Services
        </h1>
        <p className="font-inter text-center text-md font-thin">
          Discover our tailored RCM services, meticulously designed to amplify
          your practice's financial efficiency and ensure seamless revenue
          management
        </p>
      </div>
      <div className="swiper-container" style={{ margin: "4rem 9rem" }}>
        <Swiper
          //  install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          //   navigation
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          // autoplay={{ delay: 1000, disableOnInteraction: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            {" "}
            <SlideCard
              heading="Billing section"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.debitis explicabo, architecto soluta doloremque?"
              headimg="/ufo.png"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SlideCard
              heading="Medical Coding"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.debitis explicabo, architecto soluta doloremque?"
              headimg="/ufo.png"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SlideCard
              heading="Backend Solutions"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.debitis explicabo, architecto soluta doloremque?"
              headimg="/ufo.png"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SlideCard
              heading="Medical Coding"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.debitis explicabo, architecto soluta doloremque?"
              headimg="/ufo.png"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SlideCard
              heading="Medical Coding"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.debitis explicabo, architecto soluta doloremque?"
              headimg="/ufo.png"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SlideCard
              heading="Medical Coding"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.debitis explicabo, architecto soluta doloremque?"
              headimg="/ufo.png"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SlideCard
              heading="Medical Coding"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit.debitis explicabo, architecto soluta doloremque?"
              headimg="/ufo.png"
            />{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Final;
