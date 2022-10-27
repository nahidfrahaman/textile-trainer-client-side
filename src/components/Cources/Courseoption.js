import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ref = React.createRef();

const Courseoption = () => {
    const data= useLoaderData()
    const {details,image,title,rating,id}=data
    return (
        <div className='w-2/3 mx-auto mt-8 bg-slate-50 mb-12 border shadow-lg p-4'>
             <h1 className='text-center text-4xl font-bolder p-1'>{title}
            </h1>
            <div className='flex justify-around mt-2 '>
             <button className='btn px-2  bg-green-400 border rounded'>Dowload</button>
            </div>
            <div className='mt-3'>
            <img className='w-2/3 mx-auto ' src={image} alt="" />
            </div>
            <div className='mt-5 p-1 text-center'>
                <p className='text-sm'> <span className='text-yellow-400'>CourseDetails:</span> {details.slice(0,200)}</p>
            </div>
            <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:py-0">
      <div className="grid  sm:grid-cols-1 lg:grid-cols-1">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
          
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
           {rating.count}
          </h6>
          <Link className='mb-2 font-bold text-md'>Download</Link>
          
        </div>
    </div>
    </div>
            <div className='text-center mt-4'>
               <Link  to={`/checkout/${id}`} className='btn px-2 py-2  rounded-lg bg-green-400 border'>Acces Premium</Link>
            </div>
            
        </div>
    );
};

export default Courseoption;