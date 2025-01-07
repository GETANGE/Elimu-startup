const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">About Elimu Yetu</h2>
        <p className="mt-4 text-center text-gray-600">
          Elimu Yetu is dedicated to connecting individuals with the best schools and businesses in Kenya. 
          Our platform is designed to simplify the search process, providing a comprehensive directory of verified listings, 
          empowering users to make informed decisions.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex justify-center items-center bg-blue-100 text-blue-800 rounded-full">
              🎓
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To create an accessible platform that bridges the gap between quality education and businesses, 
              fostering growth and opportunities for all.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex justify-center items-center bg-blue-100 text-blue-800 rounded-full">
              🌟
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To be the leading platform in Kenya for discovering schools and businesses, enabling users to make 
              impactful choices with ease and confidence.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-800">Why Choose Us</h3>
          <p className="mt-4 text-gray-600">
            At Elimu Yetu, we prioritize accuracy, convenience, and user satisfaction. Whether you're a parent looking 
            for the best school for your child or a business owner seeking growth opportunities, we are here to support you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;