import React from 'react';


function principle() {
  const hexagonStyle = {
    width: '150px',
    height: '120px',
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    backgroundColor: '#6B46C1',
    position: 'relative' as 'relative',
    zIndex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const hexagonContainerStyle = {
    position: 'realtive' as 'relative',  
    top: '50%',          
    left: '50%',         
    transform: 'translate(-50%, -50%)',
    marginLeft:'700px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "400px",
  };
  const innerHexagonStyle = {
    width: '350px',
    height: '100px',
    clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
    backgroundColor: 'white',
    position: 'absolute' as 'absolute',
    filter: 'brightness(98%)',
  };

  const shadowStyle = {
    filter: 'drop-shadow(4px 4px 4px rgba(12, 12, 12, 0.73))',
    zIndex: '2',
  };

  return (
    <div style={hexagonContainerStyle} className='max-sm:hidden'>
      <div>
        <p className="text-purple-700 font-bold ml-[-30px] mt-12 text-2xl">The Four Principles of Design Thinking</p>
        <div className="bg-black w-28 h-1 ml-[-30px] mt-2" />
      </div>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-col mt-36'>
        
          <div style={hexagonStyle} className="mb-2" />
          <span style={{ ...shadowStyle,position:'absolute',left: '-45px', top: '198px' }}>
            <div style={{ ...innerHexagonStyle}}>
              <p className="text-center text-1xl text-purple-700 font-bold">THE AMBIGUITY RULE</p>
              <table>
                <tr>
                  <td><p style={{fontSize:'12px',marginLeft:'30px',marginTop:'12px'}}>ambiguity is inevitable it cannot br removed nor <br/>oversimplified</p></td>
                  <td><p style={{fontSize:'25px',marginLeft:'14px'}} className="text-purple-700 font-bold">02</p></td>
                </tr>
                </table>
            </div>
          </span>
          <div style={hexagonStyle} />
          <span style={{...shadowStyle,position:'absolute', left: '335px', top: '142px'}}>
          <div style={{ ...innerHexagonStyle }}>
            <p className="text-center text-1xl text-purple-700 font-bold">THE HUMAN RULE</p>
            <table>
                <tr>
                <td><p style={{fontSize:'25px',marginLeft:'14px',marginTop:'-10px'}} className="text-purple-700 font-bold">01</p></td>
                  <td><p style={{fontSize:'12px',marginLeft:'20px',marginTop:'5px'}}>no matter what the context all design activity is <br/>social in nature and any social innovation will <br/>bring us to "human-centric-point-of-view"</p></td>
                </tr>
                </table>
          </div>
          </span>
        </div>
        <div className='flex flex-col mt-8'>
          <div style={hexagonStyle} className="mb-2" />
          <span style={{ ...shadowStyle ,position:'absolute',left: '338px', top: '270px'}}>
            <div style={{ ...innerHexagonStyle }}>
              <p className="text-center text-1xl text-purple-700 font-bold">THE TANGIBILITY RULE</p>
              <table>
                <tr>
                  <td><p style={{fontSize:'12px',marginLeft:'35px',marginTop:'7px'}}>making ideas tangible in form of prototypes<br/>enables designers to communicate them more efficiently</p></td>
                  <td><p style={{fontSize:'25px',marginRight:'17px',marginBottom:'12px'}} className="text-purple-700 font-bold">04</p></td>
                </tr>
                </table>
            </div>
          </span>
          <div style={hexagonStyle} />
          <span style={{...shadowStyle,position:'absolute',right: '689px', top: '326px'}}>
          <div style={{ ...innerHexagonStyle}}>
            <p className="text-center text-1xl text-purple-700 font-bold">THE REDESIGN RULE</p>
            <table>
                <tr>
                <td><p style={{fontSize:'25px',marginLeft:'14px',marginTop:'-10px'}} className="text-purple-700 font-bold">03</p></td>
                  <td><p style={{fontSize:'12px',marginLeft:'20px',marginTop:'5px'}}>all design is redesign while technology and social circumsatances may change and evolve, basic <br/>human needs remain unchanged</p></td> 
                </tr>
                </table>
          </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default principle;
