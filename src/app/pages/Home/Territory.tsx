import { useState } from "react";

function Territory() {
  const [active, setActive] = useState(null);

  const handleClick = (e: any) => {
    setActive(e.target.id);
    window.open(`/#${e.target.id}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl px-8 py-4 text-center">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to Neurology &amp; Other Specialties
        </h1>
        <p className="text-xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-1 py-8">
          <div
            id="Neurology"
            onClick={handleClick}
            className={`w-full h-full font-semibold col-span-2 rounded-sm text-xl focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out ${
              active === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-gmm-purple text-custom-purple'
            }`}
          >
            <div className=' grid place-content-center p-2 py-3'> 
            <img src="./BRAIN.png" alt="brain image" className='w-12 h-12' />
            </div>
            Neurology
            <p className='font-normal text-xs m-5'>
              Lorem ipsum dolor sit amet repudiandae magni tempore libero quos saepe sit consectetur dolor recusandae.
              <br />
              <br />
              <a href="#" className='font-bold text-xs hover:text-white duration-300'>READ MORE</a>
            </p>
          </div>
          <div
            id="Cardiology"
            onClick={handleClick}
            className={`w-full h-full font-semibold lg:col-span-3 sm:col-span-1  md:col-span-1 rounded-sm text-xl focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out ${
              active === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-[#F3EFFE] text-custom-purple'
            }`}
          >
            <div className=' grid place-content-center p-2 py-3'> 
            <img src="./BRAIN.png" alt="brain image" className='w-12 h-12' />
            </div>
            Cardiology
            <p className='font-normal text-xs m-5 px-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quis repudiandae magni tempore libero quos saepe sit consectetur dolor recusandae.
              <br />
              <br />
              <a href="#" className='font-bold text-xs hover:text-white duration-300'>READ MORE</a>
            </p>
          </div>
          <div
            id="Neurology"
            onClick={handleClick}
            className={`w-full h-full font-semibold lg:col-span-2 sm:col-span-1  md:col-span-1 rounded-sm text-xl focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out ${
              active === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-custom-purple text-white'
            }`}
          >
            <div className=' grid place-content-center p-2 py-5'> 
            <img src="./mask.png" alt="brain image" className='w-10 h-10' />
            </div>
            Neurology
            <p className='font-light px-4 text-xs m-3'>
              Lorem ipsum dolor sit amet libero quos saepe sit consectetur dolor recusandae.
              <br />
              <br />
              <a href="#" className='font-bold py-5 text-xs hover:text-lp-purple duration-300'>READ MORE</a>
            </p>
          </div>
          <div
            id="Neurology"
            onClick={handleClick}
            className={`w-full h-full font-semibold lg:col-span-4 sm:col-span-1  md:col-span-1 rounded-sm text-xl focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out ${
              active === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-[#F3EFFE] text-custom-purple'
            }`}
          >
            <div className=' grid place-content-center p-2 py-3'> 
            <img src="./BRAIN.png" alt="brain image" className='w-12 h-12' />
            </div>
            Neurology
            <p className='font-normal text-xs m-7 px-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quis repudiandae magni tempore libero quos saepe sit consectetur dolor recusandae.
              <br />
              <br />
              <a href="#" className='font-bold text-xs hover:text-white duration-300'>READ MORE</a>
            </p>
          </div>
          <div
            id="Neurology"
            onClick={handleClick}
            className={`w-full h-full font-semibold lg:col-span-3 sm:col-span-1  md:col-span-1 rounded-sm text-xl focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out ${
              active === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-gmm-purple text-custom-purple'
            }`}
          >
            <div className=' grid place-content-center p-2 py-4'> 
            <img src="./BRAIN.png" alt="brain image" className='w-12 h-12' />
            </div>
            Neurology
            <p className='font-normal text-xs m-7 px-6'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quis repudiandae magni tempore libero quos saepe sit consectetur dolor recusandae.
              <br />
              <br />
              <a href="#" className='font-bold text-xs hover:text-white duration-300'>READ MORE</a>
            </p>
          </div>
          <div
            id="Neurology"
            onClick={handleClick}
            className={`w-full h-full font-semibold lg:col-span-3 sm:col-span-1  md:col-span-1 rounded-sm text-xl focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out ${
              active === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-gmm-purple text-custom-purple'
            }`}
          >
            <div className=' grid place-content-center p-2 py-4'> 
            <img src="./BRAIN.png" alt="brain image" className='w-12 h-12' />
            </div>
            Neurology
            <p className='font-normal text-xs m-7 px-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quis repudiandae magni tempore libero quos saepe sit consectetur dolor recusandae.
              <br />
              <br />
              <a href="#" className='font-bold text-xs hover:text-white duration-300'>READ MORE</a>
            </p>
          </div>
          <div
            id="Neurology"
            onClick={handleClick}
            className={`w-full h-full font-semibold lg:col-span-2 sm:col-span-1  md:col-span-1 rounded-sm text-xl focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out ${
              active === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-custom-purple text-white'
            }`}
          >
            <div className=' grid place-content-center p-2 py-5'> 
            <img src="./mask.png" alt="brain image" className='w-12 h-12' />
            </div>
            Neurology
            <p className="font-thin text-xs m-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              quis repudiandae magni tempore libero quos saepe sit consectetur
              dolor recusandae.
              <br />
              <br />
              <a href="#" className='font-bold text-xs hover:text-lp-purple duration-300'>READ MORE</a>
            </p>
          </div>
          <div
            id="Neurology"
            onClick={handleClick}
            className={`w-full h-full font-semibold lg:col-span-2 sm:col-span-1  md:col-span-1 rounded-sm text-xl focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out ${
              active === 'Neurology' ? 'bg-blue-500 text-white' : 'bg-[#F3EFFE] text-custom-purple'
            }`}
          >
            <div className=' grid place-content-center p-2 py-4'> 
            <img src="./BRAIN.png" alt="brain image" className='w-12 h-12' />
            </div>
            Neurology
            <p className='font-normal text-xs m-7 px-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quis repudiandae magni tempore libero quos saepe sit consectetur dolor recusandae.
              <br />
              <br />
              <a href="#" className='font-bold text-xs hover:text-white duration-300'>READ MORE</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Territory;
