import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = new Date(targetDate).getTime() - now;

    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const timeRemaining = calculateTimeLeft();
      setTimeLeft(timeRemaining);

      if (timeRemaining.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return <p className="text-white text-lg font-bold">Offer Expired</p>;
  }

  return (
    <div className='flex  space-x-4 text-white left-0'>
      <div className='text-center'>
        <span className='text-2xl font-bold'>{timeLeft.days}</span>
        <div>Days</div>
      </div>
      <div className='text-center'>
        <span className='text-2xl font-bold'>{timeLeft.hours}</span>
        <div>Hours</div>
      </div>
      <div className='text-center'>
        <span className='text-2xl font-bold'>{timeLeft.minutes}</span>
        <div>Minutes</div>
      </div>
      <div className='text-center'>
        <span className='text-2xl font-bold'>{timeLeft.seconds}</span>
        <div>Seconds</div>
      </div>
    </div>
  );
};

const FixBanner2 = ({ data }) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
      <div className='container'>
        <div
          // style={{ backgroundColor: data.bgColor }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500'
        >
          {/* first col */}
          <div className='p-6 sm:p-8'>
            <p data-aos="slide-right" className='text-3xl font-semibold'>{data.discount}</p>
            <h1 data-aos="zoom-out" className='uppercase text-4xl lg:text-7xl font-bold'>
              {data.title}
            </h1>
            <p  data-aos="fade-up" className='text-sm'>{data.date}</p>
          </div>

          {/* second col */}
          <div  data-aos="zoom-in" className='h-full flex items-center'>
            <img
              src={data.image}
              alt=''
              className='scale-150 w-[250px] md:w-[380px] mx-auto drop-shadow-2xl object-cover -translate-y-3'
            />
        
          </div>
         
          {/* third col */}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p  data-aos="zoom-out" className='font-bold text-xl'>{data.title2}</p>
            <p data-aos="zoom-in" className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
            <p data-aos="zoom-out" className='text-sm tracking-wide leading-5'>{data.description}</p>
            <div data-aos="fade-up" data-aos-delay="500">
            <CountdownTimer targetDate={data.expirationDate} />
            </div>
            <div data-aos="fade-up" data-aos-offset="0">
              <button
                style={{ color: data.bgColor }}
                className='bg-white font-semibold py-2 px-4 rounded-full cursor-pointer hover:scale-105 duration-300'
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixBanner2;
