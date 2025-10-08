import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faRobot
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#102332] text-[#e0e0e0] py-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          
          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">
              About Vex's Library
            </h4>
            <p className="text-sm">
              Your premium self-study space in New Delhi, designed for serious aspirants who demand a peaceful and productive environment.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="list-none p-0 text-sm">
              <li className="mb-2"><a href="#features" className="hover:text-[#B15E28] transition-colors">Features</a></li>
              <li className="mb-2"><a href="#plans" className="hover:text-[#B15E28] transition-colors">Plans</a></li>
              <li className="mb-2"><a href="#testimonials" className="hover:text-[#B15E28] transition-colors">Testimonials</a></li>
              <li className="mb-2"><a href="#visit" className="hover:text-[#B15E28] transition-colors">Visit Us</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Contact Us
            </h4>
            <p className="flex items-center mb-2 text-sm">
              <FontAwesomeIcon icon={faPhone} className="text-[#B15E28] mr-3" />
              099999 XXXXX
            </p>
            <p className="flex items-center text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#B15E28] mr-3" />
              vex.library@gmail.com
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-[#406882] pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#ccc]">
          <p className="text-center md:text-left mb-2 md:mb-0">
            © 2025 Vex's Library. All Rights Reserved.
          </p>
          <p className="flex items-center text-center md:text-right">
            Dev <FontAwesomeIcon icon={faRobot} className="mx-1 text-sm" />: Arpit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;