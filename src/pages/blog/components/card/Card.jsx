import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <>
   
    <Link to="/blog/id">
      <div className="flex justify-center items-start min-h-screen mb-0">
    <div className="max-w-[720px] mx-auto">
        <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
            <a 
                target="_blank" 
                href="https://www.material-tailwind.com/docs/html/card" 
                className="block w-full px-4 py-2 text-center text-slate-700 transition-all " >
              
            </a>
        </div>

     
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                    src="https://previews.123rf.com/images/hywards/hywards1503/hywards150300062/37463043-financial-background.jpg"
                    alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Title
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Posted on 2 days ago
                    </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    With plenty of talk and listen time, voice-activated Siri access, and an
                    available wireless charging case.
                </p>
            </div>
         
        </div>
    </div>
</div>
</Link>

</>
  )
}

export default Card