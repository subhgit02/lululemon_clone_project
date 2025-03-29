import React from "react";

const Card = ({head, img, text, btnContent}) => {
  return (
    <div className="w-full md:w-[49%] bg-white">
      {/* Image */}
      <img
        src={img}
        alt="Running"
        className="w-full h-[650px] object-cover"
      />

      {/* Content */}
      <div className="px-4 py-6">
        <h2 className="text-base font-bold mb-2">{head}</h2>
        <p className="text-sm text-gray-700 mb-4">
          {text}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="border border-black px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white transition">
            {btnContent}
          </button>
          <button className="border border-black px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white transition">
            SHOP SHORTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
