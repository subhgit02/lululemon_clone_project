// import React from "react";

// const categories = [
//   { name: "Shorts", img: "https://images.lululemon.com/is/image/lululemon/LW7DKRS_068585_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" },
//   { name: "Pants", img: "https://images.lululemon.com/is/image/lululemon/LW3IAJS_4780_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" },
//   { name: "Hoodies", img: "https://images.lululemon.com/is/image/lululemon/LW7DHHS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" },
//   { name: "Shoes", img: "https://images.lululemon.com/is/image/lululemon/LW9FGCS_066949_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" },
//   { name: "Shoes", img: "https://images.lululemon.com/is/image/lululemon/LW9FGCS_066949_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" },
//   { name: "Shoes", img: "https://images.lululemon.com/is/image/lululemon/LW9FGCS_066949_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" },
// ];

// const Categories = () => {
//   return (
//     <div className="p-6 text-center">
//       <h2 className="text-2xl font-bold">Shop Popular Categories</h2>
//       <div className="flex gap-4 overflow-x-auto mt-4">
//         {categories.map((cat, index) => (
//           <div key={index} className="w-32">
//             <img src={cat.img} alt={cat.name} className="w-full h-24 object-cover rounded" />
//             <p className="font-semibold mt-2">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
import React, { useRef, useState, useEffect } from "react";

// Product Data
const products = [
  { id: 1, image: "https://images.lululemon.com/is/image/lululemon/LW7DKRS_068585_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Side-Cinch High-Rise Short 1.5\"", price: "$68" },
  { id: 2, image: "https://images.lululemon.com/is/image/lululemon/LW3IAJS_4780_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Swiftly High-Low Cropped Short-Sleeve Shirt", price: "$68" },
  { id: 3, image: "https://images.lululemon.com/is/image/lululemon/LW7DHHS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Pace Rival High-Rise Short 3\"", price: "$68" },
  { id: 4, image: "https://images.lululemon.com/is/image/lululemon/LW9FGCS_066949_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Women's Beyondfeel Running Shoe", price: "$158" },
  { id: 5, image: "https://images.lululemon.com/is/image/lululemon/LM1366S_068585_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Fast Running Shorts", price: "$72" },
  { id: 6, image: "https://images.lululemon.com/is/image/lululemon/LM7BL0S_033454_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Breathable Tank Top", price: "$55" },
  { id: 7, image: "https://images.lululemon.com/is/image/lululemon/LM4APWS_069122_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "High-Rise Leggings", price: "$90" },
  { id: 8, image: "https://images.lululemon.com/is/image/lululemon/LW3IAJS_4780_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", name: "Supportive Sports Bra", price: "$50" },
];

// Product Card Component
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="min-w-[300px] flex-shrink-0 mx-2">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-xl" />
      <h3 className="text-lg font-semibold mt-5">{name}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  );
};

// Main Product List Component
const ProductList = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Scroll Change
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / width);
        setCurrentIndex(newIndex);
      }
    };
    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Left Function
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll Right Function
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 ">Run with this gear.</h2>

      {/* Scroll Buttons */}
      <div className="relative w-full flex items-center justify-center">
        <button className="absolute left-0 p-2 bg-gray-200 rounded-full" onClick={scrollLeft}>⬅</button>
        
        {/* Scrollable Product List */}
        <div
          className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide"
          ref={scrollRef}
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <button className="absolute right-0 p-2 bg-gray-200 rounded-full" onClick={scrollRight}>➡</button>
      </div>

      <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg">
        SHOP WHAT'S NEW
      </button>
    </div>
  );
};

export default ProductList;
