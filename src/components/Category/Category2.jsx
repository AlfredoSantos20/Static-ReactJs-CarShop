import React from 'react'
import Button from "../Shared/Button";
import Image4 from '../../assets/bannerImages/tire.png';
import Image5 from '../../assets/bannerImages/caliper.png';
import Image6 from '../../assets/bannerImages/wheel.png';

const Category2 = () => {
  return (
    <div className='py-8'>
       <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {/* Fourt col */}
              <div data-aos="fade-up"
                     data-aos-delay="0" className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-teal-500/90 to-teal-500/80
               text-white rounded-3xl relative h-[320px] flex items-end'>
                 <div >
                  <div className='mb-4'>
                    <p className='mb-[2px] text-white-300'>₱5,000</p>
                    <p className='text-2xl font-semibold mb-[2px]'>Sailun 195/55</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Tire </p>
                    <Button
                  
                    text="Shop now"
                    bgColor={"bg-brandWhite"}
                    textColor={"text-teal-500"}
                    />
                  </div>
                </div>
                <img src={Image4} alt="" title='Tire'
                className='w-[300px] absolute  -transalte-y-1/2  -right-20
                lg:top-[20px]   drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] '/>
              </div>
              {/* Fifth col */}
              <div  data-aos="fade-up"
                     data-aos-delay="200" title='Caliper' className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/70
              text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                  <div className='mb-4'>
                    <p className='mb-[2px] text-white'>₱5,000</p>
                    <p className='text-2xl font-semibold mb-[2px]'>Brembo</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Caliper</p>
                    <Button
                  
                    text="Shop now"
                    bgColor={"bg-brandWhite"}
                    textColor={"text-brandYellow"}
                    />
                  </div>
                </div>
                <img src={Image5} alt="" title='Caliper'
                className='w-[200px] absolute top-[50px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] lg:top-[40px] right-0 '/>
              </div>
              {/* Sixth col */}
              <div data-aos="fade-up"
                     data-aos-delay="400" title='Steering Wheel' className='py-10 pl-5 bg-gradient-to-br from-purple-500/90 to-purple-500/70
              text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                  <div className='mb-4'>
                    <p className='mb-[2px] text-white'>₱20,000</p>
                    <p className='text-2xl font-semibold mb-[2px]'>Carbon Fiber</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Wheel</p>
                    <Button
                  
                    text="Shop now"
                    bgColor={"bg-brandWhite"}
                    textColor={"text-brandPurple"}
                    />
                  </div>
                </div>
                <img src={Image6} alt="" title='Steering Wheel'
                className='w-[180px] absolute top-[50px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] lg:top-[40px] right-0 '/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Category2
