import React from "react";
import './App.css';
import { motion } from "framer-motion";
function mainpage() {
    return (
        <div className="mx-24 px-24 py-48">
            <div className="grid grid-cols-2 gap-24 place-content-center">
              <div className="pb-24 flex flex-col gap-4 items-start justify-center">
                <div>
               <h1 className="text-6xl font-inter font-thin" style={{
                lineHeight:1.2,
               }}>Great <span className="text-custom-purple font-extrabold">Product</span> is <br /> <span className="font-extrabold">built by great </span><span className="text-custom-purple font-extrabold">teams</span></h1>
               </div>
               <div>
               <p className="text-md py-5 font-inter font-medium text-slate-500">We help build and manage a team of world-class developers to bring your vision to life</p>
               </div>
               <div className="flex">
                <motion.button className="px-3 py-4 bg-light-pUrple text-white text-md rounded-md" whileHover={{scale:1.1}}>Let's get started</motion.button>
               </div>
              </div>
              <div className="px-24 pb-24">
                <img src="/description.png" alt="an image" className="w-[40vw] h-[60vh]" />
              </div>
            </div>
        </div>
    );
}

export default mainpage;