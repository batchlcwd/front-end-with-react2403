import React from "react";

function BenefitsSection() {
  const benefits = [
    {
      title: "Affordable Learning",
      description:
        "Access high-quality courses at competitive prices with flexible payment options.",
      icon: "💰",
    },
    {
      title: "Lifetime Access",
      description:
        "Enroll in courses and gain lifetime access to materials, so you can learn at your own pace.",
      icon: "⏳",
    },
    {
      title: "Interactive Learning Experience",
      description:
        "Engage with interactive quizzes, assignments, and hands-on projects to reinforce your learning.",
      icon: "🎮",
    },
    {
      title: "Community and Networking",
      description:
        "Join a vibrant community of learners and professionals to share knowledge and collaborate.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose MindUp?</h2>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          Discover the unique benefits that set us apart from the rest.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
