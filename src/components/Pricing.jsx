import React from 'react';
import {motion} from 'framer-motion'

const pricingData = [
  {
    title: 'Daily Pass',
    desc: "Access the library for a full day of uninterrupted study.",
    price: '₹100',
    subtitle: '/day',
    features: ['One Day Access', 'High-Speed Wi-Fi', 'Dedicated Desk'],
    isPopular: false,
  },
  {
    title: 'Monthly Pass',
    desc: "For regular learners who wants study access all month.",
    price: '₹900',
    subtitle: 'onwards',
    features: ['Full Month Access', 'High-Speed Wi-Fi', 'Dedicated Desk', 'Personal Locker Access'],
    isPopular: true,
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
    className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-7xl  mb-2">
            Plans
          </h2>
          <p className='text-xl'>
            that everyone can afford
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-5 sm:mx-auto">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`bg-[#efe8d6] hover:-translate-y-3 rounded-lg p-10 text-center shadow-xl relative transition-transform duration-300 ${plan.isPopular ? 'border-2 border-[#B15E28] scale-105' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-700 text-white py-1.5 px-4 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-3xl md:text-4xl">
                {plan.title}
              </h3>
              <p className='text-lg mt-2 mb-4'>
                {plan.desc}
              </p>
              <p className="text-5xl text-[#9e5423]">
                {plan.price}
              </p>
              <p className='text-lg text-gray-500 mt-1 mb-3'>
              {plan.subtitle}
              </p>
              
              <ul className="list-none p-0 my-5">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-1.5 text-[#212529]">✓ {feature}</li>
                ))}
              </ul>
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