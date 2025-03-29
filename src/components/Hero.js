const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Hero Image Section */}
      <div className="w-4/5 relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_3_1_D_HP?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Hero Background"
          className="w-full h-auto object-cover ml-[6%]"
        />

        {/* White Overlay Box on Image */}
        <div className="absolute top-[150px] left-0 bg-white p-6 md:p-7 shadow-lg w-60">
          <h1 className="text-2xl font-bold mb-4">lululemon</h1>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-red-400 cursor-pointer">Women's What's New</li>
            <li className="hover:text-red-400 cursor-pointer">Men's What's New</li>
            <li className="hover:text-red-400 cursor-pointer">All Women's</li>
            <li className="hover:text-red-400 cursor-pointer">All Men's</li>
            <li className="hover:text-red-400 cursor-pointer">All Accessories</li>
          </ul>
        </div>

        {/* Shop Button on Image */}
        <button className="absolute bottom-10 right-10 border-2 border-black text-black px-6 py-2 font-semibold hover:bg-gray-200 transition">
          SHOP WHAT'S NEW
        </button>
      </div>

      {/* Two Boxes Below the Image */}
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Left Box */}
        <div>
          <h2 className="text-3xl font-bold">The right support is everything.</h2>
        </div>

        {/* Right Box */}
        <div>
          <p className="text-gray-700">
            Ventilated fabrics fuel your pace. Lightweight stretch offers freedom to go
            further. With innovative running gear, you’re already miles ahead—together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
