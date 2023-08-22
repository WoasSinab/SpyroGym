import React, { useState } from 'react'
import data from './data'

const Category = () => {
    // accordion 
    const [select,setSelected] = useState(3);
    const handleClick = (index) => {
        if (index !== select) {
            setSelected(index);
         } else {
           setSelected(null);
        }
     };
    //  bg accordion style
    const divStyle = (imgSrc) => ({
        
      })

  return (
    <>
    <div className='w-full flex flex-col items-center justify-center border-none py-20 px-8'>
        <h1 className='text-slate-50 font-semibold text-2xl sm:text-3xl pb-20'> Find what moves you</h1>
        <div className='w-full h-full grid gap-x-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 sm:grid-rows-2 grid-rows-4 gap-y-10 pt-20'>
            {/* acordian image */}
            {data.map((item, index)=> {
                return (
                    <div className='flex items-center justify-center'>
                 <section onClick={() => handleClick(index)} style={{backgroundImage: `url(${select == index ? `${item.bigImg}` : `${item.miniImg}`})`}} className={`bg-cover bg-no-repeat bg-center duration-300 bg-red-500 relative h-96 rounded-tl-[50px] ${ select == index ? "w-72 sm:w-80" : " w-40"}`}>
                    {/* fade */}
                    <span className={`w-full h-full duration-300 absolute rounded-tl-[50px] flex items-end justify-center ${ select == index ? "active-fade" : "fade-normal"}`}>
                        <div className='absolute w-full h-1/3 gap-x-4 px-1 text-slate-50 flex items-end justify-center'>
                            {/* title */}
                            <span className={`text-2xl h-full duration-300 flex text-center justify-center ${ select == index ? " items-center" : "items-end py-10"}`}>{item.title}</span>
                            {/* caption */}
                            <span className={`text-xs h-full duration-300 flex items-center justify-center ${select == index ? "inline" : " hidden"}`}>{item.caption}</span>
                        </div>
                    </span>
                </section>
                    </div>
                )
            })}

        </div>
    </div>
    </>
  )
}

export default Category