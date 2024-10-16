import React from "react";

const HeroSection = () => {
  const heroImage =
    "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&dpr=2"; // Placeholder image

  return (
    <div
      className="relative   bg-gray-200 dark:bg-gray-800"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute  inset-0 bg-black opacity-50"></div>
      <div className="container  mx-auto flex flex-col items-center justify-center h-screen relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Unlock Your Potential with MindUp Learning
        </h1>
        <p className="text-lg mb-8 text-center">
          Access expert-led courses anytime, anywhere, and accelerate your
          personal and professional growth.
        </p>
        <div className="flex space-x-4">
          <a
            href="#courses"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition duration-300"
          >
            Start Learning Now
          </a>
          <a
            href="#about"
            className="border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Browse Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
