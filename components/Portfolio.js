import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center p-4">
      <h1 className="text-4xl font-bold py-8">Travel photos</h1>
      <div className="w-full grid grid-rows-none md:grid-cols-5 gap-4">
        <div className="w-full h-full md:col-span-3 md:row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1659944975073-453265ccf3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="/"
            width={677}
            height={451}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full md:col-span-2 grid grid-rows-none sm:grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1659944975073-453265ccf3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="/"
            layout="responsive"
            width={215}
            height={217}
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1659944975073-453265ccf3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="/"
            layout="responsive"
            width={215}
            height={217}
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1659944975073-453265ccf3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="/"
            layout="responsive"
            width={215}
            height={217}
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1659944975073-453265ccf3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="/"
            layout="responsive"
            width={215}
            height={217}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
