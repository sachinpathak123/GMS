"use client"

import Image from 'next/image';
import './blog.css'
import React, { useState } from 'react';
import Dropdowns from './blogcomponents/dropdowns';
import Search from './blogcomponents/searchbutton'
import Blogcard from './blogcomponents/blogcard';
 

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
    },
    {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client1.png",
          user: "Joanna Mellick",
      },
      {
        blogTitle: "Integer Maecenas Eget Viverra",
        blogDesc:
          "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
        imgLink:
          "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
          imgsource: "/client1.png",
          user: "Joanna Mellick",
      }
]



  const Blog = () => {
    return (
        <>

        <div className="white-space"> 
            <div className="title-img">
                <Image src="/blog.png" alt="case" className="title-image" width="1300" height="0"/>   
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
                        <Image src="/Frame 5429.png" alt="Icon 1" className="icon" width="50" height="50" />
                        <Image src="/Frame 5430.png" alt="Icon 2" className="icon" width="50" height="50" />
                        <Image src="/Frame 5431.png" alt="Icon 3" className="icon" width="50" height="50" />
                        <Image src="/Frame 5432.png" alt="Icon 3" className="icon" width="50" height="50" />
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
            />
            ))}
        </div>

        </>
    );
};

export default Blog;