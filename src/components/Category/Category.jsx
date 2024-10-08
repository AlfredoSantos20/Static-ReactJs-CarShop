import React from 'react'
import Button from "../Shared/Button";
import Heading from "../Shared/Heading";
import Image1 from '../../assets/bannerImages/mags.png';
import Image2 from '../../assets/bannerImages/exausts.png';
import Image3 from '../../assets/bannerImages/spoiler.png';

const Category = () => {
  return (
    <div className='py-8'>
      
      <Heading title="Car Part's" subtitle={"Available parts"}/>
         
        <div  className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {/* First col */}
              <div data-aos="fade-up"
                     data-aos-delay="0" title='Mags' className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70
               text-white rounded-3xl relative h-[320px] flex items-end'>
                <div >
                  <div className='mb-4'>
                    <p className='mb-[2px] text-gray-300'>₱5,000</p>
                    <p className='text-2xl font-semibold mb-[2px]'>Gold</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Mags</p>
                    <Button
                  
                    text="Shop now"
                    bgColor={"bg-brandWhite"}
                    textColor={"text-black"}
                    />
                  </div>
                </div>
             
                <img src={Image1} alt="" title='Mags'
                className='w-[200px] absolute top-[50px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] lg:top-[40px] right-0 bottom-0 '/>
              </div>
              {/* Second col */}
              <div  data-aos="fade-up"
                     data-aos-delay="200" title='Exhaust' className=' py-10 pl-5 bg-gradient-to-br from-sky-800/90 to-sky-800/70
               text-white rounded-3xl relative h-[320px] flex items-end  '>
                <div >
                  <div className='mb-4'>
                    <p className='mb-[2px] text-white-300'>₱50,000</p>
                    <p className='text-2xl font-semibold mb-[2px]'>Catback</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Exhaust </p>
                    <Button
                    text="Shop now"
                    bgColor={"bg-brandWhite"}
                    textColor={"text-brandBlue"}
                    />
                  </div>
                </div>
                <img src={Image2} alt="" title='Exhaust'
                className='w-[240px] absolute top-[50px] right-0 
                lg:top-[40px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]'/>
              </div>
              
              {/* Third col */}
              <div data-aos="fade-up"
                     data-aos-delay="400" title='Spoiler' className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/80
               text-white rounded-3xl relative h-[320px] flex items-end'>
                 <div >
                  <div className='mb-4'>
                    <p className='mb-[2px] text-white-300'>₱20,000</p>
                    <p className='text-2xl font-semibold mb-[2px]'>Carbon</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Spoiler </p>
                    <Button
                    
                    text="Shop now"
                    bgColor={"bg-brandWhite"}
                    textColor={"text-primary"}
                    />
                  </div>
                </div>
                <img src={Image3} alt="" title='Spoiler'
                className='w-[400px] absolute top-15 -transalte-y-1/2  -right-0 
                lg:top-[40px]   drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] '/>
              </div>
             
            </div>
        </div>
    </div>
  )
}

export default Category
