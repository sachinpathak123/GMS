import React from 'react'


interface SoftwarecardProps {
    lnk: string;
}

const Softwarecard: React.FC<SoftwarecardProps> = ({lnk}) => {
  return (
    
               
            <div className="my-6 bg-white w-[136px] h-[150px] rounded-[12px] overflow-hidden shadow-lg text-center p-6  border-b">
                <img
                    className="h-20 w-20 mx-auto mb-2 pt-4"
                    src={lnk}
                    alt="Randy Robertson"
                />
            </div>            
  )
}

export default Softwarecard

