import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

interface StarRatingProps {
  setRating: (rating: number) => void;
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ setRating, rating }) => {
  const handleRatingChange = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div className="flex justify-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          type="button"
          key={index}
          onClick={() => handleRatingChange(index)}
          className="focus:outline-none"
        >
          {index <= rating ? (
            <FaStar color="#F9B900" size={32} style={{ fill: "currentcolor" }} />
          ) : (
            <FaRegStar color="#5F6D7E" size={32} style={{ fill: "currentcolor" }} />
          )}
        </button>
      ))}
    </div>
  );
};

export default StarRating;
