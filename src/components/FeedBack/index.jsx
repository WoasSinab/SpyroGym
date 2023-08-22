import React from 'react';
import data from './data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './../FeedBack/index.css';

const FeedBack = () => {
  return (
    <main
      style={{
        backgroundImage: `url('https://s8.uupload.ir/files/rectangle-12_xap5.png')`,
      }}
    >
      {/* header */}
      <h1 className="text-white font-semibold text-3xl sm:text-4xl py-10 px-8 text-center">
        Client’s Feedback
      </h1>

      {/* container */}
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        grabCursor={true}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          550: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="flex items-center justify-center py-10 px-10 text-white "
      >
        {data.map((item) => (
          <SwiperSlide
            className=" h-[26rem] bg-black/50 flex flex-col border-b-[10px] border-orange-600 items-center justify-end pb-8 mb-8"
            key={item.id}
          >
            {/* feddback  */}
            <p className="sm:text-xl flex items-center text-base tracking-wide capitalize leading-8 h-full px-4 sm:px-10">
              {item.Text}
            </p>

            {/* Star rate*/}
            <div className="py-5 w-full flex  px-4 sm:px-10">
              <img src="https://s8.uupload.ir/files/frame_58_1ixk.png" alt="" />
            </div>

            {/* User Img & Name */}
            <div className="flex flex-row pt-5 items-center py-4 pl-4 pr-2 sm:pl-10 w-full">
              <img src={item.Img} alt="feedback" className="mr-6" />
              <h1 className="text-lg">{item.Name}</h1>
            </div>

            {/* Button Shape */}
            {/* <div className='h-2.5 w-full bg-orange-600'></div> */}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* End FeedBack Div */}
    </main>
  );
};

export default FeedBack;
