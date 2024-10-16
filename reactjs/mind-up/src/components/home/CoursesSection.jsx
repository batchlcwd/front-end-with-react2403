import React from "react";

function CoursesSection() {
  const courses = [
    {
      title: "Web Development Bootcamp",
      description:
        "Learn HTML, CSS, JavaScript, and more to build responsive websites.",
      image:
        "https://www.learncodewithdurgesh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpremiumCourseBunddle1.455f75d2.png&w=828&q=75", // Placeholder image
      link: "#course1",
    },
    {
      title: "Data Science and Machine Learning",
      description:
        "Master data analysis, visualization, and machine learning techniques.",
      image:
        "https://api.learncodewithdurgesh.com/media/photos/next_js_banner.png", // Placeholder image
      link: "#course2",
    },
    {
      title: "Digital Marketing Masterclass",
      description:
        "Understand SEO, social media marketing, and online advertising strategies.",
      image:
        "https://www.learncodewithdurgesh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpremiumCourseBunddle1.455f75d2.png&w=828&q=75", // Placeholder image
      link: "#course3",
    },
    {
      title: "Graphic Design Essentials",
      description:
        "Learn the principles of design and how to create stunning graphics.",
      image: "https://via.placeholder.com/300x200?text=Graphic+Design", // Placeholder image
      link: "#course4",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          Explore our top courses and start learning today!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                <a
                  href={course.link}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-indigo-700"
                >
                  View Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
