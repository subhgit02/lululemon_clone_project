import React from "react";

// Hero Banner Component
const HeroBanner = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image and Title */}
      <div className="relative mt-8">
        <img
          src="https://images.lululemon.com/is/image/lululemon/NA_Q1_2025_MembershipMadness_Drop3_Awareness_Live_Ecomm_1_1_Med_MediaAction_D?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" // Replace with actual image URL
          alt="Membership Madness"
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold">Cheering you on (and on).</h2>
        <p className="text-gray-600 mt-2">
          We're your biggest fans. So from March 17-28, we're dropping
          complimentary classes, events, and huge prizes—including gear for a year.
        </p>
        <button className="mt-4 px-6 py-2 border border-black rounded-lg">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

// New to Lululemon Section
const NewToLululemon = () => {
  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center mt-6">
      <div>
        <h3 className="font-bold">New to lululemon?</h3>
        <p className="text-gray-600 ">Get familiar, get inspired, and get moving.</p>
      </div>
      <button className="px-6 py-2 border border-black rounded-lg">
        START HERE
      </button>
    </div>
  );
};

// Main Component
const MembershipMadness = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <HeroBanner />
      <NewToLululemon />
    </div>
  );
};

export default MembershipMadness;
