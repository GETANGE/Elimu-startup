const About = () => {
    return (
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">About Us</h2>
          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            We are committed to providing a seamless and stress-free experience for students navigating the university selection process. Our platform combines intuitive design, personalized guidance, and robust tools to help users make informed decisions about their future.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mx-auto">
                🌟
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                Empower students with the tools and resources they need to find the university that aligns with their aspirations and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-green-100 text-green-800 rounded-full mx-auto">
                💡
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To be the leading platform in bridging the gap between students and higher education opportunities globally.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-yellow-100 text-yellow-800 rounded-full mx-auto">
                🤝
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">Our Values</h3>
              <p className="mt-2 text-gray-600">
                Integrity, innovation, and inclusivity are at the core of everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-purple-100 text-purple-800 rounded-full mx-auto">
                🌍
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">Global Reach</h3>
              <p className="mt-2 text-gray-600">
                Connecting students with universities from all corners of the world.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-pink-100 text-pink-800 rounded-full mx-auto">
                🎓
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">Student-Centric</h3>
              <p className="mt-2 text-gray-600">
                Focused on providing solutions that cater to the unique needs of every student.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-teal-100 text-teal-800 rounded-full mx-auto">
                🛠️
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">Innovative Tools</h3>
              <p className="mt-2 text-gray-600">
                Leveraging technology to simplify complex processes and enhance user experience.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="#features"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700"
            >
              Learn More About Our Services
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  