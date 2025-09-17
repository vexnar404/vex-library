import React from 'react';

function ProSol() {
  return (
    <section id="problem-solution" className="bg-white py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1A374D] text-center md:col-span-2 mb-4">
          Stop Fighting for Focus. Start Studying Effectively.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A374D] mb-4">
              The Problem
            </h3>
            <p className="text-[#212529] leading-relaxed">
              Studying at home is full of family interruptions. Local cafes are too loud, crowded, and expensive. When every hour of preparation counts, you can't afford to waste time in a distracting environment.
            </p>
          </div>
          <div>
            <h3 className="font-['Playfair_Display'] mt-1 text-2xl font-bold md:pl-6 text-[#1A374D] mb-4">
              The Solution
            </h3>
            <p className="text-[#212529] leading-relaxed md:border-l-4 md:border-[#B15E28] md:pl-6">
              We built Karam's Library for one reason: to provide the perfect atmosphere for deep focus. With our strict "Maintain Silence" policy, comfortable infrastructure, and community of like-minded students, your productivity is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProSol;