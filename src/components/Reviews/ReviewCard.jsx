import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { reviewerName, reviewerProfileImage, comments, rating } = review;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center max-w-sm mx-auto">
      {/* Profile Image */}
      <img
        src={reviewerProfileImage}
        alt={reviewerName}
        className="w-20 h-20 rounded-full mx-auto border-4 border-orange-400 object-cover"
      />

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {reviewerName}
      </h3>

      {/* Rating */}
      <div className="flex justify-center mt-2 gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={
              index < rating ? "text-yellow-400" : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* Comment */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        “{comments}”
      </p>
    </div>
  );
};

export default ReviewCard;
