import React from 'react'
//import Head from './Blogs/head'

//import BlogCard from './Blogs/blogcomponents/BlogCard'
//import Dropdowns from './Blogs/blogcomponents/Dropdowns'
//import SearchBox from './Blogs/blogcomponents/searchbutton'

function CaseStudy_mainpage() {
  return (
    <div className="flex">
      <img src="Big_Post.png" alt="Image 1" className="w-[100rem] p-24  border-spacing-3 h-[-30rem] z-10" />
      <div className="bg-gray-500 bg-opacity-50 h-[30px] w-[190px] mt-52 p-4 z-30 ml-[-730px] rounded-lg">
        <p className="text-white text-xl mt-[-15px] ">GetMax Solutions</p>
      </div>
      <p className='text-white text-5xl font-semibold z-40 mt-[270px] ml-[-300px]'>title of latest one</p>
       <button className= "z-40  bg-slate-100 h-[40px] bg-opacity-70 w-[270px] ml-[-300px] mt-[400px] transition-transform transform hover:scale-110 text-black font-bold  rounded-md">
       Read <b>Latest</b> Case Study
      </button>
       
        
    </div>
  )
};

export default CaseStudy_mainpage
