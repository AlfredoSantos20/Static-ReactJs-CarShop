import React from 'react'

import {
    FaCarSide,
    FaWallet,
    FaCheckCircle,
    FaHeadphones ,
} from 'react-icons/fa'

const ServiceDetails = [
    {
        id:1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-emerald-500'/>,
        title: "Free Shipping",
        description: "Free Shipping to Nearby Areas",
    },
    {
        id:2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-emerald-500'/>,
        title: "Safe Transactions",
        description: "Retrieve Trasactions History",
    },
    {
        id:3,
        icon: <FaWallet className='text-4xl md:text-5xl text-emerald-500'/>,
        title: "Secure Payment",
        description: "All Payment Secured",
    },
    {
        id:4,
        icon: <FaHeadphones className='text-4xl md:text-5xl text-emerald-500'/>,
        title: "Customer Service 24/7",
        description: "Chat with us 24/7",
    },
];
const Services = () => {
  return (
    <div className=''>
        <div className='container mt-14 md:my-20'>
           <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
            
            {ServiceDetails.map((data) => (
            <div className='flex flex-col items-start sm:flex-row gap-4'>
            {data.icon}
                <div>
                    <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                    <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                </div>
            </div>
            ))}
            
           
           </div>
        </div>
    </div>
  )
}

export default Services
