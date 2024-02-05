import React from 'react'

function Header() {
  return (
    <div className=" px-36 py-12" >
      <div className='bg-metrics font-inter py-12 px-12 rounded-md'>
        <p className="text-center font-semibold py-4 text-6xl">Our Metrics Tells the Story</p>
        <p className="text-center text-lg mt-4 font-thin">Our Metrics component givs you inside scoop on your success and helps you stay on top of your game in style</p>
        <div className='flex items-start justify-center'>
          {/* <table className="mt-12 ml-32">
            <tr>
              <td><div className="bg-purple-700 w-1 h-16 ml-10"/></td>
              <td className='flex-col'>
                <p className='font-bold text-2xl ml-2'>10k+</p>
                <p style={{fontSize:'12px',marginLeft:'10px'}}>Websites Launched</p>
                </td>
                <td><div className="bg-purple-700 w-1 h-16 ml-20"/></td>
              <td className='flex-col'>
                <p className='font-bold text-2xl ml-2'>931k+</p>
                <p style={{fontSize:'12px',marginLeft:'10px'}}>Projects created with Anima</p>
                </td>
                <td><div className="bg-purple-700 w-1 h-16 ml-24"/></td>
              <td className='flex-col'>
                <p className='font-bold text-2xl ml-2'>240k+</p>
                <p style={{fontSize:'12px',marginLeft:'10px'}}>New users joined Anima</p>
                </td>
                <td><div className="bg-purple-700 w-1 h-16 ml-32"/></td>
              <td className='flex-col'>
                <p className='font-bold text-2xl ml-2'>12k+</p>
                <p style={{fontSize:'12px',marginLeft:'10px'}}>Teams used Anima</p>
                </td>
            </tr>
          </table> */}
        <div className='inline-flex gap-24 py-16'>
          <div className='inline-flex'>
        <div className="bg-purple-700 w-1 h-16"/>
        <div className='flex-col'>
                <h2 className='font-bold font-inter text-3xl ml-2'>10k+</h2>
                <p style={{fontSize:'16px',marginLeft:'10px'}} className='font-inter'>Websites Launched</p>
                </div>
                </div>
                <div className='inline-flex'>
        <div className="bg-purple-700 w-1 h-16"/>
        <div className='flex-col'>
                <h2 className='font-bold font-inter text-3xl ml-2'>931k+</h2>
                <p style={{fontSize:'16px',marginLeft:'10px'}} className='font-inter'>Projects created with Anima</p>
                </div>
                </div>
                <div className='inline-flex'>
        <div className="bg-purple-700 w-1 h-16"/>
        <div className='flex-col'>
                <h2 className='font-bold font-inter text-3xl ml-2'>240k+</h2>
                <p style={{fontSize:'16px',marginLeft:'10px'}} className='font-inter'>New users joined Anima</p>
                </div>
                </div>
                <div className='inline-flex'>
        <div className="bg-purple-700 w-1 h-16"/>
        <div className='flex-col'>
                <h2 className='font-bold font-inter text-3xl ml-2'>12k+</h2>
                <p style={{fontSize:'16px',marginLeft:'10px'}} className='font-inter'>Teams used Anima</p>
                </div>
                </div>
        </div>
        </div>
      </div>
    </div>
  )
}

//style={{backgroundColor:'#F0F0F0',width:'950px',height:'250px',marginTop:'50px',marginLeft:'200px',borderRadius:'15px'}}
export default Header;
