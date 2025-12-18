import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Home = () => {
  const products = [
    { name: "Filtration", icon: "🔄" },
    { name: "Pumps", icon: "⚙️" },
    { name: "Air Blowers", icon: "💨" },
    { name: "Pool Cleaning Equipment", icon: "🧹" },
    { name: "Robotic Pool Cleaners", icon: "🤖" },
  ];

  const products1 = [
    {
      image:
        "https://aqua-me.ae/wp-content/uploads/2024/02/08-VARIABLE-SPEED-PUMP-VSD-MAGNUS_IMAGE.jpg",
      title: "NN-FC-TMIX SERIES Filtration Combo",
      description:
        "Designed for easy setup of domestic pools, the NN-FC-TMIX SERIES Filtration Combo offers the ideal solution for home users seeking user-friendly operation and excellent filtration performance.",
    },
    {
      image:
        "https://aqua-me.ae/wp-content/uploads/2024/02/08-VARIABLE-SPEED-PUMP-VSD-MAGNUS_IMAGE.jpg",
      title: "NN-VSP-PP Variable-Speed Pumps",
      description:
        "NN-VSP-PP variable-speed pumps continuously adjust their water flow to match real-time system demand. This intelligent modulation not only optimizes energy use but also enhances the overall efficiency of plant operations.",
    },
    {
      image:
        "https://www.starpumpalliance.com/wp-content/uploads/2023/10/EDUR_Single-Stage-Close-Coupled-Pump_NUBS700M.jpg",
      title: "Radial Flow Gas Pump",
      description:
        "The Radial Flow Gas Pump is a high-performance air-moving solution, also known as a ring blower, designed to deliver consistent high-pressure airflow for demanding industrial applications.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechVision Inc",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      story:
        "Working with this team transformed our business completely. Revenue increased by 300% in just 6 months, and our customer satisfaction scores have never been higher.",
      rating: 5,
      company: "TechVision Inc",
      metric: "300% Revenue Growth",
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      story:
        "The results exceeded all our expectations. Not only did we streamline our operations, but we also discovered new market opportunities we hadn't considered before.",
      rating: 5,
      company: "GrowthLabs",
      metric: "50% Cost Reduction",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandPulse",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      story:
        "An absolute game-changer for our marketing efforts. The strategic insights and execution were flawless, leading to a massive boost in brand awareness and engagement.",
      rating: 5,
      company: "BrandPulse",
      metric: "5x Engagement Increase",
    },
  ];

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900 relative overflow-hidden"
        // style={{ backgroundImage: "url('https://images.pexels.com/photos/6249814/pexels-photo-6249814.jpeg?_gl=1*1leqk6x*_ga*MTA4NTUwMzU4Ny4xNzY1ODg3OTQx*_ga_8JE65Q40S6*czE3NjU4ODc5NDEkbzEkZzEkdDE3NjU4ODgwMDUkajU5JGwwJGgw')" }}
      >
        {/* Water texture overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(ellipse at 70% 60%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                           radial-gradient(ellipse at 50% 80%, rgba(255, 255, 255, 0.06) 0%, transparent 60%)`,
            }}
          ></div>
        </div>

        {/* Boat with wake */}
        <div className="absolute right-[8%] top-[20%] z-10">
          <div className="relative w-20 h-10">
            {/* Wake trails */}
            <div className="absolute top-1/2 right-full w-[300px] h-0.5 bg-gradient-to-l from-white/40 to-transparent rounded-full transform -translate-y-1/2 -rotate-12"></div>
            <div className="absolute top-1/2 right-full w-[250px] h-0.5 bg-gradient-to-l from-white/30 to-transparent rounded-full transform -translate-y-6 rotate-6"></div>
            <div className="absolute top-1/2 right-full w-[200px] h-0.5 bg-gradient-to-l from-white/25 to-transparent rounded-full transform translate-y-4 -rotate-8"></div>

            {/* Boat body */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70px] h-[25px] bg-gradient-to-br from-orange-500 to-red-600 rounded-[40%_40%_50%_50%/20%_20%_80%_80%] shadow-lg"></div>
          </div>
        </div>

        {/* Yellow float bottom right */}
        <div className="absolute right-[8%] bottom-[40%] w-12 h-12 bg-yellow-400 rounded-full shadow-lg opacity-80"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8 pt-20 pb-32">
          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight">
            Engineering the Future of
            <br />
            <motion.span
              animate={{
                color: ["#ffffff", "#60a5fa", "#ffffff"], // Shimmers from white to blue back to white
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block"
            >
              Aquatic Infrastructure
            </motion.span>
          </motion.h1>

          <p className="text-white/90 text-center max-w-4xl text-lg md:text-xl mb-12 leading-relaxed">
            From Olympic-sized pools to wellness retreats, Noble Nautica
            delivers precision-engineered systems and exclusive products,
            defined by a legacy of craftsmanship and trusted by professionals
            across the globe
          </p>

          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 border border-white/30 hover:scale-105">
            Explore Our Product
          </button>
        </div>

        {/* Products Section */}
        <div className="relative z-20 -mt-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-[#3d4d6f] rounded-3xl shadow-2xl p-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="bg-white rounded-2xl w-24 h-24 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl">{product.icon}</div>
                    </div>
                    <h3 className="text-white text-center font-medium text-sm leading-tight">
                      {product.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cream colored section at bottom */}
        <div className="h-32 bg-[#f5f1e8]"></div>
      </div>

      <h1 class="text-center text-3xl font-bold text-blue-700 p-4 bg-amber-50 ">
        Trusted leader in pool equipment and technology solutions
      </h1>
      <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6 overflow-x-auto">
            {products1.map((product, index) => (
              <div
                key={index}
                className="bg-white border-4 border-blue-900 p-6 flex flex-col items-center min-w-[350px] flex-1"
              >
                <div className="bg-blue-100 w-full h-64 flex items-center justify-center mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <p className="text-blue-900 text-center leading-relaxed">
                  <span className="font-semibold">{product.title}</span>{" "}
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div class="text-center bg-amber-50">
        <button class="bg-blue-500 text-white p-2 rounded bg-amber-50 ">
          Expore our Product{" "}
        </button>
      </div>

      <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
        <div className="max-w-7xl mx-auto bg-slate-600 p-8 md:p-16 rounded-lg shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-white flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-snug">
                Our Catalogue
              </h1>
              <p className="text-lg mb-10 opacity-90 max-w-xl">
                Our digital catalogue redefines product discovery, visually
                immersive, technically robust, and intuitively structured. From
                spec sheets to standout visuals, everything you need to specify
                with confidence, all in one place.
              </p>
              <button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow-xl transition duration-300 w-fit">
                Download Now
              </button>
            </div>
            {/* PRODUCT CATALOGUE Cover */}
            <div className="lg:w-1/2 bg-gray-200 p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="col-span-1 h-48 sm:h-64">
                  <div className="bg-gray-800 flex items-center justify-center rounded-sm h-full overflow-hidden shadow-md">
                    <img
                      src="https://media.istockphoto.com/id/1889324769/photo/summer-outdoor-pool-with-lighting-at-night.jpg?s=612x612&w=0&k=20&c=JGnBL-DoQy_679TyR9D0VbfMcpDWH-YKBAVV9gd1Glg="
                      alt="Product Catalogue Cover - Modern House"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-1 h-48 sm:h-64">
                  <div className="bg-gray-800 flex items-center justify-center p-2 rounded-sm h-full">
                    <div className="bg-gray-800 flex items-center justify-center rounded-sm h-full overflow-hidden shadow-md">
                      <img
                        src="https://media.istockphoto.com/id/1151832961/photo/evening-view-of-a-modern-large-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=1CP0id1zUGmhmAooj03ocSBipihju7CjCmmGs_LPwhA="
                        alt="Product Catalogue Cover - Modern House"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-1 h-36 sm:h-48">
                  <div className="bg-gray-800 flex items-center justify-center p-2 rounded-sm h-full">
                    <div className="bg-gray-800 flex items-center justify-center rounded-sm h-full overflow-hidden shadow-md">
                      <img
                        src="https://media.istockphoto.com/id/1151832961/photo/evening-view-of-a-modern-large-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=1CP0id1zUGmhmAooj03ocSBipihju7CjCmmGs_LPwhA="
                        alt="Product Catalogue Cover - Modern House"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 h-36 sm:h-48">
                  <div className="bg-gray-800 flex items-center justify-center p-2 rounded-sm h-full">
                    <div className="bg-gray-800 flex items-center justify-center rounded-sm h-full overflow-hidden shadow-md">
                      <img
                        src="https://media.istockphoto.com/id/1151832961/photo/evening-view-of-a-modern-large-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=1CP0id1zUGmhmAooj03ocSBipihju7CjCmmGs_LPwhA="
                        alt="Product Catalogue Cover - Modern House"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
                Crafting the Future of Water Spaces
              </h1>
              <p className="text-base text-gray-700 mb-10 max-w-xl leading-relaxed">
                We're enabling a new era of swimming pool infrastructure - where
                design meets technology, and every solution is as functional as
                it is visually transparent. Our digital catalogue brings this
                vision to life: design-driven layouts, technically advanced
                details and crystal-clear product presentation. From precision
                specifications to stunning visuals, it's everything you need to
                build with confidence, all in one place.
              </p>
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded shadow-lg transition duration-300 w-fit">
                Learn More About Us
              </button>
            </div>

            <div
              className="lg:w-1/2 min-h-[300px] lg:min-h-[500px]
             bg-gradient-to-br
             from-gray-200
             via-sky-200
             via-blue-200
             via-indigo-200
             to-purple-200
             rounded-lg shadow-xl flex items-center justify-center p-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                  <svg
                    className="w-10 h-10 text-sky-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.404 10 4 8 4a2 2 0 00-2 2v2a2 2 0 002 2c.984 0 1.8.447 2.457 1.1l.942 1.1l.942-1.1C13.2 10.447 14.016 10 15 10a2 2 0 002-2V6a2 2 0 00-2-2c-2 0-2.832 1.404-3.832 2.253z"
                    />
                  </svg>
                </div>

                <p className="text-gray-700 font-semibold">
                  Excellence in Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
        <div className="max-w-7xl mx-auto bg-slate-700 p-8 md:p-16 rounded-lg shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
            <div>
              <svg
                className="w-12 h-12 mb-4 stroke-current text-white mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M17 13.5a5.5 5.5 0 00-11 0v4.5h11v-4.5z" />
                <path d="M6 18H5a1 1 0 01-1-1v-1a1 1 0 011-1h1m11 2h1a1 1 0 001-1v-1a1 1 0 00-1-1h-1" />
                <path d="M17 18h-10M6 18v2a1 1 0 001 1h10a1 1 0 001-1v-2M18 6L16 8M6 8L8 6" />
                <path d="M12 4v16" />
              </svg>
              <p className="text-xl font-semibold leading-relaxed">
                Installed in 12,000+ sites
              </p>
            </div>

            <div>
              <svg
                className="w-12 h-12 mb-4 stroke-current text-white mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-xl font-semibold leading-relaxed">
                Exporting to 80+ countries
              </p>
            </div>

            <div>
              <svg
                className="w-12 h-12 mb-4 stroke-current text-white mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h-1.586a1 1 0 01-.707-.293l-4.5-4.5a1 1 0 010-1.414l4.5-4.5a1 1 0 01.707-.293H17M4 12h8"
                />
                <circle cx="9" cy="7" r="4" />
                <circle cx="15" cy="17" r="4" />
              </svg>
              <p className="text-xl font-semibold leading-relaxed">
                100+ worldwide distributors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-700 leading-tight">
                Clients Success Stories
              </h1>
              <p className="text-base text-gray-700 max-w-xl leading-relaxed">
                Manufactured with care, trusted by professionals across every
                stage of the project. From blueprint to build, our partners rely
                on us for precision, performance, and peace of mind.
              </p>
            </div>

            <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100 py-6 sm:py-8 px-3 sm:px-4">
              <div className="max-w-4xl mx-auto h-full">
                {/* Section Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                    Client Success Stories
                  </h2>
                </div>

                {/* Main Story Card */}
                <div className="relative bg-white rounded-lg sm:rounded-xl shadow-xl overflow-hidden mb-4 sm:mb-6">
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-slate-200">
                    <Quote
                      size={30}
                      strokeWidth={1}
                      className="sm:w-10 sm:h-10"
                    />
                  </div>

                  <div className="grid md:grid-cols-5 gap-3 sm:gap-4 p-3 sm:p-4 md:p-6">
                    {/* Left Side - Client Info */}
                    <div className="md:col-span-2 flex flex-col items-center text-center space-y-2 sm:space-y-3">
                      <img
                        src={stories[currentIndex].image}
                        alt={stories[currentIndex].name}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-slate-100 shadow-lg"
                      />
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                          {stories[currentIndex].name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1">
                          {stories[currentIndex].role}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5 sm:mt-1">
                          {stories[currentIndex].company}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(stories[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className="fill-amber-400 text-amber-400 sm:w-3.5 sm:h-3.5"
                            />
                          )
                        )}
                      </div>

                      {/* Metric Badge */}
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full font-semibold text-xs">
                        {stories[currentIndex].metric}
                      </div>
                    </div>

                    {/* Right Side - Story */}
                    <div className="md:col-span-3 flex flex-col justify-center mt-2 md:mt-0">
                      <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed italic">
                        "{stories[currentIndex].story}"
                      </p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center gap-2 pb-3 sm:pb-4">
                    <button
                      onClick={prevStory}
                      className="bg-slate-900 text-white p-1.5 sm:p-2 rounded-full hover:bg-slate-700 transition-colors shadow-lg"
                      aria-label="Previous story"
                    >
                      <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={nextStory}
                      className="bg-slate-900 text-white p-1.5 sm:p-2 rounded-full hover:bg-slate-700 transition-colors shadow-lg"
                      aria-label="Next story"
                    >
                      <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                    </button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-1.5 sm:gap-2 pb-3 sm:pb-4">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 sm:h-2 rounded-full transition-all ${
                          index === currentIndex
                            ? "bg-slate-900 w-5 sm:w-6"
                            : "bg-slate-300 hover:bg-slate-400 w-1.5 sm:w-2"
                        }`}
                        aria-label={`Go to story ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                      150+
                    </div>
                    <div className="text-slate-600 text-xs sm:text-sm">
                      Happy Clients
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                      98%
                    </div>
                    <div className="text-slate-600 text-xs sm:text-sm">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
        {/* The entire area will be a solid blue color */}
      </section>
    </>
  );
};

export default Home;
