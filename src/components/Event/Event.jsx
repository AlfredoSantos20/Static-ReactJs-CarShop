import React from 'react'
import Heading from "../Shared/Heading";

// Importing images
import Img1 from '../../assets/eventImages/buying.png';
import Img2 from '../../assets/eventImages/chills.jpg';
import Img3 from '../../assets/eventImages/crash.jpg';
const EventData = [
    {
        title:'How to choose best car for me?', 
        subtitle:'Choosing the best car for you is one that fits your purpose, budget, size needs, fuel preferences, desired features, reliability, comfort, and resale value.',
        published:'Feb 23 2024 by TazCoder',
        image: Img1,
    },
    {
        title:'How to rest while driving?', 
        subtitle:'To rest while driving, take regular breaks, adjust your seat for comfort, stay hydrated, use cruise control when possible, listen to relaxing music, and avoid heavy meals to prevent drowsiness.',
        published:'June 14 2024 by TazCoder',
        image: Img2,
    },
    {
        title:'How to avoid accidents while driving?', 
        subtitle:'To avoid accidents while driving, stay focused, follow traffic rules, maintain a safe distance from other vehicles, drive at a safe speed, avoid distractions (like using your phone), be aware of your surroundings, and adjust your driving to weather and road conditions.',
        published:'Aug 17 2024 by TazCoder',
        image: Img3,
    },

];
const Event = () => {
  return (
    <div className='my-12'>
        <div className='container'>
            {/* Heading section */}
        <Heading title="Recent Events" subtitle={"Explore Our Event's"}/>

           {/* Event section */}
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
           gap-y-8 sm:gap-4 md:gap-7'>

            {/* Event Card */}
            {  EventData.map((data) => (
                    <div key={data.title} className='bg-white
                    dark:bg-gray-900'>
                        {/* image section */}
                        <div className='overflow-hidden rounded-2xl mb-2'>
                        <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105
                        duration-500' src={data.image} alt=''/>
                        </div>
                        {/* content section */}
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-600 
                            dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))
             }
           </div>
        </div>
    </div>
  )
}

export default Event
