import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const data= useLoaderData()
    const {title,id,}=data;

    return (
        <div className='bg-gray-200 w-2/3 mx-auto min-h-screen flex items-center justify-center'>
            <div>
            <p className="text-center text-xl text-green-400 p-4">Course NO: {id}</p>
            <p className='text-center text-4xl'>{title}</p>
            <h2 className='text-2xl p-8 text-center text-green-400'>thanks for subscribe</h2>
            </div>
        </div>
    );
};

export default CheckOut;