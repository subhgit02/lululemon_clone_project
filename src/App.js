import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardContain from "./components/CardContain";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import MembershipBanner from "./components/MembershipBanner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <CardContain />
      <Categories />
      <MembershipBanner />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default App;
