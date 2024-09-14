import React from 'react'
import Heading from "../Shared/Heading";

import Brand1 from '../../assets/partnersImages/lambo.png';
import Brand2 from '../../assets/partnersImages/bmw.png';
import Brand3 from '../../assets/partnersImages/mclaren.png';
import Brand4 from '../../assets/partnersImages/tesla.png';
import Brand5 from '../../assets/partnersImages/subaru.png';
const Partner = () => {
  return (
    <div data-aos="zoom-out"  data-aos-delay="800" className='py-8 mt-24  md:block'>
        <div className="container  ">
              {/* Heading section */}
              <Heading title="Our Partners" subtitle={"Explore Our Partners's"}/>

            <div className="grid grid-cols-5  place-items-center  dark:bg-white/10 rounded-2xl">
                <img src={Brand1} alt="lambo" className=' hover:scale-105 duration-500'/>
                <img src={Brand2} width='125' alt="bmw" className=' hover:scale-105 duration-500'/>
                <img src={Brand3} alt="maclaren" className='dark:invert hover:scale-105 duration-500'/>
                <img src={Brand4} alt="tesla" className='dark:invert hover:scale-105 duration-500'/>
                <img src={Brand5} width='130' alt="subaru" className=' hover:scale-105 duration-500'/>
            </div>
        </div>
    </div>
  )
}

export default Partner
