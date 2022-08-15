import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto py-8">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      {slides.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-100 ease-in duration-1000'
                : 'opacity-0'
            }
          >
            <div onlef className="relative flex justify-center px-4">
              <FontAwesomeIcon
                className="absolute top-[calc(50%-17px)] left-[30px] text-white cursor-pointer select-none z-[2] fa-2xl"
                icon={faArrowCircleLeft}
                onClick={prevSlide}
              />
              {index === current && (
                <Image
                  src={item.image}
                  alt="/"
                  width={1440}
                  height={600}
                  objectFit="cover"
                />
              )}
              <FontAwesomeIcon
                className="absolute top-[calc(50%-17px)] right-[30px] text-white cursor-pointer select-none z-[2] fa-2xl"
                icon={faArrowCircleRight}
                onClick={nextSlide}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
