import React from "react";

function FeaturesSection() {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry experts with years of experience.",
      icon: "👨‍🏫",
    },
    {
      title: "Flexible Learning",
      description:
        "Study at your own pace with access to courses anytime, anywhere.",
      icon: "🕒",
    },
    {
      title: "Certification",
      description:
        "Receive certificates for completed courses to boost your resume.",
      icon: "🏆",
    },
    {
      title: "Community Support",
      description: "Join a community of learners for support and networking.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          Discover what makes MindUp the perfect choice for your learning
          journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
