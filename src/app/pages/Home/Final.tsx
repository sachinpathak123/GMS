
const FlipCard=({tag,info}:{tag:String,info:String})=>{
  return(
    <div className={"card"}>
      <div className={"content"}>
        <div className={"front"}>{tag}</div>
        <div className={"back"}>{info}</div>
      </div>
    </div>
  )
}

function Final() {
  const circles = [
    "Decision -making skill","Communi -cation  Skill","Innovative Capacity","Controlling capacity","Attractive Personality","Equity","Education & Experience","Managerial Knowledge & Experience"
  ];
  return (
    <section className={" h-[150vh] relative flex items-center justify-center"}>
      <ul className=" translate-x-6 -translate-y-14">
        {circles.map((circle, index) => {
          const thehta = ((2 * Math.PI) / circles.length) * index;
          const radius = 300;
          const x = radius * Math.cos(thehta);
          const y = radius * Math.sin(thehta);
          return (
            <li
              key={index}
              className=" absolute w-32 h-32 rounded-full overflow-hidden border-2 border-dashed border-[#4E00C0B2] "
              style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }}
            >
              <FlipCard tag={circle} info={"Info of Skill"} />
            </li>
          );
        })}
      </ul>
      <ul className=" translate-x-10 -translate-y-11">
        {circles.map((_, index) => {
          const thetha = ((2 * Math.PI) / circles.length) * index;
          const radius = 175;
          const x = radius * Math.cos(thetha);
          const y = radius * Math.sin(thetha);
          const rotate = (thetha * 180) / Math.PI + 90;
          return (
            <li
              key={index}
              className={" absolute h-24 w-24 bg-[#EFEBFF]"}
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                rotate: `${rotate}deg`,
                clipPath: "polygon(50% 0%, 100% 100%, 50% 75%, 0 100%)",
              }}
            ></li>
          );
        })}
      </ul>
      <div className=" w-44 h-44 p-[2px] rounded-full border-2 overflow-hidden border-dashed border-[#460E98]">
        <div className=" w-full h-full rounded-full bg-[#460E98] flex items-center justify-center text-base font-normal leading-normal text-white">GetMax Solutions</div>
      </div>
    </section>
  );
}

export default Final;
