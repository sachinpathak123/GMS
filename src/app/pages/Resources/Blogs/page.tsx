"use client"

import Image from 'next/image';
import './blog.css'
import React, { useState } from 'react';
import Dropdowns from './blogcomponents/Dropdowns';
import Search from './blogcomponents/searchbutton'
import Blogcard from './blogcomponents/blogcard';
import Link from 'next/link';
 

const items = [
    {
        title: "Filter by Topic",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    },
    {
        title: "Filter by Solutions",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    },
    {
        title: "Sort by",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    }
]

const blogs = [
    {
      blogTitle: "Integer Maecenas Eget Viverra",
      blogDesc:
        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
      imgLink:
        "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
      imgsource: "/client1.png",
      user: "Joanna Mellick",
      date: "June 28,2018",
      shares: "1K shares",
    },
    {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client2.png",
          user: "Joanna Mellick",
          date: "June 28,2018",
          shares: "1K shares",
      },
      {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client3.png",
          user: "Joanna Mellick",
          date: "June 28,2018",
          shares: "1K shares",
      },
      {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client3.png",
          user: "Joanna Mellick",
          date: "June 28,2018",
          shares: "1K shares",
      },
      {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client3.png",
          user: "Joanna Mellick",
          date: "June 28,2018",
          shares: "1K shares",
      },
      {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client3.png",
          user: "Joanna Mellick",
          date: "June 28,2018",
          shares: "1K shares",
      },
      {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client3.png",
          user: "Joanna Mellick",
          date: "June 28,2018",
          shares: "1K shares",
      },
      {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client3.png",
          user: "Joanna Mellick",
          date: "June 28,2018",
          shares: "1K shares",
      },
      {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client3.png",
          user: "Joanna Mellick",
          date: "June 28,2018",
          shares: "1K shares",
      }
      
]



  const Blog = () => {
    return (
        <>

        <div className="white-space"> 
            <div className="justify-center align-center mb-12 pt-[100px]">
            
                <div className='font-bold text-3xl font-[Work Sans] w-[20%] pl-[30px]'>some latest blogs goes here</div>
                
                <Image src='/blog.png' alt="case" className="title-image w-[80%] pl-[275px] rounded" width="400" height="400">

                  </Image>   
            </div>

            <div>
                {items.map(item => (
                        <Dropdowns 
                            title={item.title}
                            field1={item.field1}
                            field2={item.field2}
                            field3={item.field3}
                            field4={item.field4}
                        />
                    ))
                } 
            </div> 
        
            <div className="search-container">
                <Search />
                <div className="search-container">
                        <Image src="/Frame 5429.png" alt="Icon 1" className="icon" width="40" height="60" />
                        <Image src="/Frame 5430.png" alt="Icon 2" className="icon" width="40" height="60" />
                        <Image src="/Frame 5431.png" alt="Icon 3" className="icon" width="40" height="60" />
                        <Image src="/Frame 5432.png" alt="Icon 3" className="icon" width="40" height="60" />
                </div>
            </div>
        </div>

        <div className="blog-container p-8">
            {blogs.map((blog,i) => (
            <Blogcard
                key={i}
                title={blog.blogTitle}
                desc={blog.blogDesc}
                lnk={blog.imgLink}
                imgsource={blog.imgsource}
                user={blog.user}
                date={blog.date}
                shares={blog.shares}
            />
            ))}
        </div>

        <div className='mb-8 justify-center align-center pl-[680px]'>
        <a href="#" className="mb-12 justify-center text-black rounded-none border bg-white-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Load more</a>
        </div>
        


        </>
    );
};

export default Blog;