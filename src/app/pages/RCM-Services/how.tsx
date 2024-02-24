import React from 'react';

function How() {
  return (
    <div className="bg-gray-100 py-8 mt-8">
    <div className="text-center">
        <h3 className="font-bold text-center text-xl">How we do it ?</h3>
    </div>
    <div className="flex md:flex-row flex-col justify-around bg-gray-100 md:mx-48 mt-12 items-center ">

        <div className="w-64 mb-4 md:mb-0 flex flex-col items-center justify-center text-center md:items-start">
            <img className="w-10 h-10 my-2" src="/mobile_web_design.png" alt="M&W" />
            <h3 className="font-bold my-2">Mobile & Web Design</h3>
            <p className="my-2 md:text-left">Need a website or mobile app? I can create beautiful websites or mobile apps based on your
                content, or redesign your old website to improve user engagement or achieve your business goals.</p>
            <h3 className="font-bold mb-6 md:mb-0">Get an estimate</h3>
        </div>
        
        
        
        <div className="w-64 mb-4 md:mb-0 flex flex-col items-center justify-center text-center md:items-start">
            <img className="w-10 h-10 my-2" src="/graphicdesign.png" alt="M&W" />
            <h3 className="font-bold my-2">Graphic Design</h3>
            <p className="my-2 md:text-left">Need art for your project? I can create beautiful art, designs based on your project
                requirements such as business cards, digital banners, icons, logos, hand-drawn characters, abstracts,
                textures, etc. </p>
            <h3 className="font-bold mb-6 md:mb-0">Get an estimate</h3>
        </div>


        <div className="w-64 mb-4 md:mb-0 flex flex-col items-center justify-center text-center md:items-start">
            <img className="w-10 h-10 my-2" src="/frontend.png" alt="M&W" />
            <h3 className="font-bold my-2">Frontend Development</h3>
            <p className="my-2 md:text-left">Already have the design? I can create static websites such as landing pages, company
                sites, and custom websites with minimal javascript. Will deliver a well-documented code. </p>
            <h3 className="font-bold mb-6 md:mb-0">Get an estimate</h3>
        </div>
    </div>
</div>
  );
}

export default How;
