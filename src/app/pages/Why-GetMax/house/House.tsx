import './House.css';
import React from 'react';

function House() {
  return (
    <>
    <div className="flex flex-col items-center justify-center relative">
      <div className="flex">
        <span className="text-center text-2xl text-purple-700 font-bold my-12 welcome-text">
          WELCOME
        </span>
        <span className="text-center text-2xl text-black font-bold my-12 getmax-text ml-2">
          TO GETMAX
        </span>
      </div>
      <p className="mt-1 mb-10 text-1xl px-10 text-purple-400 font-semibold">
        consectetur adipiscing elit. Suspendisse sodales pretium ipsum, ac pulvinar sem semper sit amet. Pellentesque pulvinar, ante et suscipit dapibus, lorem lacus sodales ipsum, vitae porttitor ligula augue vel mi. Aenean fringilla in ligula a faucibus. Duis sollicitudin tempus lectus nec consequat. Nunc eu lacinia erat. Curabitur in cursus eros. Proin luctus, odio sed faucibus.
      </p>
      <div className="outer_circle">
      <div className="inner_circle">
    <img src="/024-clinic.png" alt='Image' className="w-48 house"/>
</div>

      </div>
      <div className="bg-slate-50 p-3 rounded-2xl bg-opacity-55 shadow-md absolute top-80 left-80 transparent">
        <p className="font-bold w-36 text-center text-sm">Service Excellence</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-slate-100 rounded-2xl p-2 w-56 bg-opacity-55 shadow-md absolute bottom-64 left-56 transparent">
          <p className="font-bold text-sm">Resolve Challenges with a full range of Technical abilities</p>
        </div>
        <div className="bg-slate-100 rounded-2xl p-3.5 w-56 bg-opacity-55 shadow-md absolute top-3/4 left-60 transparent">
          <p className="font-bold text-sm">Prioritize our people and include all</p>
        </div>
        <div className="bg-slate-100 rounded-2xl p-3.5 w-56 bg-opacity-55 shadow-md absolute bottom-1 left-72 transparent">
          <p className="font-bold text-sm">Optimization and Continuos improvement</p>
        </div>
        <div className="bg-slate-100 rounded-2xl p-3.5 w-56 bg-opacity-55 shadow-md absolute right-64 top-80 transparent">
          <p className="font-bold text-sm text-center">Value Driven work culture</p>
        </div>
        <div className="bg-slate-100 rounded-2xl p-3.5 w-56 bg-opacity-55 shadow-md absolute right-56 bottom-64 transparent">
          <p className="font-bold text-sm text-center">99.9% Transparency and Productivity</p>
        </div>
        <div className="bg-slate-100 rounded-2xl p-3.5 w-56 bg-opacity-55 shadow-md absolute right-60 bottom-36 transparent">
          <p className="font-bold text-sm text-center">Variety of Services</p>
        </div>
        <div className="bg-slate-100 rounded-2xl p-3.5 w-56 bg-opacity-55 shadow-md absolute right-80 bottom-1 transparent">
          <p className="font-bold text-sm text-center">99.9% Efficiency and Accuracy</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default House;
