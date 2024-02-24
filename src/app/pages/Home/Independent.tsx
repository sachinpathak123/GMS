'use client'
import React, { useState, useEffect, useRef } from "react";

const Independent = () => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [radius, setRadius] = useState(250);
  const strokeWidth = 1;
  const circumference = 2 * Math.PI * radius;
  const dummy = [
    "Physician",
    "Doctors",
    "Dentists",
    "Lab Technology",
  ];

  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // You can adjust the threshold as needed
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    const id = setInterval(() => {
      setCurrentProgress((prevProgress) => {
        if (prevProgress < 100) {
          return (prevProgress += 0.1);
        }
        return 0;
      });
    }, 20);

    return () => clearInterval(id);
  }, [isIntersecting]);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setRadius(150);
    }
  }, []);

  const strokeDashoffset =
    circumference - (currentProgress / 100) * circumference;

  return (
    <>
      <div className="overflow-hidden relative my-32">
        <div className={" absolute top-0 h-screen w-screen gap-5 flex flex-col items-center justify-start"}>
            <h1 className="text-2xl md:text-5xl text-[#852fcb] font-medium"><span className=" font-extrabold">Whom</span> GetMax Serves</h1>
            <p className=" w-1/2 text-base font-normal text-center">We help all types of healthcare providers, big and small. Our services are designed to fit your needs, making sure you succeed financially and run smoothly.</p>
        </div>
        <div
          ref={progressRef}
          className="absolute translate-y-16 -translate-x-1 lg:-translate-x-3 h-screen w-screen gap-3 bg-transparent flex flex-col items-center justify-center z-10"
        >
          <h2 className="text-base lg:text-xl text-white font-font-awesome-5-free font-semibold">
            Our Customers are
          </h2>
          <h1 className="text-2xl lg:text-5xl w-72 text-center text-white font-bold">
            {dummy[Math.floor(currentProgress / 25)]}
          </h1>
          {/* <a href="/" className="inline-flex group items-center text-white">
            See More
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              className="group-hover:translate-x-2 group-hover:scale-110 transition-transform"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a> */}
        </div>
        <div className="relative h-screen bg-no-repeat bg-cover md:bg-center height-[35vh]">
          <svg
            width={radius * 2 + strokeWidth * 2 + 50}
            className="flex items-center absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 justify-center"
            height={radius * 2 + strokeWidth * 2 + 50}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              stroke="" // Tailwind's coolGray-200
              fill="#852fcb"
              className="z-10"
              strokeWidth={strokeWidth}
              r={radius / 2 + 30}
              cx={radius + strokeWidth + 25}
              cy={radius + strokeWidth + 25}
            />
            <circle
              stroke="#000"
              fill="transparent"
              strokeWidth={strokeWidth}
              style={{ strokeDashoffset }}
              r={radius}
              cx={radius + strokeWidth + 25}
              cy={radius + strokeWidth + 25}
            />
            <circle
              className="transition-all z-10 duration-150 ease-out"
              style={{
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: strokeDashoffset,
              }}
              stroke="#852fcb"
              fill="transparent"
              strokeWidth={strokeWidth * 4}
              r={radius}
              cx={radius + strokeWidth + 25}
              cy={radius + strokeWidth + 25}
            />
            <circle
              fill="#852fcb"
              stroke={Math.floor(currentProgress / 25) >= 3 ? "#fff" : "852fcb"}
              strokeWidth={5}
              r={10}
              cx={radius + strokeWidth + 25}
              cy={strokeWidth + 25}
            />
            <circle
              fill="#852fcb"
              stroke={Math.floor(currentProgress / 25) >= 0 ? "#fff" : "852fcb"}
              strokeWidth={5}
              r={10}
              cx={radius * 2 + strokeWidth + 25}
              cy={radius + strokeWidth + 25}
            />
            <circle
              fill="#852fcb"
              stroke={Math.floor(currentProgress / 25) >= 1 ? "#fff" : "852fcb"}
              strokeWidth={5}
              r={10}
              cx={radius + strokeWidth + 25}
              cy={radius * 2 + strokeWidth + 25}
            />
            <circle
              fill="#852fcb"
              stroke={Math.floor(currentProgress / 25) >= 2 ? "#fff" : "852fcb"}
              strokeWidth={5}
              r={10}
              cx={strokeWidth + 25}
              cy={radius + strokeWidth + 25}
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Independent;
