import React from "react";
import './App.css';
function mainpage() {
    return (
        <div className="mx-24 px-24 py-24">
            <div className="grid grid-cols-2 gap-24 place-content-center">
              <div className="flex flex-col items-start justify-center">
                <div>
               <h1 className="text-5xl font-inter font-thin" style={{
                lineHeight:1.2,
               }}>Great <span className="text-custom-purple font-extrabold">Product</span> is <br /> <span className="font-extrabold">built by great </span><span className="text-custom-purple font-extrabold">teams</span></h1>
               </div>
               <div>
               <p className="text-xl py-5 font-inter font-medium text-slate-500">We help build and manage a team of world-class developers to bring your vision to life</p>
               </div>
               <div className="flex">
                <button className="px-6 py-5 bg-light-pUrple text-white text-md rounded-md">Let's get started</button>
               </div>
              </div>
              <div className="">
                <img src="/description.png" alt="an image" className="w-[25vw] h-[60vh]"/>
              </div>
            </div>
        </div>
    );
}

export default mainpage;