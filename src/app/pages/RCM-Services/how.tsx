import React from 'react';

function How() {
  return (
    <div className="bg-gray-100 pt-8 mt-8">
      <h1 className="font-bold ml-48 pl-4 text-xl">How we do it?</h1>
      <div className="flex justify-around bg-gray-100 mx-48 mt-12">
        <div className="w-72">
          <img className="w-10 h-10 my-4" src="mobile_web_design.png" alt="M&W" />
          <h2 className="font-bold my-4">Mobile & Web Design</h2>
          <p className="my-4">Need a website or mobile app? I can create beautiful websites or mobile apps based on your content, or redesign your old website to improve user engagement or achieve your business goals.</p>
          <h2 className="font-bold">Get an estimate</h2>
        </div>
        <div className="w-72">
          <img className="w-10 h-10 my-4" src="graphicdesign.png" alt="M&W" />
          <h2 className="font-bold my-4">Graphic Design</h2>
          <p className="my-4">Need art for your project? I can create beautiful art, designs based on your project requirements such as business cards, digital banners, icons, logos, hand-drawn characters, abstracts, textures, etc.</p>
          <h2 className="font-bold">Get an estimate</h2>
        </div>
        <div className="w-72">
          <img className="w-10 h-10 my-4" src="frontend.png" alt="M&W" />
          <h2 className="font-bold my-4">Frontend Development</h2>
          <p className="my-4">Already have the design? I can create static websites such as landing pages, company sites, and custom websites with minimal JavaScript. Will deliver well-documented code.</p>
          <h2 className="font-bold">Get an estimate</h2>
        </div>
      </div>
    </div>
  );
}

export default How;
