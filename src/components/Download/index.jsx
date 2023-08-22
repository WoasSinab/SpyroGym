import React from 'react';
import { AppStoreButton, GooglePlayButton } from 'react-mobile-app-button';
const Download = () => {
  const APKUrl = {
    googlePlay: "https://play.google.com/",
    appStore: "https://www.apple.com/app-store/",
  };
  return (
    <>
      <div className="w-full h-max bg-orange-600 flex flex-col md:flex-row-reverse gap-8 items-center justify-center px-10 py-8">
        {/* mobile mokup */}
        <div className="max-w-80 flex items-center justify-center">
          <img
            className="aspect-auto"
            src="https://s8.uupload.ir/files/group_11_763q.png"
            alt="mokup"
          />
        </div>
        {/* download link */}
        <span className="text-slate-50 font-semibold flex flex-col gap-y-8">
          <h1 className="text-3xl lg:text-5xl">Download the most loved fitness app</h1>
          <h3 className="text-sm lg:text-base">Start your fitness journey with us. Join the cult!</h3>
          <div className='flex items-center justify-between md:justify-normal md:gap-8 gap-8 flex-wrap lg:pt-10'>
            <GooglePlayButton url={APKUrl.googlePlay} theme={'dark'} className={'custom-style'} />
            <AppStoreButton url={APKUrl.appStore} theme={'dark'} className={'custom-style'} />
          </div>
        </span>
      </div>
    </>
  );
};

export default Download;
