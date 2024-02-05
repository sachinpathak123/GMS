import React from "react";
import './App.css';
import { motion } from "framer-motion";
function mainpage() {
    return (
        <>
            
        <div className="ml-44 mr-12 py-44">
            <div className="inline-flex">
              <div className="pb-12 flex flex-col gap-3 items-start justify-center">
                <div>
               <h1 className="text-6xl font-inter font-thin" style={{
                lineHeight:1.2,
               }}>Great <span className="text-custom-purple font-extrabold">Product</span> is <br /> <span className="font-extrabold">built by great </span><span className="text-custom-purple font-extrabold">teams</span></h1>
               </div>
               <div>
               <p className="text-lg px-1 py-5 font-inter font-medium text-slate-500">We help build and manage a team of world-class developers to bring your vision to life</p>
               </div>
               <div className="flex">
                <motion.button className="px-4 py-4 bg-light-pUrple text-white text-md rounded-md" whileHover={{scale:1.1}}>Let's get started</motion.button>
               </div>
              </div>
              <div className="px-32">
                <img src="/description.png" alt="an image" className="w-[30vw] h-[60vh]" />
              </div>
            </div>
        </div>
        </>
    );
}

export default mainpage;