import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center p-4">
      <h1 className="text-4xl font-bold py-8">Travel photos</h1>
      <div className="w-full grid grid-rows-none md:grid-cols-5 gap-4">
        <div className="w-full h-full md:col-span-3 md:row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            width={677}
            height={451}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full md:col-span-2 grid grid-rows-none sm:grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            width={215}
            height={217}
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            width={215}
            height={217}
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            width={215}
            height={217}
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
