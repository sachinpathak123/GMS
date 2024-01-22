import React from 'react';
import './software.css'

import Softcard from '@/app/Components/Cards/Oursoftwarecard/Softcard';

import Header from './Header';
import Marquee from 'react-fast-marquee';

//Importing images

import software1 from '../public/software1.jpg';
import software2 from './Softwareimages/software2.jpg';
import software3 from './Softwareimages/software3.jpg';
import software4 from './Softwareimages/software4.jpg';
import software5 from './Softwareimages/software5.jpg';
import software6 from './Softwareimages/software6.jpg';
import software7 from './Softwareimages/software7.jpg';
import software8 from './Softwareimages/software8.jpg';
import software9 from './Softwareimages/software9.jpg';
import software10 from './Softwareimages/software10.jpg';
import software11 from './Softwareimages/software11.jpg';
import software12 from './Softwareimages/software12.jpg';
import software13 from './Softwareimages/software13.jpg';
import software14 from './Softwareimages/software14.jpg';
import software15 from './Softwareimages/software15.jpg';
import software16 from './Softwareimages/software16.jpg';
import software17 from './Softwareimages/software17.jpg';
import software18 from './Softwareimages/software18.jpg';
import software19 from './Softwareimages/software19.jpg';


const Carousel = () => {


  return (
    <>
    <div className='w-screen h-3/4 bg-berserk'> 
    <Header/>

<div className="software-section-container">
<div className="soft-col">
 <div className='soft-colHeader'>
  
 </div>
    <div className='marq1' >
     {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}
        <Marquee direction='up' behaviour = "scroll"  className='mark' >{/* use it to adjust height */}
                  <div   className="marquee-item">
                  <Softcard logo = {software1}   />
                  </div>
                  <div  className="marquee-item">
                  <Softcard logo = {software2}  />
                  </div>
                   <div  className="marquee-item">
                  <Softcard logo = {software3}  />
                  </div>
                  <div   className="marquee-item">
                  <Softcard logo = {software4} />
                  </div>
                  <div   className="marquee-item">
                  <Softcard logo = {software5}  />
                  </div>

        
              </Marquee>

    </div>
    </div>
    <div className="soft-col">
 <div className='soft-colHeader'>
  
 </div>
    <div className='marq1'> {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}
 
<Marquee direction='down' behaviour = "scroll"  className='mark'>{/* use it to adjust height */}

          <div   className="marquee-item">
          <Softcard logo = {software6}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {software7}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {software8}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software9}  />
          </div>
       


      </Marquee>

</div> 
</div>
 <div className="soft-col">
 <div className='soft-colHeader'>
  
 </div>
   <div className='marq1'> {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}

<Marquee direction='up' behaviour = "scroll"  className='mark'>{/* use it to adjust height */}

          <div   className="marquee-item">
          <Softcard logo = {software10}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {software11}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {software12} />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software13}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software14}  />
          </div>
          


      </Marquee>

</div>  
</div>
         <div className="soft-col">
 <div className='soft-colHeader'>
  
 </div>
 <div className='marq1'> {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}
 
<Marquee direction='down' behaviour = "scroll"  className='mark'>{/* use it to adjust height */}

          <div   className="marquee-item">
          <Softcard logo = {software15}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {software16}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {software17}/>
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software18}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software19}  />
          </div>
         


      </Marquee>

</div>
</div>

         
</div>
<div className='soft-cont-mob'>
   
  <div className='soft-marq-pair'>

    <div className='soft-row-one'>
    
      <div className='marq-mob' >
      <Marquee direction='right' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
      <div   className="marquee-item">
                  <Softcard logo = {software1}   />
                  </div>
                  <div  className="marquee-item">
                  <Softcard logo = {software2}  />
                  </div>
                   <div  className="marquee-item">
                  <Softcard logo = {software3}  />
                  </div>
                  <div   className="marquee-item">
                  <Softcard logo = {software4} />
                  </div>
                  <div   className="marquee-item">
                  <Softcard logo = {software5}  />
                  </div>
    
                </Marquee>
      </div>
    </div>
  </div>
  <div className='soft-row'>
    <div className='marq-mob' >
    <Marquee direction='left' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
    

    <div   className="marquee-item">
          <Softcard logo = {software6}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {software7}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {software8}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software9}  />
          </div>


              </Marquee>
    </div>
  </div>
  <div className='soft-row'>
    <div className='marq-mob' >
    <Marquee direction='right' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
                  
          <div   className="marquee-item">
          <Softcard logo = {software10}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {software11}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {software12} />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software13}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software14}  />
          </div>

        
              </Marquee>
    </div>
  </div> <div className='soft-row'>
    <div className='marq-mob' >
    <Marquee direction='left' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
    
          <div   className="marquee-item">
          <Softcard logo = {software15}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {software16}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {software17}/>
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software18}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {software19}  />
          </div>
        
              </Marquee>
    </div>
  </div>
  
</div>
</div>

</>
  );
};

export default Carousel;