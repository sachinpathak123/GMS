"use client";
import { motion } from "framer-motion";
import React from "react";
const Statcard = (props: any) => {
  return (
    <div className="flex items-center justify-items-center py-1 mt-5">
      <motion.div className="bg-white w-[220px] text-custom-purple relative rounded-t-none rounded-b-3xs  box-border max-w-md h-[160px] max-h-md m-12  border-t-[5px] border-solid border-blueviolet hover:bg-purple-500 hover:text-white duration-200">
        <motion.div className="text-center space-y-2 mt-10">
          <motion.h2 className="text-[20px] font-bold">{props.data}</motion.h2>
          <motion.p className=" font-bold text-[17px]">{props.name}</motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Statcard;
