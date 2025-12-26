import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const SneakerDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get("/products_1.json").then((res) => {
      const foundProduct = res.data.find((item) => item.id.toString() === id);
      setProduct(foundProduct);
    });
  }, [id]);

  if (!product) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-lg">
        {/* Image */}
        <img
          src={product.image}
          alt={product.product_name}
          className="w-full h-80 object-contain"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {product.product_name}
          </h1>
          <p className="text-orange-500 text-2xl font-semibold mt-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mt-6">
            This is a premium quality product designed for daily use.
            Comfortable, durable, and stylish.
          </p>

          <button
            disabled={!user}
            className={`mt-6 px-6 py-3 rounded-lg transition
    ${
      user
        ? "bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }
  `}
          >
            Add to Cart
          </button>
          <button
            onClick={() => window.history.back()}
            className="mt-6 ml-3 px-6 py-3 bg-red-400 text-gray-700 rounded-lg hover:bg-gray-400 transition cursor-pointer"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SneakerDetails;
