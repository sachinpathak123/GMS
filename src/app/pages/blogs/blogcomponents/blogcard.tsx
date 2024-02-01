import React from 'react'
import '../blog.css'
import Image from 'next/image';


interface blogcardProps {
    title: string;
    desc: string;
    lnk: string;
    imgsource: string;
    user: string;
    date: string;
    shares: string;
}

const blogcard: React.FC<blogcardProps> = ({title, desc, lnk, imgsource,user,date,shares}) => {
  return (
    <div className='w-11/12'>
      <div className="  ">
                <a href="#">
                    <img className="rounded-3xl object-cover h-[210px] sm:h-[160px] md:h-[185px] lg:h-[140px] xl:h-[250px] 2xl:h-[300px] w-full" src={lnk} alt="" />
                </a>
                <div className="p-5 pl-1">
                    <a href="#">
                        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                    </a>
                 
                    <div className="flex items-center gap-4 mb-2">
                        <Image className='w-[10%] h-1/2 mt-6 mb-2' src={imgsource} alt="user" width="0" height="0"/>
                        <div className="font-medium dark:text-white">
                            <div className='pt-[15px] text-[17px]'>{user} ---- <span className='text-[13px] font-normal'>{date}   &#10150;{shares}</span></div>
                        </div>
                    </div>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">{desc}</p>
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Learn more &#8594;</a>
                </div>
            </div>
    </div>
  )
}

export default blogcard