"use client";
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
      link1: "/",
    },
    {
      id: 2,
      link: "RCM services",
      link1: "/pages/RCM-Services",
    },
    {
      id: 3,
      link: "Resources",
      link1: "/Resources",
      sublinks: ["Blogs", "Case Studies"],
      blogsLink: "/pages/Resources/Blogs",
      caseStudiesLink: "/pages/Resources/Case-Studies",
    },
    {
      id: 4,
      link: "Specialization",
      link1: "#",
    },
    {
      id: 5,
      link: "Why-GetMax",
      link1: "/pages/Why-GetMax",
    },
  ];

  return (
    <>
      <motion.div
        className="flex justify-evenly gap-1 md:gap-5 items-center font-sans w-full h-16 md:px-4 text-light-pUrple fixed z-30 bg-lightGrey nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
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
              <img
                src="/logo1.png"
                alt="There was a image"
                className="w-20 h-14"
              />
            </a>
          </h1>
        </div>

        <ul className="hidden  md:flex">
          {links.map(
            ({ id, link, link1, sublinks, blogsLink, caseStudiesLink }) => {
              if (link !== "Resources" && link !== "RCM services") {
                return (
                  <motion.li
                    key={id}
                    className="nav-links px-4 cursor-pointer capitalize font-medium text-[#] link-underline"
                    whileHover={{ scale: 1.2, color: "#6020BD" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href={link1}>{link}</Link>
                  </motion.li>
                );
              } else if (link == "Resources") {
                return (
                  <motion.li
                    key={id}
                    className="nav-links px-4 cursor-pointer group capitalize font-medium link-underline"
                    whileHover={{ scale: 1.2, color: "#6020BD" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href={link1}>{link}</Link>
                    <ul className=" opacity-0 transition-opacity duration-500 ease-out p-3 w-fit bg-purple-500 group-hover:opacity-100 absolute mt-5">
                      {sublinks?.map((sub, i) => (
                        <li
                          key={i}
                          className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline"
                        >
                          {sub === "Blogs" ? (
                            <Link href={blogsLink}>{sub}</Link> // Use blogsLink here
                          ) : (
                            <Link href={caseStudiesLink}>{sub}</Link> // Use caseStudiesLink here
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.li>
                );
              } else {
                return (
                  <motion.li
                    key={id}
                    className="nav-links px-4 cursor-pointer capitalize group font-medium text-gray-800 link-underline"
                    whileHover={{ scale: 1.2, color: "#6020BD" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href={link1}>{link}</Link>
                    <div className=" bg-purple-500 flex transition-all ease-out duration-500 flex-row items-stretch justify-stretch h-0 group-hover:h-48 -translate-x-1/3 absolute mt-5 opacity-0 group-hover:opacity-100 w-0 group-hover:w-150 overflow-hidden">
                      <ul className=" flex-grow border-r-2 border-white border-solid p-3">
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                      </ul>
                      <ul className=" flex-grow border-r-2 border-white border-solid p-3">
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                      </ul>
                      <ul className=" flex-grow border-r-2 border-white border-solid p-3">
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                        <li className=" nav-links p-2 pr-4 hover:translate-x-3 transition-transform duration-150 ease-out cursor-pointer capitalize font-medium text-white link-underline">
                          <Link href={"#"}>LINK</Link>
                        </li>
                      </ul>
                    </div>
                  </motion.li>
                );
              }
            }
          )}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-evenly items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to- text-gray-500">
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
        <img
          src="/contact.png"
          alt="Target Image"
          className="w-24 md:w-36 h-auto"
        />
      </motion.div>
    </>
  );
};

export default Navbar;
