import React from 'react'

function Header() {
  return (
    <div className="mt-[-40px]">
      <div className='bg-purple-200 w-screen h-[270px] rounded-md'>
        <p className="text-center font-bold text-2xl">Our Metrics Tells the Story</p>
        <p className="text-center text-1xl mt-4 font-semibold">Our Metrics component givs you inside scoop on your success and helps you stay on top of your game in style</p>
        <div>
          <table className="mt-12 ml-32">
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
          </table>
        </div>
      </div>
    </div>
  )
}

//style={{backgroundColor:'#F0F0F0',width:'950px',height:'250px',marginTop:'50px',marginLeft:'200px',borderRadius:'15px'}}
export default Header
