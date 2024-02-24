"use client"
import React, { useEffect, useState } from 'react';
{/*import './App.css';*/}
import Overlap from './Hexagon';
import Header from './Header';
import Footer from './NextGen';
import Principle from './principle';
import How from './how';
import Sidebar from './sidebar';
import MainPage from './mainpage';
import NextGen from './NextGen';

const page = () => {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])
   
  return (
    <div>
   
      <MainPage />
       
    <Sidebar />
    

    <How />

    
    <Principle/>
    
   
  
    <Header />

      <Overlap />   
   
      <NextGen /> 
      <br /><br /><br />
    </div>
  )
}

export default page
