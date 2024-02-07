"use client"

import Image from 'next/image';
import './case.css';
import React, { useState } from 'react';
import Dropdown from './casecomponents/dropdowns';
import Search from './casecomponents/search'
import Card from './casecomponents/card'; 


const cardItems = [
    {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1317.png', 
        userimg: '/Ellipse 162.png',
        user: 'Joanna Mellick',
        date: 'June 28,2018',
        shares: '1K shares',
      },
    {
      title: 'Transformational change in healthcare',
      description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
      imageUrl: '/Rectangle 1318.png', 
      userimg: '/Ellipse 162.png',
        user: 'Joanna Mellick',
        date: 'June 28,2018',
        shares: '1K shares',
    },
    {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1319.png', 
        userimg: '/Ellipse 162.png',
        user: 'Joanna Mellick',
        date: 'June 28,2018',
        shares: '1K shares',
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1320.png', 
        userimg: '/Ellipse 162.png',
        user: 'Joanna Mellick',
        date: 'June 28,2018',
        shares: '1K shares',
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1321.png', 
        userimg: '/Ellipse 162.png',
        user: 'Joanna Mellick',
        date: 'June 28,2018',
        shares: '1K shares',
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1322.png', 
        userimg: '/Ellipse 162.png',
        user: 'Joanna Mellick',
        date: 'June 28,2018',
        shares: '1K shares',
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1323.png', 
        userimg: '/Ellipse 162.png',
        user: 'Joanna Mellick',
        date: 'June 28,2018',
        shares: '1K shares',
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1324.png', 
        userimg: '/Ellipse 162.png',
        user: 'Joanna Mellick',
        date: 'June 28,2018',
        shares: '1K shares',
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1325.png', 
        userimg: '/Ellipse 162.png',
        user: 'Joanna Mellick',
        date: 'June 28,2018',
        shares: '1K shares',
      },
     
  ];

  const Case = () => {
    const [visibleCardCount, setVisibleCardCount] = useState(9); 
  
    const loadMoreCards = () => {
      setVisibleCardCount((prevCount) => prevCount + 3); 
    };
  
    const options1 = [
      { value: 'option1-1', text: 'Filter by Topic' },
      { value: 'option1-2', text: 'Option 1' },
      { value: 'option1-3', text: 'Option 2' },
    ];
  
    const options2 = [
      { value: 'option2-1', text: 'Filter by solution' },
      { value: 'option2-2', text: 'Option 1' },
      { value: 'option2-3', text: 'Option 2' },
    ];
  
    const options3 = [
      { value: 'option3-1', text: 'Sort By' },
      { value: 'option3-2', text: 'Date' },
      { value: 'option3-3', text: 'Relevence' },
    ];
    return (
      <>

       <div className="white-space"></div> 
            <div className="title-img">
                <img src="/BigPost.jpg" alt="case" className="title-image" width="1050" height="350"/>
                <div className="image-overlay">
                <h3>GetMax Solutions</h3>
          <h2>Title of latest one</h2>
          <p>It's captions/intro along with a pic</p>
          <button className="read-button">Read latest case study</button>
         
        </div>
            </div>
          
           
            <div className="search-box-container">
             <div className="dropdowns-container">
              { }
              <Dropdown options={options1} />
              <Dropdown options={options2} />
              <Dropdown options={options3} />
            </div>
        
            <Search />
            <div className="search-container">
          <img src="/Frame 5429.png" alt="Icon 1" className="icon" width="50" height="50" />
          <img src="/Frame 5430.png" alt="Icon 2" className="icon" width="50" height="50" />
          <img src="/Frame 5431.png" alt="Icon 3" className="icon" width="50" height="50" />
          <img src="/Frame 5432.png" alt="Icon 3" className="icon" width="50" height="50" />
        </div>
            </div>
            <div className="cardd-container">
        {cardItems.slice(0, visibleCardCount).map((card, index) => (
          <div key={index} className="cardd-wrapper">
            <Card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              userimg= {card.userimg}
              user={card.user}
              date={card.date}
              shares={card.shares}
            />
          </div>
        ))}
      </div>
      <div className="load-more-container">
        <button className="load-more-button" onClick={loadMoreCards}>
        <a href="#">Load more</a>
        </button>
      </div>
    </>
  );
};

export default Case;