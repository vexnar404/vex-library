import React from 'react';

function ProSol() {
  return (
    <section id="problem-solution" className="my-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className='flex flex-col sm:flex-row items-center justify-center mx-3 lg:mx-20'>
          <div className='mb-5 sm:mb-0 '>
            <h1 className='text-5xl sm:text-7xl'>
              our solution to a much bigger problem
            </h1>
          </div>
          <div className='md:ml-30 sm:px-4 text-lg'>
            <p>
              Are you also tired of the family interruptions at home, noisy crowded cafes, and <span className='text-orange-700'>wasting precious preparation time</span> in distracting spaces?
            </p>
            <p>
              <span className='font-semibold'>That's exactly why we built Karam's Library,</span> to give you the <span className='text-orange-700'>perfect atmosphere for deep focus.</span>
            </p>
            <p>
              With strict silence, comfy setup, and a community of serious students, we make your productivity the priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProSol;