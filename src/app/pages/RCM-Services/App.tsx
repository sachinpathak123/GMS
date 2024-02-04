
import React from 'react';
import './App.css';
import Hexagon from './components/Hexagon';
import Header from './components/Header';
import Footer from './components/Footer';
import Principle from './components/principle';
import How from './components/how';
import Sidebar from './components/sidebar';
import MainPage from './components/mainpage';

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
