import React from "react";

const Graph = () => {
  return (
    <div className='bg-white w-screen h-full py-8'>
      <div className="soft-header" id="soft-mainHeader">
        <p className="soft-head1 ps-3 md:ps-10 py-2 md:py-10 font-extrabold">A trusted partner</p>
        <p className="text-black p-2 text-xl md:text-3xl text-center">
          for organizing committed to improving the RCM system through
          technology
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img src="/graph.png" alt="an image" className="w-1/2 h-1/2 py-16" />
      </div>
    </div>
  );
};

export default Graph;
