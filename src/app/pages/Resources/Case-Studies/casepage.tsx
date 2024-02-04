"use client"

import Image from 'next/image';
import './case.css'
import React, { useState } from 'react';
import Dropdowns from './casecomponents/dropdowns';
import Search from './casecomponents/search'
import Card from './casecomponents/card'; 

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
const cardItems = [
    {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1317.png', 
        
      },
    {
      title: 'Healthcare studies',
      description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
      imageUrl: '/Rectangle 1318.png', 
    },
    {
        title: 'Healthcare leaders',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1319.png', 
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1320.png', 
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1321.png', 
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1322.png', 
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1323.png', 
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1324.png', 
      },
      {
        title: 'Transformational change in healthcare',
        description: 'Objectives Healthcare leaders around the world are calling for radical, transformational change of our health and care systems.',
        imageUrl: '/Rectangle 1325.png', 
      },
     
  ];

  const Case = () => {
    const [visibleCardCount, setVisibleCardCount] = useState(9); 
  
    const loadMoreCards = () => {
      setVisibleCardCount((prevCount) => prevCount + 3); 
    };
  
    return (
      <>

       <div className="white-space"></div> 
            <div className="title-img">
                <Image src="/BigPost.jpg" alt="case" className="title-image" width="1519" height="0"/>
                <div className="image-overlay">
                <h3>GetMax Solutions</h3>
          <h2>Title of latest one</h2>
          <p>It's captions/intro along with a pic</p>
          <button className="read-button">Read latest case study</button>
        </div>
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
            <div className="card-container">
        {cardItems.slice(0, visibleCardCount).map((card, index) => (
          <div key={index} className="card-wrapper">
            <Card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          </div>
        ))}
      </div>
      <div className="load-more-container">
        <button className="load-more-button" onClick={loadMoreCards}>
          Load more
        </button>
      </div>
    </>
  );
};

export default Case;