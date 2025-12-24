import React from "react";

const Torch = ({ torch }) => {
  const { product_name, price, image } = torch;

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <figure className="bg-gray-100 flex items-center justify-center p-4">
        <img
          src={image}
          alt={product_name}
          className="w-48 h-48 object-contain"
        />
      </figure>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{product_name}</h2>
        <p className="text-orange-500 text-lg font-bold mt-2">${price}</p>
        <button className="mt-4 w-full bg-orange-400 text-white font-semibold py-2 rounded-lg hover:bg-orange-500 transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Torch;
