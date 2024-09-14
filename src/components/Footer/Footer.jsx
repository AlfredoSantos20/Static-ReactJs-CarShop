import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import myLogo from '../../assets/myLogo/mylogo.png';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FooterLinks = [
    {
      title: "Home",
      link: '/#',
    },
    {
      title: "About",
      link: '/#about',
    },
    {
      title: "Contact",
      link: '/#contact',
    },
    {
      title: "Event",
      link: '/#event',
    },
  ];

  const faqData = [
    {
      question: "What is Car Shop?",
      answer: "Car Shop is a static website that showcases various cars for sale. It’s a simple platform to explore different car models."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact support by visiting our contact page and filling out the form or emailing us directly."
    },
    {
      question: "Do I need to create an account?",
      answer: "No, you can browse the website and view all the cars without creating an account."
    },
  ];

  return (
    <div className='dark:bg-gray-950'>
      <div className='container'>
        <div className="grid md:grid-cols-3 pb-20 pt-5 ">
          {/* Company Details */}
          <div className='py-8 px-4'>
            <a href="#" title="Car Shop" className="text-emerald-500 font-semibold tracking-widest text-2xl capitalize sm:text-3xl">
              Car Shop
            </a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>This is a Static Car Shop Website.
              You can check my Profile & Portfolio below. </p>
            <div className='flex items-center mt-4'>
              <p className='text-gray-500 dark:text-white/70 mr-2'>Made by TazCoder: </p>
              {/* Trigger Modal */}
              <img
                title='TazCoder'
                src={myLogo}
                className='w-[70px] h-[70px] rounded-full hover:scale-105 cursor-pointer'
                alt="TazCoder Logo"
                onClick={toggleModal}
              />
            </div>
            <a
              className='text-white dark:hover:text-white inline-block bg-brandGreen/90 py-2 px-4 mt-4 text-sm rounded-full font-semibold  hover:bg-brandGreen/20 hover:scale-105 duration-500 '
              target='_blank'
              href='https://santos-alfredo-portfolio-yvv9.vercel.app/?fbclid=IwY2xjawFKc5FleHRuA2FlbQIxMAABHeUyG8onafBGlEszHNRGIbLkNPxt6ICjIVtHZYYAosxJ72kKsRmY55VLrQ_aem_6OYENCMuKazLLsT6K-5_7w'
            >
              Want to Check My Portfolio?
            </a>
          </div>

          {/* 1st Footer Links Section */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link}
                      className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* 2nd Footer Links Section with FAQ */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Frequently Asked Questions</h1>
              <div className="space-y-3">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-300 rounded-lg">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left px-4 py-3 dark:text-white text-gray-800 font-semibold focus:outline-none"
                    >
                      {faq.question}
                    </button>
                    {openIndex === index && (
                      <div className="px-4 py-3 dark:text-white text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                    
                  </div>
                ))}
              </div>
            </div>
                {/* 3rd Column Location/SocialLinks */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                    <FaLocationDot className='text-emerald-500 text-3xl ' />
                    <p className='text-gray-600 dark:text-gray-400'>Licab, Nueva Ecija Philippines</p>
                    </div>
                    <div className='flex items-center gap-3'>
                    <FaMobileAlt className='text-emerald-500 text-3xl' />
                    <p className='text-gray-600 dark:text-gray-400 '>+639958847884</p>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                    <a href='https://www.facebook.com/tazki.santosjr' target='_blank' rel='noreferrer'>
                        <FaFacebook className='text-blue-600 hover:text-blue-800 text-3xl' />
                    </a>
                    <a href='https://www.linkedin.com/in/alfredo-santos-jr-511921242/' target='_blank' rel='noreferrer'>
                        <FaLinkedin className='text-blue-600   hover:text-blue-800 text-3xl' />
                    </a>
                    <a href='https://www.upwork.com/' target='_blank' rel='noreferrer'>
                        <FaSquareUpwork className='text-green-500 hover:text-green-700 text-3xl' />
                    </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4 text-center">TazCoder</h2>
            <img src={myLogo} alt="TazCoder Logo" className="w-full h-auto mb-4" />
            <div className="flex justify-center">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
