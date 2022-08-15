import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 0) {
        setColor('white');
        setTextColor('black');
      } else {
        setColor('transparent');
        setTextColor('white');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: color }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: textColor }} className="font-bold text-4xl">
            Capture
          </h1>
        </Link>
        <ul style={{ color: textColor }} className="hidden sm:flex">
          <li className="p-4 ">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 ">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4 ">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 ">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          style={{ color: !showNav && textColor }}
          className="block sm:hidden z-10 cursor-pointer"
          onClick={toggleNav}
        >
          {showNav ? (
            <FontAwesomeIcon icon={faClose} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </div>
        <div
          className={
            showNav
              ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200'
              : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200'
          }
        >
          <ul>
            <li
              onClick={toggleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={toggleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={toggleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={toggleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
