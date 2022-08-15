import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Instagramming = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      {/* {Overlay} */}
      <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FontAwesomeIcon icon={faInstagram} className="fa-xl" />
        </p>
      </div>
    </div>
  );
};

export default Instagramming;
