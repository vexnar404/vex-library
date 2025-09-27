import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import Logo from './../assets/logo.png';

const Header = () => {
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 50], [112, 64]);
  const logoHeight = useTransform(scrollY, [0, 50], [128, 56]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      style={{ height: headerHeight }}
      className="fixed top-0 left-0 z-50 w-full bg-[#f8f2dd] transition-all duration-300 ease-in-out shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="flex-shrink-0 cursor-pointer"
        >
          <motion.img
            src={Logo}
            alt="Karam's Library Logo"
            style={{ height: logoHeight }}
            className="transition-all duration-300 ease-in-out"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li className="group relative">
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="text-[#1A374D] font-medium text-lg hover:text-[#B15E28] transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#B15E28] group-hover:before:w-full before:transition-all before:duration-300"
              >
                Features
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="plans"
                smooth={true}
                duration={500}
                className="text-[#1A374D] font-medium text-lg hover:text-[#B15E28] transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#B15E28] group-hover:before:w-full before:transition-all before:duration-300"
              >
                Plans
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                className="text-[#1A374D] font-medium text-lg hover:text-[#B15E28] transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#B15E28] group-hover:before:w-full before:transition-all before:duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="visit"
                smooth={true}
                duration={500}
                className="text-[#1A374D] font-medium text-lg hover:text-[#B15E28] transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#B15E28] group-hover:before:w-full before:transition-all before:duration-300"
              >
                Visit Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl text-white bg-orange-500 cursor-pointer p-2.5 rounded-full">
          <Menu size='24' />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`md:hidden absolute top-full left-0 w-full bg-[#efe7d3] shadow-lg transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col text-center py-4">
          <li>
            <Link to="features" smooth={true} duration={500} onClick={handleNavLinkClick} className="block py-4 text-[#1A374D] font-medium hover:bg-gray-100">Features</Link>
          </li>
          <li>
            <Link to="plans" smooth={true} duration={500} onClick={handleNavLinkClick} className="block py-4 text-[#1A374D] font-medium hover:bg-gray-100">Plans</Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500} onClick={handleNavLinkClick} className="block py-4 text-[#1A374D] font-medium hover:bg-gray-100">Testimonials</Link>
          </li>
          <li>
            <Link to="visit" smooth={true} duration={500} onClick={handleNavLinkClick} className="block py-4 text-[#1A374D] font-medium hover:bg-gray-100">Visit Us</Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;