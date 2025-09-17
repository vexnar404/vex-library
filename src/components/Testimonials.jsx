import React from 'react';

const testimonialsData = [
  {
    quote: '"The silence here is absolute. I was struggling to study at home, but at Karam\'s Library, my productivity has doubled. The individual carrels are a game-changer for focus."',
    author: 'Priya S., UPSC Aspirant',
  },
  {
    quote: '"The best part is the infrastructure—uninterrupted power and fast Wi-Fi are crucial for my online classes. It’s clean, comfortable, and full of other serious students, which is very motivating."',
    author: 'Rahul V., NEET Aspirant',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A374D] mb-4">
            Hear From Fellow Aspirants
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] p-8 rounded-md border-l-4 border-[#406882]"
            >
              <p className="italic mb-4 text-[#212529]">
                {testimonial.quote}
              </p>
              <cite className="block font-semibold not-italic text-[#1A374D]">
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