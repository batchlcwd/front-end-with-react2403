import React from "react";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      text: "MindUp has transformed the way I learn. The courses are comprehensive and easy to follow!",
      image: "https://via.placeholder.com/100?text=John", // Placeholder image
    },
    {
      name: "Jane Smith",
      text: "The flexibility of studying at my own pace has made a huge difference in my education.",
      image: "https://via.placeholder.com/100?text=Jane", // Placeholder image
    },
    {
      name: "Emily Johnson",
      text: "I loved the variety of courses available. I was able to learn new skills that helped me advance in my career!",
      image: "https://via.placeholder.com/100?text=Emily", // Placeholder image
    },
    {
      name: "Michael Brown",
      text: "The instructors are knowledgeable and supportive. I highly recommend MindUp to anyone looking to learn!",
      image: "https://via.placeholder.com/100?text=Michael", // Placeholder image
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Learners Say</h2>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          Hear from our satisfied learners who have transformed their skills
          with MindUp.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                "{testimonial.text}"
              </p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
