import React from 'react';

const Button = (props) => {
  return (
    <>
      <button
        className="md:w-44 w-36 bg-orange-600/60 h-11 relative shaper text-slate-50 font-medium text-base md:text-lg"
      >
        <span className='w-full h-full hover:bg-orange-500 duration-200 bg-orange-600 absolute top-0 left-0 shape flex items-center justify-center'>
        {props.text}
        </span>
      </button>
    </>
  );
};

export default Button;
