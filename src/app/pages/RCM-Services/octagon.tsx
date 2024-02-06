import React from 'react'

function octagon() {
  return (
  
    <div className='py-[33px] mt-[130px] ml-[700px]'>
    
    {/*Rotation degree 0,45,90,125,180,235,270,315*/}
   
    {/*Frist Circle */}
    <div className=' mt-[-70px] ml-[60px] absolute w-24 h-24 rounded-full border-dashed border-2 border-purple-500' 
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(0deg) translate(0, -190px)' }}/>
      <div
        className="mt-[-70px] ml-[60px] absolute w-20 h-20 text-white font-bold flex items-center rounded-full bg-purple-600"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(0deg) translate(0, -190px)' }}>
        <div className="text-white font-semibold text-center">
            <p  style={{fontSize:'9px', marginLeft:'13px'}}>Education &amp;</p>
            <p style={{fontSize:'9px', marginLeft:'13px'}}>Experience</p>
        </div>
      </div>
    
    <div className="absolute inline-block mt-[-10px] ml-[-15px]  rotate-0" >
        <div
          style={{marginRight: '10px',position: 'absolute',width: '0',height: '0',
          borderLeft: '45px solid transparent',
          borderRight: '45px solid transparent',
          borderBottom: '100px solid #CEC2EB',borderRadius:'9px'}}>
        </div>

        <div
          style={{ marginLeft: '0px', position: 'relative',width: '0',marginTop:'70px',height: '0',
          borderLeft: '45px solid transparent',
          borderRight: '45px solid transparent', 
          borderBottom: '30px solid white',
          borderRadius:'9px' }}>
        </div>
    </div>  

    
    {/*second triangle */}
    <div className='mt-[-20px] ml-[150px] absolute w-24 h-24 rounded-full border-dashed border-2 border-purple-500' 
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(45deg) translate(0, -190px)' }}/>
      <div
        className="mt-[-20px] ml-[150px] absolute w-20 h-20 rounded-full bg-purple-600  border-2"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(45deg) translate(0, -190px)' }}>
        <div className="text-white font-semibold text-center" style={{marginTop:'15px', transform: 'rotate(315deg)' }}>
            <p  style={{fontSize:'9px'}}>Managerial</p>
            <p style={{fontSize:'9px'}}>Knowledge &amp;</p>
            <p  style={{fontSize:'9px'}}>Experience</p>
        </div>
      </div>
    
    <div className="absolute inline-block  mt-[45px] ml-[100px]" style={{transform:'rotate(52deg)'}} >
        <div
           style={{marginRight: '10px',position: 'absolute',width: '0',height: '0',
           borderLeft: '45px solid transparent',
           borderRight: '45px solid transparent',borderRadius:'9px',
           borderBottom: '100px solid #CEC2EB'}}>
        </div>

        <div            
            style={{ marginLeft: '0px', position: 'relative',width: '0',marginTop:'70px',height: '0',
            borderLeft: '45px solid transparent',
            borderRight: '45px solid transparent',borderRadius:'9px',
            borderBottom: '30px solid white' }}>
        </div>
    </div>  
    

    {/*Third triangle */}
    <div className='mt-[30px] ml-[150px] absolute w-24 h-24 rounded-full border-dashed border-2 border-purple-500' 
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(90deg) translate(0, -190px)' }}/>
      <div
        className="mt-[30px] ml-[150px] absolute w-20 h-20 rounded-full text-white font-bold 
        flex items-center justify-center bg-purple-600 flex-col rotate-180"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(90deg) translate(0, -190px)' }}>
          
        <div className="text-white font-semibold text-center" style={{transform: 'rotate(270deg)' }}>
            <p  style={{fontSize:'9px'}}>Decision</p>
            <p style={{fontSize:'9px'}}>making Skill</p></div>
        </div>
    
        <div className="absolute inline-block  mt-[160px] ml-[140px]" style={{transform:'rotate(93deg)'}}>
          <div
              style={{marginRight: '10px',position: 'absolute',width: '0',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '100px solid #CEC2EB'}}>
          </div>

          <div
              style={{ marginLeft: '0px', position: 'relative',width: '0',marginTop:'70px',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '30px solid white' }}>
          </div>
        </div>  
    
    


    {/*fourth triangle */}
    <div className='mt-[100px] ml-[130px] absolute w-24 h-24 rounded-full border-dashed border-2 border-purple-500' 
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(135deg) translate(0, -190px)' }}/>
      <div
        className="mt-[100px] ml-[130px] absolute w-20 h-20 rounded-full flex items-center bg-purple-600  border-2"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(135deg) translate(0, -190px)' }}>
          
          <div className="text-white font-semibold text-center" style={{ marginLeft:'15px' ,transform: 'rotate(225deg)' }}>
            <p  style={{fontSize:'9px' }}>Communi-</p>
            <p style={{fontSize:'9px'}}>cation Skill</p></div>
          </div>
    
      <div className="absolute inline-block  mt-[270px] ml-[90px]" style={{transform:'rotate(140deg)'}}>
          <div
              style={{marginRight: '10px',position: 'absolute',width: '0',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '100px solid #CEC2EB'}}>
          </div>

          <div
              style={{ marginLeft: '0px', position: 'relative',width: '0',marginTop:'70px',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '30px solid white' }}>
          </div>
        </div>  

         

    {/*fifth triangle */}
    <div className='mt-[120px] ml-[60px] absolute w-24 h-24 rounded-full border-dashed border-2 border-purple-500' 
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(180deg) translate(0, -190px)' }}/>
      <div
        className="mt-[120px] ml-[60px] absolute w-20 h-20 rounded-full bg-purple-600 border-2"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(180deg) translate(0, -190px)' }}>
        
        <div className="text-white font-semibold text-center" style={{marginTop:'25px', transform: 'rotate(180deg)' }}>
            <p  style={{fontSize:'9px'}}>Innovative </p>
            <p style={{fontSize:'9px'}}>Capacity</p></div>
        </div>
    
        <div className="absolute inline-block  mt-[310px] ml-[-20px]" style={{transform:'rotate(182deg)'}} >
          <div
              style={{marginRight: '10px',position: 'absolute',width: '0',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '100px solid #CEC2EB'}}>
          </div>

          <div
              style={{ marginLeft: '0px', position: 'relative',width: '0',marginTop:'70px',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '30px solid white' }}>
          </div>
        </div>  
    

    {/*sixth triangle */}
    <div className='mt-[80px] ml-[-10px] absolute w-24 h-24 rounded-full border-dashed border-2 border-purple-500' 
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(225deg) translate(0, -190px)' }}/>
      <div
        className="mt-[80px] ml-[-10px] absolute w-20 h-20 rounded-full bg-purple-600  border-2"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(225deg) translate(0, -190px)' }}>
        
        <div className="text-white font-semibold text-center" style={{ marginTop:'23px',transform: 'rotate(-225deg)' }}>
            <p  style={{fontSize:'9px', marginTop:'10px'}}>Controlling </p>
            <p style={{fontSize:'9px',marginBottom:'7px'}}>capacity</p>
        </div>
    </div>
    
    <div className="absolute inline-block  mt-[255px] ml-[-120px]" style={{transform:'rotate(230deg)'}} >
      <div
        style={{marginRight: '10px',position: 'absolute',width: '0',height: '0',
        borderLeft: '45px solid transparent',
        borderRight: '45px solid transparent',borderRadius:'9px',
        borderBottom: '100px solid #CEC2EB'}}>
       </div>

       <div
          style={{ marginLeft: '0px', position: 'relative',width: '0',marginTop:'70px',height: '0',
          borderLeft: '45px solid transparent',
          borderRight: '45px solid transparent',borderRadius:'9px',
          borderBottom: '30px solid white' }}>
        </div>
    </div>  
    
    

    {/*seventh triangle */}
    <div className=' mt-[33px] ml-[-20px] absolute w-24 h-24 rounded-full border-dashed border-2 border-purple-500' 
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(270deg) translate(0, -190px)' }}/>
     <div
        className="mt-[33px] ml-[-20px] absolute w-20 h-20 rounded-full bg-purple-600  border-2 "
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(270deg) translate(0, -190px)' }}>
      
       <div className="text-white font-semibold text-center" style={{ marginTop:'25px' ,transform: 'rotate(90deg)' }}>
             <p  style={{fontSize:'9px' }}>Attractive</p>
             <p style={{fontSize:'9px'}}>Personality</p></div>
      </div>
    
      <div className="absolute inline-block  mt-[150px] ml-[-160px]" style={{transform:'rotate(270deg)'}} >
          <div
              style={{marginRight: '10px',position: 'absolute',width: '0',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '100px solid #CEC2EB'}}>
          </div>

          <div
              style={{ marginLeft: '0px', position: 'relative',width: '0',marginTop:'70px',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '30px solid white' }}>
          </div>
       </div>  
      

    {/*Eight - triangle */}
    <div className=' mt-[-30px] ml-[-20px] absolute w-24 h-24 rounded-full border-dashed border-2 border-purple-500' 
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(315deg) translate(0, -190px)' }}/>
      <div
        className=" mt-[-30px] ml-[-20px] absolute w-20 h-20 rounded-full bg-purple-600  border-2 "
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(315deg) translate(0, -190px)' }}>
        
        <div className="text-white font-semibold text-center" style={{ marginTop:'30px' ,transform: 'rotate(45deg)' }}>
            <p  style={{fontSize:'9px' }}>Equity</p>
        </div>
      </div>

    <div className="absolute inline-block  mt-[40px] ml-[-120px]" style={{transform:'rotate(310deg)'}} >
          <div
              style={{marginRight: '10px',position: 'absolute',width: '0',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '100px solid #CEC2EB'}}>
          </div>

          <div
              style={{ marginLeft: '0px', position: 'relative',width: '0',marginTop:'70px',height: '0',
              borderLeft: '45px solid transparent',
              borderRight: '45px solid transparent',borderRadius:'9px',
              borderBottom: '30px solid white' }}>
          </div>
        </div>  
    
    {/*GetMax circel */}
    <div className=' absolute mt-[195px] ml-[33px]'>
    <div className='absolute w-36 h-36 rounded-full border-dashed  border-2 border-purple-500' 
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(360deg) translate(0, 0)' }}/>
     <div className="absolute w-32 h-32 rounded-full flex items-center" style={{ background:'#4E00C0',top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
     <div className="text-white font-semibold text-center">
        <p  style={{fontSize:'9px', marginLeft:'45px'}}>GetMax</p>
        <p style={{fontSize:'9px', marginLeft:'45px'}}>Solutions</p></div>

        </div>
     </div>
    
    </div>

  )
}

export default octagon;
