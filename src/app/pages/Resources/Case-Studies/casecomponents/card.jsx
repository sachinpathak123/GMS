
import React from 'react';

const Card = ({ title, description, imageUrl,userimg,user,date,shares }) => {
  return (
    <div className="cardd">
      <img src={imageUrl} alt={title} />
      <h2 style={{ fontWeight: 'bold', textAlign: 'left',fontSize: '25px', marginTop:'10px',marginBottom:'10px' }}>{title}</h2>
      <img src={userimg} alt={user} width="30" height="30" style={{ float: 'left', marginTop:'5px'}}/>
      <span style={{float:'center'}}>----{date}</span>
      <span style={{float:'right'}}>{shares}</span>
      <p style={{textAlign: 'left', marginTop:'25px'}}>{description}</p>
      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" style={{ float: 'left',marginTop:'10px' }}>Learn more &#8594;</a>
    </div>
  );
};

export default Card;