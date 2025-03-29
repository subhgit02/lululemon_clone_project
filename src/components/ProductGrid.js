import React, { useState } from "react";

// Sample Data
const categories = {
  women: [
    { id: 1, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Shorts_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Shorts" },
    { id: 2, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Pants_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Pants" },
    { id: 3, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_HoodiesSweatshirts_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Hoodies & Sweatshirts" },
    { id: 4, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Shirts_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Shirts" },
    { id: 5, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Shoes_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Shoes" },
    { id: 6, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Bags_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Bags" },
  ],
  men: [
    { id: 1, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Shoes_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Shorts" },
    { id: 2, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Joggers02_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Hoodies & Sweatshirts" },
    { id: 3, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Pants_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Shirts" },
    { id: 4, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Shirts_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Pants" },
    { id: 5, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_HoodiesSweatshirts_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Joggers" },
    { id: 6, image: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Shorts_ShopCategories?wid=320&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Shoes" },
  ],
};

// Reusable Category Card Component
const CategoryCard = ({ image, name }) => {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-36 h-44 object-cover rounded-lg mx-auto" />
      <p className="mt-2 font-semibold">{name}</p>
    </div>
  );
};

// Category List Component
const CategoryList = ({ selectedGender }) => {
  return (
    <div className="flex space-x-6 mt-4">
      {categories[selectedGender].map((item) => (
        <CategoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};

// Main Component
const ShopCategories = () => {
  const [selectedGender, setSelectedGender] = useState("women");

  return (
    <div className="max-w-4xl mx-auto ">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 mt-10">Shop popular categories.</h2>

      {/* Toggle Buttons */}
      <div className="flex space-x-6 text-lg font-semibold">
        <button
          className={`pb-2 ${selectedGender === "women" ? "border-b-2 border-black" : "text-gray-500"}`}
          onClick={() => setSelectedGender("women")}
        >
          Women's
        </button>
        <button
          className={`pb-2 ${selectedGender === "men" ? "border-b-2 border-black" : "text-gray-500"}`}
          onClick={() => setSelectedGender("men")}
        >
          Men's
        </button>
      </div>

      {/* Category List */}
      <CategoryList selectedGender={selectedGender} />
    </div>
  );
};

export default ShopCategories;

