const Contact = () => (
  <>
    <section className="font-sans">
      <div className="relative w-full h-64 md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2154515/pexels-photo-2154515.jpeg?_gl=1*1ba89tl*_ga*MTA4NTUwMzU4Ny4xNzY1ODg3OTQx*_ga_8JE65Q40S6*czE3NjU5NTA3NDIkbzIkZzAkdDE3NjU5NTA3NDIkajYwJGwwJGgw')`,
          }}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider relative z-10">
            Contact Us
          </h1>
        </div>
      </div>
    </section>

    <section className="bg-amber-50 py-16 px-4 md:py-24 font-sans text-slate-700">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800">
          Our Location
        </h2>

        <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-16">
          Find the perfect solutions for your pool needs. We're here to help you
          create the aquatic space of your dreams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-start relative">
          <div className="flex flex-col items-center md:px-8">
            <div className="w-full h-px bg-slate-400 mb-8 max-w-md mx-auto md:max-w-none"></div>
            <h3 className="text-xl font-bold mb-1">Address</h3>
            <p className="text-sm italic mb-4">
              Visit us at our office location
            </p>
            <p className="text-xl font-bold text-slate-800">
              9 Hill Lane, Ruislip, HA4 7JJ, UK
            </p>
          </div>

          <div className="flex flex-col items-center md:px-8">
            <div className="w-full h-px bg-slate-400 mb-8 max-w-md mx-auto md:max-w-none"></div>
            <h3 className="text-xl font-bold mb-1">Send a Mail</h3>
            <p className="text-sm italic mb-4">General enquiries for you</p>
            <a
              href="mailto:noblenautica13@gmail.com"
              className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
            >
              noblenautica13@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-800 text-center">
        Get in Touch
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-300/40 p-8 md:p-16 rounded-xl shadow-lg">
          <p className="text-lg italic text-slate-700 mb-1">Partnership</p>
          <p className="text-3xl font-bold mb-8 text-slate-800">
            Send your message
          </p>

          <form className="space-y-4">
            <div className="bg-white/40 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 text-gray-700"
                  aria-label="Your Name"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>

              <div className="bg-white relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 text-gray-700"
                  aria-label="Email Address"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white relative">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 text-gray-700"
                  aria-label="Mobile Number"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>

              <div className="bg-white relative">
                <input
                  type="text"
                  placeholder="Type of Enquiry"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 text-gray-700"
                  aria-label="Type of Enquiry"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white">
              <textarea
                placeholder="Message"
                rows="8"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 text-gray-700 resize-none"
                aria-label="Message"
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section className="bg-amber-50 py-20 px-4 md:py-32 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold text-slate-700 mb-6 tracking-tight">
          Explore Our Catalogue
        </h2>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover a wide range of products and solutions tailored for your pool
          requirements.
        </p>

        <div className="flex justify-center">
          <button className="bg-[#475b81] hover:bg-[#3a4a69] text-white text-lg font-semibold py-5 px-10 rounded shadow-lg transition duration-300 min-w-[240px]">
            Download Now
          </button>
        </div>
      </div>
    </section>

    <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
      {/* The entire area will be a solid blue color */}
    </section>
  </>
);
export default Contact;
