import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className=''>
           <div className="relative">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 sm:h-5/6	lg:h-[450px]">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-3/6 mx-auto mx-auto max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 text-center">
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-[#FEC32D] sm:text-4xl sm:leading-none header-title">
                Train YourSelf  To Update <br className="hidden md:block" />
               {' '} 
                <span className="text-teal-accent-400">Your Skill</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Textile one most fabulous sector , if you want develope your career
                try it now Textile one most fabulous sector , if you want develope your career
                try it now
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Header;