import React, { useEffect, useState } from 'react';
import {
  FormatQuote,
  ArrowBackIos,
  ArrowForwardIos,
} from '@mui/icons-material';

const testimonials = [
  {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet.",
    name: "Courtney Alexander",
    position: "Position, Company name",
    image: "/Foto/profile.png",
  },
  {
    text:
      "Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate.",
    name: "Michael Smith",
    position: "CEO, Example Inc.",
    image: "/Foto/profile.png",
  },
  {
    text:
      "Diam integer in. Vitae fermentum sed id. Ullamcorper a vitae feugiat. Non tellus magna ut vitae.",
    name: "Sophia Lee",
    position: "Designer, Agency X",
    image: "/Foto/profile.png",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Автослайд каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What our clients say</h2>

        <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-8 text-left transition duration-500">
          <FormatQuote className="text-indigo-500 mb-4" fontSize="large" />

          <p className="text-gray-700 text-base mb-6">{testimonial.text}</p>

          <div className="flex items-center mt-6 gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </div>

          {/* Стрелки */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <button onClick={prevSlide} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
              <ArrowBackIos fontSize="small" />
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button onClick={nextSlide} className="p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow">
              <ArrowForwardIos fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
