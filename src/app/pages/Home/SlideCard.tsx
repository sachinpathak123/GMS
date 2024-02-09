import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
function SlideCard(props: any) {
  return (
    <>
      <div className="px-5 md:px-14 py-5 md:py-12 flex items-center justify-center">
        <div className="bg-white shadow-lg">
          <div className="py-5 flex flex-col gap-2 items-center">
            <img src={props.headimg} alt="an image" className="p-3" />
            <h1 className="font-inter text-2xl font-semibold">
              {props.heading}
            </h1>
            <pre className="font-inter text-xs font-thin text-wrap px-10 py-3 text-center">
              {props.content}
            </pre>
            <div className="inline-flex">
              <motion.button
                className="text-light-pUrple font-normal py-2"
                whileHover={{
                  marginRight: "10px",
                }}
              >
                Learn More
              </motion.button>{" "}
              <FaArrowRight size={20} className="text-light-pUrple my-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SlideCard;
