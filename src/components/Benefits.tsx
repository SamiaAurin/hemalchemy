import React from "react";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Payment Method",
      description: "We offer flexible payment options, to make easier.",
      icon: "💳", // Replace with an actual icon if needed (e.g., from FontAwesome or an image URL)
      bg: "bg-purple-100",
    },
    {
      id: 2,
      title: "Return Policy",
      description: "You can return a product within 30 days.",
      icon: "📦", // Replace with an actual icon
      bg: "bg-orange-100",
    },
    {
      id: 3,
      title: "Customer Support",
      description: "Our customer support is 24/7.",
      icon: "🎧", // Replace with an actual icon
      bg: "bg-green-100",
    },
  ];

  return (
    <section className="benefits-section py-12 bg-blue-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Benefits for your expediency
        </h1>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-3 gap-8 px-12">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className={`benefit-card p-6 rounded-lg shadow-md text-center ${benefit.bg}`}
          >
            {/* Icon */}
            <div className="icon text-5xl mb-4">{benefit.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800">
              {benefit.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
