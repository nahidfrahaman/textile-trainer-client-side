import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError()

    return (
        <div className='text-center mt-8 bg-red-300 p-4'>
            <h3 className="text-5xl text-black font-bold mb-4">Opps!</h3>
            <h1 className='text-8xl'><span className='text-blue-500'>4</span>0<span className='text-blue-500'>4</span></h1>
            <p className='text-3xl text-black font-bold mb-4'>{error.statusText|| error.message}</p>
           <div className=''>
           <Link className='w-100 px-6 py-1 bg-blue-500 border rounded-lg' to='/'> Go to home  </Link>
           </div>

        </div>
    );
};

export default Errorpage;