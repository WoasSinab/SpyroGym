import React from 'react';
import data from '../Instructors/data';

const Instructors = () => {
  return (
    <>
      <section className='text-slate-50 pb-20 px-4 sm:px-10'>
        <h1 className='text-4xl w-full flex items-center justify-center pt-8 pb-12'>Instructors</h1>
        <div className='flex justify-center  gap-y-10 gap-x-8 flex-auto flex-wrap min-[980px]:flex-nowrap'>
          {/*  */}
          {data.map((data)=> {
            return (
              <span className='w-48 md:w-auto'>
              {/* img */}
              <span className='flex items-center justify-center'>
                <img className='border-2  border-orange-600' src={data.img} alt="Instructors" />
              </span>
              {/* name */}
              <h1 className='w-full flex justify-center items-center pt-4 text-sm sm:text-xl'>{data.name}</h1>
              {/* position */}
              <h3 className='w-full flex justify-center items-center pt-4 text-xs  '>{data.position}</h3>
            </span>
            )
          })}
          {/*  */}
        </div>
      </section>
    </>
  );
};

export default Instructors;
