const HeroSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-24 sm:py-32 lg:py-40 relative"
      aria-label="Get Started with Online Learning"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Unlock Your Child’s Potential with the Right School
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl font-light text-white opacity-90 mb-10">
          A seamless experience in discovering the perfect school from your mobile, tablet, or desktop. Empower your child’s future from the comfort of your home.
        </p>

        {/* Features/Benefits */}
        <div className="flex justify-center items-center gap-12 mb-10">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full shadow-lg text-2xl">
              📱
            </div>
            <p className="text-white mt-4">Mobile-Friendly</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full shadow-lg text-2xl">
              🔍
            </div>
            <p className="text-white mt-4">Easy Search</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full shadow-lg text-2xl">
              🏫
            </div>
            <p className="text-white mt-4">Trusted Schools</p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <a
            href="#schools-directory"
            className="inline-block px-10 py-5 bg-blue-600 text-white rounded-lg text-xl font-semibold hover:bg-blue-500 transition duration-300 transform hover:scale-105"
            aria-label="Explore Schools Now"
          >
            Explore Schools
          </a>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: 'url("https://apstoday.us/wp-content/uploads/2022/04/6e2c9-emani-stanton-nahs-and-jayla-jackson.png")',
        }}
      ></div>
    </section>
  );
};

export default HeroSection;