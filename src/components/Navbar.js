import React from "react";
import {useState} from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    // <nav className="flex justify-between items-center px-12 py-4 border-b shadow-sm">
    //   {/* Left - Logo */}
    //   

    //   {/* Center - Navigation Links */}
    //   <ul className="hidden md:flex space-x-7 mr-12 font-semibold">
    //     <li className="hover:text-red-600 text-lg font-bold cursor-pointer">Women</li>
    //     <li className="hover:text-red-600 text-lg font-bold cursor-pointer">Men</li>
    //     <li className="hover:text-red-600 text-lg font-bold cursor-pointer">Bags</li>
    //     <li className="hover:text-red-600 text-lg font-bold cursor-pointer">Accessories</li>
    //     <li className="hover:text-red-600 text-lg font-bold cursor-pointer">Shoes</li>
    //     <li className="text-red-600 font-bold text-lg font-bold cursor-pointer">Member Offers</li>
    //   </ul>

    //   {/* Right - Search & Icons */}
    //   <div className="flex items-center space-x-6">
    //     {/* Search Bar */}
    //     <div className="hidden md:flex items-center border border-black rounded-lg px-4 py-2">
    //       <FaSearch className="text-gray-500" />
    //       <input
    //         type="text"
    //         placeholder="Search"
    //         className="outline-none px-2 text-gray-700"
    //       />
    //     </div>

    //     {/* Icons */}
    //     <FaUser className="text-xl cursor-pointer" />
    //     <FaHeart className="text-xl cursor-pointer" />
    //     <div className="relative">
    //       <FaShoppingBag className="text-xl cursor-pointer" />
    //       <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
    //         1
    //       </span>
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center pl-12 space-x-2">
         <img
           src="https://s.yimg.com/fz/api/res/1.2/7h4GOJ36luT5GBtIuSCUgQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/c949f3e5-5c04-3b9e-ae56-4a4d618f9574/t_500x300"
           alt="Lululemon Logo"
           className="w-9 h-9"
         />
         <span className="font-bold text-3xl ">lululemon</span>
       </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6 font-semibold  relative">
          {["Women", "Men", "Bags", "Accessories", "Shoes", "Member Offers"].map(
            (item, index) => (
              <li
                key={index}
                className={`hover:text-red-500 cursor-pointer relative ${
                  openDropdown === item ? "text-red-500 border-b-2 border-red-500" : ""
                }`}
                onMouseEnter={() => setOpenDropdown(item)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item}

                {/* Mega Dropdown */}
                {openDropdown === item && item === "Women" && (
                  <div className="absolute left-0 top-full mt-2 w-[900px] bg-white shadow-lg p-6 flex space-x-8 z-50 border">
                    {/* Left Column */}
                    <div>
                      <h3 className="font-bold mb-2">What's New</h3>
                      <ul className="space-y-2">
                        {[
                          "Bestsellers",
                          "Align Shop",
                          "Scuba Shop",
                          "Best Running Gear",
                          "Matching Sets",
                          "Travel Clothes",
                          "Spring Clothes",
                          "New to Lululemon?",
                          "We Made Too Much",
                        ].map((link, i) => (
                          <li key={i} className="text-gray-700 hover:text-black">
                            {link}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Middle Column */}
                    <div>
                      <h3 className="font-bold mb-2">Women's Clothes</h3>
                      <ul className="space-y-2">
                        {[
                          "Bras & Underwear",
                          "Bodysuits",
                          "Coats & Jackets",
                          "Dresses",
                          "Hoodies & Sweatshirts",
                          "Joggers",
                          "Leggings",
                          "Long Sleeve Shirts",
                          "Pants",
                        ].map((link, i) => (
                          <li key={i} className="text-gray-700 hover:text-black">
                            {link}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column */}
                    <div>
                      <h3 className="font-bold mb-2">Accessories</h3>
                      <ul className="space-y-2">
                        {[
                          "Backpacks",
                          "Bags",
                          "Belt Bags",
                          "Crossbody Bags",
                          "Hair Accessories",
                          "Hats",
                          "Socks",
                          "Water Bottles",
                          "Yoga Mats",
                        ].map((link, i) => (
                          <li key={i} className="text-gray-700 hover:text-black">
                            {link}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image & Text */}
                    <div className="w-1/3">
                      <img
                        src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_3_1_D_HP?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
                        alt="promo"
                        className="w-full mb-2 rounded-md"
                      />
                      <h3 className="font-bold">Hit the road, pack.</h3>
                      <p className="text-gray-600 text-sm">
                        This limitless gear stays the course for as long as you and
                        your run crew do.
                      </p>
                      <a href="#" className="text-red-500 font-semibold mt-2 block">
                        Shop Running Clothes →
                      </a>
                    </div>
                  </div>
                )}
              </li>
            )
          )}
        </ul>

        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md py-1 px-3 pl-8 focus:outline-none"
            />
            <FaSearch className="absolute left-2 top-2 text-gray-500" />
          </div>
          <FaUser className="text-xl cursor-pointer" />
          <FaHeart className="text-xl cursor-pointer" />
          <div className="relative">
            <FaShoppingBag className="text-xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
    

  );
};

export default Navbar;
