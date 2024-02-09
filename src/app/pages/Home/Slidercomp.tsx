"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Slidercomp = (props: any) => {
  return (
    <div className="md:px-14 py-8 flex items-center justify-center">
      <div
        className="w-[40vw] h-[50vh] rounded-[6rem] shadow-xl flex flex-col items-center justify-end"
        style={{
          backgroundImage: `url(/${props.headimg})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50 rounded-[6rem]"
          style={{ zIndex: 1 }}
        ></div>
        <div className="font-inter text-sm text-center font-thin text-wrap px-8 pb-8 text-white z-20">
          {props.content}
          <br />
          <div className="inline-flex">
            <motion.span
              className="text-white font-normal cursor-pointer py-2 z-20"
              whileHover={{
                marginRight: "10px",
              }}
            >
              Read More
            </motion.span>{" "}
            <FaArrowRight size={10} className="text-white my-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidercomp;
