"use client"

import Image from 'next/image';
import './case.css'
import Dropdowns from './casecomponents/dropdowns';
import Search from './casecomponents/search'

//import MediaCard from 'E:/getmax/GMS/src/app/pages/case/casecomponents/images'



const items = [
    {
        title: "Filter by Topic",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    },
    {
        title: "Filter by Solutions",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    },
    {
        title: "Sort by",
        field1: "Accounts",
        field2: "Support",
        field3: "Licence",
        field4: "Sign Out",
    }
]
export default function Case () {
    return (
        <>
            <div >
                <Image src="/case.jpg" alt="case" className="w-full h-[70vh]" width="1519" height="0"/>
            </div>

            <div>
                {items.map(item => (
                        <Dropdowns 
                            title={item.title}
                            field1={item.field1}
                            field2={item.field2}
                            field3={item.field3}
                            field4={item.field4}
                        />
                    ))
                }
            </div> 
        <div>

            <Search />
        </div>

        </>
    );
};

