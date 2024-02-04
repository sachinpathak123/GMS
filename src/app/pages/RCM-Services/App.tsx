
import React from 'react';
import './App.css';
import Hexagon from './Hexagon';
import Header from './Header';
import Footer from './Footer';
import Principle from './principle';
import How from './how';
import Sidebar from './sidebar';
import MainPage from './mainpage';

function App() {
  return (
    <div>
      <MainPage/>
      <div className='relative'><Sidebar/></div>
   <div className='relative'>
    <How/></div>
    <div className='relative'>
    <Principle/>
    </div>
    <div className='relative'> 
    <Header/>
    </div>
    <div className='relative'>
      <Hexagon/>      
    </div>
    <div className='relative'>
      <Footer/> 
    </div>  
  </div>
  );
};

export default App;
