import React from "react";
import { Link } from "react-router-dom";
const Filter = ({ filter }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filter.map((item) => (
        <div
          className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <Link to={`/shop/${item.id}`} className="relative h-64 bg-gray-50 overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.id}
              className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
            />

            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {item.brand}
            </span>
          </Link>

          <div className="p-5">
            <p className="text-sm text-gray-400 mb-1">
              {item.category}
            </p>

            <h4 className="text-lg font-semibold text-gray-800 truncate">
              {item.title}
            </h4>

            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-2xl font-bold text-primary">
                  ${item.price}
                </span>
              </div>

              <button className="bg-primary cursor-pointer text-white px-4 py-2 rounded-lg font-medium hover:bg-black transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;