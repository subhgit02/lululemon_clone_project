import React from "react";
import { FaTwitter, FaPinterest, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">MY ACCOUNT</h3>
          <ul className="space-y-2">
            <li>Membership Program</li>
            <li>Sign In</li>
            <li>Register</li>
            <li>Order Status</li>
            <li>Returns</li>
            <li>Email signup</li>
            <li>Careers</li>
            <li>Like New</li>
            <li>Social Impact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">HELP</h3>
          <ul className="space-y-2">
            <li>Ordering</li>
            <li>Returns and Refunds</li>
            <li>Shipping and Delivery</li>
            <li>Payment</li>
            <li>Redeem Gift Cards</li>
            <li>Program And Discount</li>
            <li>Products and Sizing</li>
            <li>Gift Card</li>
            <li>Store Locator</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li>Our Business</li>
            <li>Media</li>
            <li>Investors</li>
            <li>Strategic Sales</li>
            <li>Affiliates and Creators</li>
            <li>Sweat Collectives</li>
            
            
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">CONTACT US</h3>
          <ul className="space-y-2">
            <li>Live Chat</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 flex justify-between items-center">
        <div className="text-sm">Privacy Policy | Terms of Service | Accessibility Statement</div>
        <div className="flex space-x-4">
          <a href="#" className="text-xl text-gray-600 hover:text-black"><FaTwitter /></a>
          <a href="#" className="text-xl text-gray-600 hover:text-black"><FaPinterest /></a>
          <a href="#" className="text-xl text-gray-600 hover:text-black"><FaYoutube /></a>
          <a href="#" className="text-xl text-gray-600 hover:text-black"><FaFacebook /></a>
          <a href="#" className="text-xl text-gray-600 hover:text-black"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
