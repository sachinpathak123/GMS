import React from 'react';
import './software.css'

import Softcard from '@/app/Components/Cards/Oursoftwarecard/Softcard';

import Header from './Header';
import Marquee from 'react-fast-marquee';

//Importing images

import advancemd from './Softwareimages/advancemd.jpg';
import allscripts from './Softwareimages/allscripts.jpg';
import athena from './Softwareimages/athena.jpg';
import brightree from './Softwareimages/brightree.jpg';
import cerner from './Softwareimages/cerner.jpg';
import emds from './Softwareimages/emds.jpg';
import epic from './Softwareimages/epic.jpg';
import fficelly from './Softwareimages/fficelly.jpg';
import gehealthcare from './Softwareimages/gehealthcare.jpg';
import greenway from './Softwareimages/greenway.jpg';
import iclaim from './Softwareimages/iclaim.jpg';
import kareo from './Softwareimages/kareo.jpg';
import medisoft from './Softwareimages/medisoft.jpg';
import meditouch from './Softwareimages/meditouch.jpg';
import nextgen from './Softwareimages/nextgen.jpg';
import practicesuite from './Softwareimages/practicesuite.jpg';
import prognocis from './Softwareimages/prognocis.jpg';
import sonosoft from './Softwareimages/sonosoft.jpg';
import zirmed from './Softwareimages/zirmed.jpg';


const Carousel = () => {


  return (
    <>
    <div className='w-screen h-3/4 bg-white'> 
    <Header/>

<div className="software-section-container">
<div className="soft-col">
 <div className='soft-colHeader'>
  
 </div>
    <div className='marq1' >
     {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}
        <Marquee direction='up' behaviour = "scroll"  className='mark' >{/* use it to adjust height */}
                  <div   className="marquee-item">
                  <Softcard logo = {advancemd}   />
                  </div>
                  <div  className="marquee-item">
                  <Softcard logo = {allscripts}  />
                  </div>
                   <div  className="marquee-item">
                  <Softcard logo = {athena}  />
                  </div>
                  <div   className="marquee-item">
                  <Softcard logo = {brightree} />
                  </div>
                  <div   className="marquee-item">
                  <Softcard logo = {cerner}  />
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
          <Softcard logo = {emds}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {epic}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {fficelly}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {gehealthcare}  />
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
          <Softcard logo = {greenway}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {iclaim}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {kareo} />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {medisoft}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {meditouch}  />
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
          <Softcard logo = {nextgen}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {practicesuite}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {prognocis}/>
          </div>
          <div   className="marquee-item">
          <Softcard logo = {sonosoft}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {zirmed}  />
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
                  <Softcard logo = {advancemd}   />
                  </div>
                  <div  className="marquee-item">
                  <Softcard logo = {allscripts}  />
                  </div>
                   <div  className="marquee-item">
                  <Softcard logo = {athena}  />
                  </div>
                  <div   className="marquee-item">
                  <Softcard logo = {brightree} />
                  </div>
                  <div   className="marquee-item">
                  <Softcard logo = {cerner}  />
                  </div>
    
                </Marquee>
      </div>
    </div>
  </div>
  <div className='soft-row'>
    <div className='marq-mob' >
    <Marquee direction='left' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
    

    <div   className="marquee-item">
          <Softcard logo = {emds}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {epic}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {fficelly}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {gehealthcare}  />
          </div>


              </Marquee>
    </div>
  </div>
  <div className='soft-row'>
    <div className='marq-mob' >
    <Marquee direction='right' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
                  
          <div   className="marquee-item">
          <Softcard logo = {greenway}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {iclaim}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {kareo} />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {medisoft}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {meditouch}  />
          </div>

        
              </Marquee>
    </div>
  </div> <div className='soft-row'>
    <div className='marq-mob' >
    <Marquee direction='left' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
    
          <div   className="marquee-item">
          <Softcard logo = {nextgen}  />
          </div>
          <div  className="marquee-item">
          <Softcard logo = {practicesuite}  />
          </div>
           <div  className="marquee-item">
          <Softcard logo = {prognocis}/>
          </div>
          <div   className="marquee-item">
          <Softcard logo = {sonosoft}  />
          </div>
          <div   className="marquee-item">
          <Softcard logo = {zirmed}  />
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