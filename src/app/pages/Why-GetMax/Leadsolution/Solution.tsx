import React from "react";
import Solcard from "./Pinkcard";
import Bluecard from "./Bluecard";
import Officecard from "./Officecard";
import Pinkcard from "./Pinkcard";
import Featurelist from "./Featurelist";

const Solution = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-items-center w-screen pr-10 pt-40 pl-6 py-52">
      <div className="flex-col justify-items-start mx-4 text-black font-red-hat-display pt-7">
        <div className=" w-3/4 text-black font-red-hat-display text-[20px] font-thin">
          <p>Why GETMAX SOLUTIONS</p>
        </div>
        <div className="ml-[-5px]  ">
          <p>
            <span className="text-[40px] text-purple-700 font-bold font-red-hat-display ">
              THE MOST LEADING
            </span>{" "}
            <br />
            <span className="text-black text-[25px] font-semibold font-source-sans-pro ml-[-0px]">
              SOLUTION FOR YOU
            </span>
          </p>
        </div>
        <div className=" flex flex-row mt-3">
          <hr className="rotate-90 w-[55px] h-0.5 mt-[30px] ml-[-30px] bg-purple-600 text-transparent mx-[-10px]"></hr>
          <p className="font-extralight text-left w-[80%] text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            architecto enim, vitae fuga adipisci nisi illo ratione sint harum
            molestiae ex, tempora eos in officiis debitis accusamus at,
            reiciendis error?
          </p>
        </div>
        <div className="flex flex-row mt-10 lg:mt-44 ml-1 w-full">
          <div className="flex flex-col pr-20">
            <Featurelist data="24/7 Call Services Available" />
            <Featurelist data="Great Skilled Consultant" />
            <Featurelist data="Expert Team Members" />
            <Featurelist data="Reasonable Project Price" />
          </div>
          <div className="flex flex-col">
            <Featurelist data="Leading Business Solution" />
            <Featurelist data="Business is the best plan" />
            <Featurelist data="How to improve business" />
            <Featurelist data="Services we provide" />
          </div>
        </div>
        <div className="ml-[-4px]  mt-20 ">
          <button className=" px-6 bg-purple-700 text-white rounded-md h-10 capitalize font-thin hover:bg-custom-purple">
            let’s work together
          </button>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className="flex flex-row max-lg:flex-wrap gap-2 lg:gap-0 pb-1.5">
          <Officecard imgsource="/widecard.png" />
          <Pinkcard
            data=" We offer month-to-month contracts"
            imgsource="/rec.png"
          />
          <Bluecard
            data="We Reduce Costs by Upto 75% and maximize return on investment"
            imgsource="/bluecard.png"
          />
          <Solcard data=" We Provide Freedom of Choice" imgsource="/rec.png" />
        </div>
        <div className="flex flex-row max-lg:flex-wrap gap-2 lg:gap-0 pb-1.5">
          <Pinkcard
            data=" Fewer claim,rejections, denials and faster payents for customers"
            imgsource="/rec.png"
          />
          <Bluecard
            data=" Proven Quality Control Process"
            imgsource="/bluecard2.png"
          />
          <Officecard imgsource="/widecard2.png" />
          <Pinkcard
            data=" your Every questions will be addressed by your own Account Manager"
            imgsource="/rec.png"
          />
        </div>
        <div className="flex flex-row max-lg:flex-wrap gap-2 lg:gap-0 pb-1.5">
          <Bluecard
            data="We adhere to HIGHEST QUALITY standard measures for RCM operations which sets us apart"
            imgsource="/bluecard2.png"
          />
          <Officecard imgsource="/widecard3.png" />
          <Pinkcard
            data=" TRANSPARENCY in work process.You will always have full control over your account"
            imgsource="/rec.png"
          />
          <Bluecard
            data=" We PARTNERED with major industry vendors to ease implementation turn-around-time"
            imgsource="/bluecard.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
