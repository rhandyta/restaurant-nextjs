import React from "react";

function Rating({ rating }) {
    return (
        <div className="rating rating-sm">
            <input
                disabled={true}
                type="radio"
                name="rating-1"
                className={`mask mask-star  ${
                    rating >= 1 ? "bg-orange-400" : ""
                }`}
            />
            <input
                disabled={true}
                type="radio"
                name="rating-1"
                className={`mask mask-star  ${
                    rating >= 2 ? "bg-orange-400" : ""
                }`}
            />
            <input
                disabled={true}
                type="radio"
                name="rating-1"
                className={`mask mask-star  ${
                    rating >= 3 ? "bg-orange-400" : ""
                }`}
            />
            <input
                disabled={true}
                type="radio"
                name="rating-1"
                className={`mask mask-star  ${
                    rating >= 4 ? "bg-orange-400" : ""
                }`}
            />
            <input
                disabled={true}
                type="radio"
                name="rating-1"
                className={`mask mask-star  ${
                    rating >= 5 ? "bg-orange-400" : ""
                }`}
            />
        </div>
    );
}

export default Rating;
