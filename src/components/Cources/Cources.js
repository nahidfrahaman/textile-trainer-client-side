import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from './CourseDetails';

const Cources = () => {
    const datas  = useLoaderData()
    console.log(datas)
    
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3'>
            <div className='p-4 mb-8 sm:order-10'>
                 <h1 className=' text-3xl font-semibold mt-4 text-blue-500'> Our Courses</h1>
                 {
                    datas.map(course => <li key={course.id} className='mt-5 '><Link to={`/courseoption/${course.id}`} className='text-[#FEC32D] py-1 bg-gray-900 px-2 underline rounded'>{course.title}</Link></li>)
                 }
            </div>
            <div className='grid  grid-cols-1 lg:grid-cols-2 gap-4 w-5/6 mx-auto mt-8 col-span-2 order-1'>
                  {
                    datas.map(data=> <Card
                        data={data} 
                        key={data.id}></Card>)
                  }
            </div>
        </div>
    );
};

export default Cources;