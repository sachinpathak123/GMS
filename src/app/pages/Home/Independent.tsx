"use client";
import React from "react"
import { useState, useEffect } from "react";
import Image from "next/image";

const Independent = () => {
    const team = [
        "/servicesbg1.jpg",
        "/servicesbg2.jpg",
        "/servicesbg3.jpg",
        "/servicesbg4.jpg",
        "/servicesbg5.jpg",
      ];
      const [currentProgress, setCurrentProgress] = useState(0);
      const strokeWidth = 5;
      const [radius, setradius] = useState(200)
      const circumference = 2 * Math.PI * radius;
      const dummy = [
        "Independent Physician",
        "Doctors",
        "Dentists",
        "Physiotherapists",
        "Lab Technology",
      ];

      useEffect(() => {
        setInterval(() => {
          setCurrentProgress((prevProgress) => {
            if (prevProgress < 100) {
              return (prevProgress += 0.1);
            }
            return 0;
          });
        }, 50);
        if(window.innerWidth<=1024){
          setradius(100);
        }
      }, []);
    
      const strokeDashoffset =
        circumference - (currentProgress / 100) * circumference;

    return (
        <>
            <div className=" overflow-x-hidden relative bg-[#B9A7FF;]">
            <p className="text-[20px] font-medium w-[28%] ml-[30px] pt-[350px] text-white ">Simplify medical billing complexities,
                    enhance revenue cycles, and improve financial outcomes.</p>
      <div className=" absolute h-screen inset-0 flex items-center justify-center">
        <div className=" relative w-[400px] h-[400px] z-[1] -rotate-90 rounded-full">
          {team.map((item, index) => {
            const theta = ((2 * Math.PI) / team.length) * index;
            const x = radius * Math.cos(theta);
            const y = radius * Math.sin(theta);
            return (
              <div key={item}>
                <div
                  className="absolute w-16 h-16 border-4 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-no-repeat  bg-cover  md:bg-center cursor-pointer overflow-hidden "
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    borderColor:
                      Math.floor(currentProgress / 20) === index
                        ? "#0487C9"
                        : "#fff",
                  }}
                  onClick={() => setCurrentProgress(20 * index)}
                >
                  
                </div>
                <div
                  className=" absolute text-center rotate-90 text-white"
                  style={{
                    top: (index<=1)?`calc(50% + ${y+5}px)`:(index==2)?`calc(50% + ${y+70}px)`:`calc(50% + ${y-80}px)`,
                    left: (index<=1)?`calc(50% + ${x+10}px)`:(index==2)?`calc(50% + ${x-10}px)`:`calc(50% + ${x-20}px)`,
                  }}
                >
                  {dummy[index]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className=" relative h-screen bg-no-repeat  bg-cover  md:bg-center "
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 10%)`,
        }}
      >
        
        <svg
          width={radius * 2 + strokeWidth * 2}
          className="flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 justify-center"
          height={radius * 2 + strokeWidth * 2}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            stroke="" // Tailwind's coolGray-200
            fill="#0487C98A"
            className=" z-10"
            strokeWidth={strokeWidth}
            r={radius - strokeWidth / 0.5}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
          />
          <text
            x={radius / 2}
            y={-1.25 * radius}
            fill="white"
            className=" not-italic font-bold leading-[5.81638rem] tracking-[0.02406rem] rotate-90 text-base lg:text-4xl font-popins"
          >
            What we provide
          </text>
          <text
            x={radius / 2 + 50}
            y={-1 * radius}
            fill="white"
            className=" rotate-90 text-sm lg:text-2xl transition-all duration-200 ease-out"
          >
            {dummy[Math.floor(currentProgress / 20)]}
          </text>
          <circle
            stroke="#fff"
            fill="transparent"
            strokeWidth={strokeWidth}
            style={{ strokeDashoffset }}
            r={radius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
          />
          <circle
            className=" transition-all z-10 duration-150 ease-out"
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: strokeDashoffset,
            }}
            stroke="#24A6E0"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
          />
        </svg>
      </div>
    </div>
        </>
    )
}

export default Independent





