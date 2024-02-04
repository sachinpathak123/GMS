"use client"
import React, { useEffect, useState } from 'react';
import './App.css';
import Overlap from './Hexagon';
import Header from './Header';
import Footer from './Footer';
import Principle from './principle';
import How from './how';
import Sidebar from './sidebar';
import MainPage from './mainpage';

const page = () => {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])
   
  return (
    <div>
          <div>
      <MainPage />
      <div className='relative'><Sidebar /></div>
   <div className='relative'>
    <How /></div>
    <div className='relative'>
    <Principle />
    </div>
    <div className='relative'> 
    <Header />
    </div>
    <div className='relative'>
      <Overlap/>      
    </div>
    {/* <div className='relative'>
      <Footer /> 
    </div>   */}
  </div>
    </div>
  )
}

export default page
