

import React, { useState } from 'react';
import { Zap, Wifi, Clock, Droplet, Sun, Moon, Smartphone, Star } from 'lucide-react';

export default function Item() {
  const [selectedColor, setSelectedColor] = useState('white');

  const features = [
    { icon: Wifi, title: "Smart WiFi Control", desc: "Connect to your home network and control from anywhere" },
    { icon: Zap, title: "Energy Efficient", desc: "Uses 85% less energy than traditional bulbs" },
    { icon: Clock, title: "Schedule & Timer", desc: "Set automated routines for perfect lighting" },
    { icon: Droplet, title: "16 Million Colors", desc: "Create any mood with RGB color spectrum" },
    { icon: Sun, title: "Dimmable", desc: "Adjust brightness from 1% to 100%" },
    { icon: Moon, title: "Sleep Mode", desc: "Gradual dimming for natural sleep cycles" }
  ];

  const specs = [
    { label: "Wattage", value: "9W (60W equivalent)" },
    { label: "Brightness", value: "800 Lumens" },
    { label: "Lifespan", value: "25,000 Hours" },
    { label: "Color Temperature", value: "2700K-6500K" },
    { label: "Base Type", value: "E26/E27" },
    { label: "Compatibility", value: "Alexa, Google Home, Siri" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product Image */}
          <div className="relative order-1 lg:order-1">
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse transition-all duration-500 ${
              selectedColor === 'white' ? 'bg-gradient-to-br from-amber-200 to-yellow-200' :
              selectedColor === 'daylight' ? 'bg-gradient-to-br from-blue-200 to-cyan-200' :
              'bg-gradient-to-br from-purple-200 to-pink-200'
            }`}></div>
            <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 flex items-center justify-center">
              <div className="relative">
                <div className={`w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                  selectedColor === 'white' ? 'bg-gradient-to-br from-amber-200 to-yellow-400' :
                  selectedColor === 'daylight' ? 'bg-gradient-to-br from-blue-300 to-cyan-400' :
                  'bg-gradient-to-r from-red-400 via-purple-400 to-blue-400'
                }`}>
                  <Zap className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  30% OFF
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">NEW ARRIVAL</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs sm:text-sm text-gray-600 ml-2">(2,847 reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                APA Smart LED Bulb
              </h1>
              <p className="text-lg sm:text-xl text-gray-600">
                The Future of Home Lighting
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Transform your home with the APA Smart LED Bulb - where cutting-edge technology meets elegant design. Experience the perfect ambiance for every moment, from energizing morning light to warm evening glow. Control millions of colors with a simple tap, set schedules that match your lifestyle, and reduce energy costs by up to 85%.
            </p>

            {/* Color Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700">Color Temperature</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { name: 'white', bg: 'bg-white border-2', label: 'Warm White' },
                  { name: 'daylight', bg: 'bg-blue-50 border-2', label: 'Daylight' },
                  { name: 'rgb', bg: 'bg-gradient-to-r from-red-400 via-green-400 to-blue-400', label: 'RGB' }
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`${color.bg} p-3 sm:p-4 rounded-lg border transition-all ${
                      selectedColor === color.name ? 'ring-4 ring-blue-500 border-blue-500' : 'border-gray-300'
                    }`}
                  >
                    <div className="text-sm font-medium text-gray-700">{color.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                In Stock
              </div>
              <div>Free Shipping on orders over $50</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Brilliant Features for Smart Living
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App Integration */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <Smartphone className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Control From Anywhere</h2>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 text-blue-50">
                Download the APA Smart Home app and take complete control of your lighting. Set scenes, create schedules, and adjust your lights from anywhere in the world. Voice control compatible with Alexa, Google Assistant, and Siri.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                  App Store
                </button>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                  Google Play
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Setup</h3>
              <ol className="space-y-3 text-sm sm:text-base text-blue-50">
                <li className="flex items-start gap-3">
                  <span className="bg-white text-blue-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">1</span>
                  <span>Screw the bulb into any standard socket</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-blue-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">2</span>
                  <span>Download the APA Smart Home app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-blue-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">3</span>
                  <span>Connect to WiFi and start controlling</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {specs.map((spec, idx) => (
                <div 
                  key={idx}
                  className={`p-4 sm:p-6 border-b sm:border-r border-gray-200 ${
                    idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } ${idx >= specs.length - 2 ? 'border-b-0' : ''}`}
                >
                  <div className="text-xs sm:text-sm text-gray-600 mb-1">{spec.label}</div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <span className="font-medium text-sm sm:text-base">2 Year Warranty</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold">✓</span>
            </div>
            <span className="font-medium text-sm sm:text-base">30-Day Returns</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 font-bold">✓</span>
            </div>
            <span className="font-medium text-sm sm:text-base">Free Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}