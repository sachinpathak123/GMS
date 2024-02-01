import React from 'react'
import '../blog.css'
import Image from 'next/image';


interface blogcardProps {
    title: string;
    desc: string;
    lnk: string;
    imgsource: string;
    user: string;
}

const blogcard: React.FC<blogcardProps> = ({title, desc, lnk, imgsource,user}) => {
  return (
    <div className='w-11/12'>
      <div className="  ">
                <a href="#">
                    <img className="rounded-3xl object-cover h-[210px] sm:h-[160px] md:h-[185px] lg:h-[140px] xl:h-[210px] 2xl:h-[300px] w-full" src={lnk} alt="" />
                </a>
                <div className="p-5 pl-1">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                    </a>
                    <span>
                        <Image className='w-[15%] h-1/2 mt-9 mb-2' src={imgsource} alt="user" width="0" height="0"/>
                    </span>
                    <h4>{user}</h4>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">{desc}</p>

                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Learn more &#8594;</a>
                </div>
            </div>
    </div>
  )
}

export default blogcard