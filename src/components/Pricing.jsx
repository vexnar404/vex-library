import React from 'react';
import {motion} from 'framer-motion'

const pricingData = [
  {
    title: 'Daily Pass',
    price: '₹100',
    features: ['One Day Access', 'High-Speed Wi-Fi', 'Dedicated Desk'],
    isPopular: false,
    buttonText: 'Get Your Day Pass',
  },
  {
    title: 'Monthly Pass',
    price: '₹900',
    subtitle: 'onwards',
    features: ['Full Month Access', 'High-Speed Wi-Fi', 'Dedicated Desk', 'Personal Locker Access'],
    isPopular: true,
    buttonText: 'Choose Monthly Plan',
  },
];

function Pricing() {
  return (
    <motion.section 
    id="plans" 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }} 
    className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A374D] mb-4">
            Flexible Plans for Every Student
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-10 text-center shadow-xl relative transition-transform duration-300 ${plan.isPopular ? 'border-2 border-[#B15E28] scale-105' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B15E28] text-white py-1.5 px-4 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A374D]">
                {plan.title}
              </h3>
              <p className="font-bold text-5xl text-[#1A374D] my-4">
                {plan.price}
                {plan.subtitle && (
                  <span className="font-normal text-2xl"> {plan.subtitle}</span>
                )}
              </p>
              
              <ul className="list-none p-0 my-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-3 text-[#212529]">✓ {feature}</li>
                ))}
              </ul>
              
              <a
                href="#"
                className="inline-block py-4 px-8 bg-[#B15E28] text-white font-semibold rounded transition-colors duration-300 hover:bg-[#8e4a1f] hover:shadow-lg"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 italic text-gray-600">
          For reserving a seat, ₹200/- extra.
        </p>
      </div>
    </motion.section>
  );
};

export default Pricing;