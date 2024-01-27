"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
      link1:"/",
    },
    {
      id: 2,
      link: "RCM services",
      link1:"#",
    },
    {
      id: 3,
      link: "Resources",
      link1:"#",
    },
    {
      id: 4,
      link: "Specialization",
      link1:"#",
    },
    {
      id: 5,
      link: "Why-GetMax",
      link1:"/pages/Why-GetMax",
    },
  ];

  return (
    <>
    <motion.div className="flex justify-between items-center font-sans w-full h-20 px-4 text-light-pUrple  fixed z-50 bg-white nav"
    initial={{y:-300}}
    animate={{y:0}}
    transition={{delay:0.2,type:'spring',stiffness:120}}
    >
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-sans ml-2 ">
          <a
            className="link-underline link-underline-black"
            href="https://gms-rcm.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
           <img src="/logo1.png" alt="There was a image" className="w-24 h-16" /> 
          </a>
        </h1>
      </div>

      <ul className="hidden  md:flex">
        {links.map(({ id, link,link1 }) => (
          <motion.li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-800 link-underline"
            whileHover={{scale:1.2,
            color:'#6020BD',
            }}
            transition={{type:'spring',stiffness:300}}
          >
            <Link href={link1}>{link}</Link>
          </motion.li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to- text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
            <img src="/contact.png" alt="Target Image" className='w-36 h-10 relative right-6 top-1' />
    </motion.div>
            </>
  );
};

export default Navbar;