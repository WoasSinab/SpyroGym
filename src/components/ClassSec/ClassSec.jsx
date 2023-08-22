import React from "react";
import data from "./data.js";
import Button from "../Button";

const ClassSec = () => {
  return (
    <main style={{ backgroundImage: `url('https://s8.uupload.ir/files/rectangle-12_xap5.png')` }}>
      <div className='flex justify-center items-center flex-col font-sans'>
        <h1 className='text-white font-semibold text-4xl m-10'>Classes</h1>
        {/* Start Classes Div */}
        <div className='flex flex-row max-md:flex-col text-white p-6 gap-5'>
          {data.map((item) => (

            // {/* Start Class Box */}
            <div className='flex flex-col' key={item.id}>
              <img src={item.img} alt={item.title} className='mb-4' />
              <div className='flex flex-row justify-between text-gray-300 pb-4 font-normal text-sm'>

                  {/* category */}
                <div className="flex flex-row gap-2">
                  {/* Dot Svg */}
                  <img src="https://svgshare.com/i/vH_.svg" alt="" className=""/>
                  <p>{item.category}</p>
                </div>
                    {/* Inf Of Students  */}
                <div className='flex flex-row gap-2'>
                  {/* Users Svg */}
                  <img src='https://svgshare.com/i/vEe.svg' className='h-5 w-5' />
                  <p>{item.Students}</p>
                </div>

              </div>
              
              <div className='flex flex-row justify-between pb-4'>
                <h1 className='font-semibold text-xl'>{item.Name}</h1>

                <div className='flex flex-row opacity-80 gap-1 mt-1 sm:mt-0'>
                  {/* Dot Svg */}
                  <img src='https://svgshare.com/i/vGv.svg' className='h-5 w-5' />
                  <p className='font-normal sm:text-sm text-xs'>{item.Time}</p>
                </div>

              </div>

              <div className='pb-4 font-normal text-sm'>
                <p>Instructor: {item.Instructor}</p>
              </div>

              <div className='pb-4 font-normal text-sm'>

                <div className='flex flex-row'>
                  <p className='pb-1'>No. of Classes: {item.NumOfClassess}</p>
                </div>

                <div>
                  <p className='pb-1'>Difficulty: {item.Difficulty}</p>
                </div>

              </div>

              <div className="">
                <Button text='Learn more'/>
                {/* <Button text='Learn more'/> */}
              </div>

            </div>
            // {/* End Class Box */}

          ))}

        </div>
         {/* End Classes Div */}

            <div className="my-16">
              <Button text='See All'/>
            </div>

      </div>

    </main>
  );
};

export default ClassSec;