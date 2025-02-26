// src/components/Testimonials/Testimonials.tsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: "Eloise Juniper", location: "Liverpool, UK", review: "Fxvibe Changed My Life!", payout: "$3,940", rating: "5.0" },
    { name: "Richard Harry", location: "Munich, Germany", review: "Made Simple and Easy!", payout: "$2,175", rating: "4.9" }
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Hear What Traders Think</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-lg w-64">
            <h3 className="text-2xl font-bold">{testimonial.name}</h3>
            <p className="text-purple-600">{testimonial.location}</p>
            {/* <p className="italic">"{testimonial.review}"</p> */}
            <p>Payout: {testimonial.payout}</p>
            <p>Rating: {testimonial.rating} ⭐</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
