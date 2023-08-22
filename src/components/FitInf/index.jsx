import React from "react";

const FitInf = () => {
  return (
    <section className='relative'>
      <div>
        {/* Start Add Text To Section */}
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-white font-semibold text-4xl p-6 text-center'>Fit for your lifestyle</h1>
          <div className='lg:w-1/2 h-full '>
            <p className='text-white leading-7 p-6 tracking-wider md:text-center '>
              Wake up with a sunrise meditation, sweat it out with lunchtime HIIT, or unwind with an evening flow.
              You’ll find movement for every mood with classes sorted by time, style, and skill level.
            </p>
          </div>
        </div>
        {/* End Add Text To Section */}

        {/* Start Add Img To Section */}
        <div className='sm:my-10 m-8 flex justify-center items-center relative'>
          <img src='https://s8.uupload.ir/files/rectangle-10_b6qd.png' alt='InfPic' className='z-10' />
          <img src='https://s8.uupload.ir/files/rectangle-11_utvg.png' alt='Shape' className='absolute -bottom-4 z-5' />
        </div>
        {/* End Add Img To Section */}

        {/* Start Add Shape To Section */}
        <div className='flex flex-col items-end m-24 z-20'>
          <div className='w-1/5 h-16 shrink-0 bg-orange-600/10 right-0 bottom-36 absolute'></div>
          <div className='w-3/5 h-16 shrink-0 bg-orange-600/10 right-0 bottom-10 absolute'></div>
        </div>
        {/* End Add Shape To Section */}
      </div>
    </section>
  );
};

export default FitInf;
