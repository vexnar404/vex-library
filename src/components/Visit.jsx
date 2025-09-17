import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt,
  faPhone,
  faClock,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

const Visit = () => {
  return (
    <section id="visit" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A374D] mb-4">
            Visit Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="map-container overflow-hidden rounded-lg shadow-xl" style={{ height: '400px', width: '100%' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.233276777068!2d77.06694279999999!3d28.622769800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05006d4901c1%3A0xed4c7adefdcabed0!2sKaram&#39;s%20Library!5e0!3m2!1sen!2sin!4v1758054195883!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="contact-info">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A374D] mb-4">
              Our Location
            </h3>
            <p className="mb-4 text-[#212529]">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#B15E28] mr-3" />
              1st Floor, E-10, East Metro, Block A, Ram Datt Enclave, Uttam Nagar, New Delhi, Delhi, 110059
            </p>
            <p className="mb-4 text-[#212529]">
              <FontAwesomeIcon icon={faPhone} className="text-[#B15E28] mr-3" />
              099112 96636
            </p>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A374D] mb-4 mt-6">
              Hours
            </h3>
            <p className="mb-2 text-[#212529]">
              <FontAwesomeIcon icon={faClock} className="text-[#B15E28] mr-3" />
              Monday - Sunday: 7:00 AM - 10:00 PM
            </p>
            <p className="text-sm italic text-[#555]">
              <FontAwesomeIcon icon={faInfoCircle} className="text-[#B15E28] mr-3" />
              <span className='font-bold'>Please note:</span> We are closed on the last Sunday of every month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;