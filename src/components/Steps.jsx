import React from 'react';

const stepsData = [
  {
    step: '1',
    title: 'Choose Your Plan',
    description: 'Select a plan that fits your schedule, from a single day pass to a full monthly membership.',
  },
  {
    step: '2',
    title: 'Get Your Dedicated Desk',
    description: "We'll assign you your personal study carrel where you can settle in and focus.",
  },
  {
    step: '3',
    title: 'Achieve Your Study Goals',
    description: 'Make the most of our peaceful environment and give yourself the best chance for success.',
  },
];

function Steps() {
  return (
    <section id="steps" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A374D] mb-4">
            Get Started in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stepsData.map((step, index) => (
            <div key={index} className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#1A374D] rounded-full flex items-center justify-center">
                <span className="text-white font-['Playfair_Display'] font-bold text-3xl">
                  {step.step}
                </span>
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A374D] mb-2">
                {step.title}
              </h3>
              <p className="text-[#212529]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;