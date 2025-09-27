import React from 'react';
import lq from '../assets/lq.png';
import rq from '../assets/rq.png';

const testimonialsData = [
  {
    quote: 'The silence here is absolute. I was struggling to study at home, but at Karam\'s Library, my productivity has doubled. The individual carrels are a game-changer for focus.',
    author: 'Priya S., UPSC Aspirant',
  },
  {
    quote: 'The best part is the infrastructure—uninterrupted power and fast Wi-Fi are crucial for my online classes. It’s clean, comfortable, and full of other serious students, which is very motivating.',
    author: 'Rahul V., NEET Aspirant',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-7xl  mb-4">
            loved by students
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-5 sm:mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#efe8d6] p-8 rounded-md"
            >
              <div className="relative italic mb-4 text-2xl">
                <img src={lq} alt="&ldquo;" className='w-[30px] h-[30px] my-2' />
                {testimonial.quote}
                <img src={rq} alt="&rdquo;" className='w-[30px] h-[30px] my-2 ml-auto' />
              </div>
              <cite className="block font-semibold text-right">
                {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;