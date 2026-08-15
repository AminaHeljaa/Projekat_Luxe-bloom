// src/components/ProductSlider.js
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductSlider = ({ title, products }) => {
  const scrollLeft = (id) => {
    document.getElementById(id).scrollLeft -= 300;
  };

  const scrollRight = (id) => {
    document.getElementById(id).scrollLeft += 300;
  };

  const sliderId = `slider-${title.replace(/\s+/g, '-')}`;

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center uppercase">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scrollLeft(sliderId)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>

        <div
          id={sliderId}
          className="flex overflow-x-scroll scroll-smooth space-x-4 px-6"
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 text-center"
            >
              <img
                src={item.slika}
                alt={item.naziv}
                className="h-40 object-cover mx-auto rounded"
              />
              <h3 className="mt-2 font-bold text-lg">{item.naziv}</h3>
              <p className="text-gray-600">{item.opis}</p>
              <button className="mt-2 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">
                Naruči
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollRight(sliderId)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;

