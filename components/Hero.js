import React from 'react';

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-cover bg-center custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/70 z-[2]" />

      <div className="p-5 text-white z-[2]">
        <h2 className="text-3xl sm:text-5xl md:font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;
