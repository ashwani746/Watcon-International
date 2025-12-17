const About = () => (
  <>
    <section className="font-sans">
      <div className="relative w-full h-64 md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/6249814/pexels-photo-6249814.jpeg?_gl=1*1leqk6x*_ga*MTA4NTUwMzU4Ny4xNzY1ODg3OTQx*_ga_8JE65Q40S6*czE3NjU4ODc5NDEkbzEkZzEkdDE3NjU4ODgwMDUkajU5JGwwJGgw')`,
          }}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider relative z-10">
            About Us
          </h1>
        </div>
      </div>
    </section>

    <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
  
  <div className="max-w-4xl mx-auto text-center">
    
    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-800">
      Brand Story
    </h1>
    
    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
      Noble Nautica delivers premium aquatic and wellness infrastructure for the world's most 
      ambitious projects. With a portfolio of over 5,600 solutions from AI enabled systems to 
      seamless glass-edge pools we empower contractors, architects and developers with precision-
      engineered, visually striking and future-ready equipment. Trusted across Europe, the USA and 
      growing markets such as the Indian subcontinent, China and Southeast Asia, we bring proven 
      expertise and a commitment to simplifying complexity, ensuring every project performs 
      beautifully for years to come.
    </p>
    
  </div>
</section>

<section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
  
  <div className="max-w-7xl mx-auto bg-slate-600 p-8 md:p-16 rounded-lg shadow-2xl">
    
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
      
      <div className="lg:w-1/2 text-white flex flex-col justify-center">
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-snug">
          Vision
        </h1>
        
        <p className="text-lg opacity-90 max-w-xl">
          To set the global standard in premium pool infrastructure - where 
          innovation shapes possibility, elegance defines experience and 
          excellence is simply the baseline.
        </p>
        
      </div>
      
      <div className="lg:w-1/2 bg-gray-200 p-1 rounded-lg shadow-lg">
        
        <div className="grid grid-cols-2 gap-4 h-full">
          
          <div className="col-span-1 h-48 sm:h-64">
            <div className="bg-gray-800 flex items-center justify-center p-2 rounded-sm h-full">
              <span className="text-white text-[10px] sm:text-xs text-center leading-tight opacity-70">PRODUCT CATALOGUE Cover</span>
            </div>
          </div>
          <div className="col-span-1 h-48 sm:h-64">
            <div className="bg-gray-800 flex items-center justify-center p-2 rounded-sm h-full">
              <span className="text-white text-[10px] sm:text-xs text-center leading-tight opacity-70">Catalogue Spread</span>
            </div>
          </div>
          
          <div className="col-span-1 h-36 sm:h-48">
            <div className="bg-gray-800 flex items-center justify-center p-2 rounded-sm h-full">
              <span className="text-white text-[10px] sm:text-xs text-center leading-tight opacity-70">Spec Sheet/Detail View</span>
            </div>
          </div>
          <div className="col-span-1 h-36 sm:h-48">
            <div className="bg-gray-800 flex items-center justify-center p-2 rounded-sm h-full">
              <span className="text-white text-[10px] sm:text-xs text-center leading-tight opacity-70">Product Cover V2</span>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
  </div>
</section>

<section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
  <div className="max-w-7xl mx-auto bg-slate-700 p-8 md:p-16 rounded-lg shadow-2xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
      
      <div>
        <svg className="w-12 h-12 mb-4 stroke-current text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
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
        <svg className="w-12 h-12 mb-4 stroke-current text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-xl font-semibold leading-relaxed">
          Exporting to 80+ countries
        </p>
      </div>
      
      <div>
        <svg className="w-12 h-12 mb-4 stroke-current text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h-1.586a1 1 0 01-.707-.293l-4.5-4.5a1 1 0 010-1.414l4.5-4.5a1 1 0 01.707-.293H17M4 12h8" />
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
  
  <div className="max-w-7xl mx-auto text-center">
    
    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-800">
      Values
    </h2>
    
    <div className="bg-slate-700 p-8 md:p-16 rounded-xl shadow-2xl">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-blue-300/40 p-6 md:p-8 rounded-lg flex flex-col items-center justify-center text-slate-800">
          <svg className="w-16 h-16 mb-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 111.955 0 0112 2.944a11.955 11.955 0 014.382 17.02l-.582-.358a8 8 0 10-8.799 0l-.582.358A11.955 11.955 0 0112 2.944z" />
          </svg>
          <p className="text-lg font-semibold mt-2">Quality</p>
        </div>
        
        <div className="bg-blue-300/40 p-6 md:p-8 rounded-lg flex flex-col items-center justify-center text-slate-800">
          <svg className="w-16 h-16 mb-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 111.955 0 0112 2.944a11.955 11.955 0 014.382 17.02l-.582-.358a8 8 0 10-8.799 0l-.582.358A11.955 11.955 0 0112 2.944z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 17V8M12 8l-2 2M12 8l2 2" />
          </svg>
          <p className="text-lg font-semibold mt-2">Innovation</p>
        </div>
        
        <div className="bg-blue-300/40 p-6 md:p-8 rounded-lg flex flex-col items-center justify-center text-slate-800">
          <svg className="w-16 h-16 mb-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.636-.921 1.936 0l2.556 7.846h8.212c.969 0 1.371 1.24.588 1.81l-6.643 4.836 2.556 7.846c.3.921-.755 1.688-1.543 1.111l-6.643-4.836-6.643 4.836c-.788.577-1.843-.19-1.543-1.111l2.556-7.846L.936 12.583c-.783-.57.175-1.81.588-1.81h8.212l2.556-7.846z" />
            <circle cx="12" cy="12" r="10" strokeWidth="1" />
          </svg>
          <p className="text-lg font-semibold mt-2">Reliability</p>
        </div>
        
        <div className="bg-blue-300/40 p-6 md:p-8 rounded-lg flex flex-col items-center justify-center text-slate-800">
          <svg className="w-16 h-16 mb-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="7" r="4" />
            <circle cx="17" cy="17" r="4" />
            <circle cx="7" cy="17" r="4" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 13l-3 4M14 13l3 4M12 11V3" />
          </svg>
          <p className="text-lg font-semibold mt-2">Partnership</p>
        </div>
        
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
      <p className="text-3xl font-bold mb-8 text-slate-800">Send your message</p>
      
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

    <section className="bg-amber-50 py-12 px-4 md:py-24 md:px-8 font-sans">
  {/* The entire area will be a solid blue color */}
</section>
  </>
);

export default About;
