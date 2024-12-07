const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Payment Method",
      description: (
        <>
          <ul className="list-inside text-gray-600 leading-relaxed">
            <li className="mb-4">
              <strong>Payment Methods:</strong>
              <p className="mt-1">
                Payments can be made via <strong>COD</strong>, <strong>Bkash</strong>, <strong>Rocket</strong>, or <strong>Nagad</strong>.
              </p>
            </li>

            <li className="mb-4">
              <strong>Delivery Charges:</strong>
              <div className="mt-1">
                <p>Inside Dhaka: <strong>80 BDT</strong></p>
                <p>Outside Dhaka: <strong>120 BDT</strong></p>
              </div>
            </li>

            <li className="mt-2">
              Once the payment is received, we will process your order and share the delivery details.
            </li>
          </ul>

        </>
      ),
      icon: "💳", 
      bg: "bg-purple-100",
    },
    {
      id: 2,
      title: "Return Policy",
      description: (
        <>
         <ul className="list-none list-inside text-gray-600 leading-relaxed">
            <li className="mb-2">
              <strong>Damaged Products:</strong>
              <p className="mt-1">
                If the product is damaged during delivery, please contact us within 24 hours of receiving it with photos or videos of the damage. We will review the issue and arrange for a replacement if applicable.
              </p>
            </li>

            <li className="mb-2">
              <strong>Non-Returnable Conditions:</strong>
              <p className="mt-1">
                We do not accept returns or exchanges for change of mind, wrong orders placed by the customer, or minor variations as all products are handmade and unique.
              </p>
            </li>

            <li className="mb-2">
              <strong>Refunds:</strong>
              <p className="mt-1">
                Refunds will only be provided if we are unable to replace a damaged item.
              </p>
            </li>
           </ul>
           <p>
           We appreciate your understanding and trust in HemAlchemy! If you have any questions, feel free to reach out to us.
           </p>

        </>
      ),
      icon: "📦", // Replace with an actual icon
      bg: "bg-orange-100",
    },
    {
      id: 3,
      title: "Customer Support",
      description: (
        <>
          <p>We are here to assist you with any inquiries, concerns, or issues you may have.</p>
          <p className="font-bold mt-2">Working Hours: 24/7</p>
          <p>We aim to respond to all messages within 24 hours.</p>
          <p>
            For updates on your order status, please provide your order ID when
            contacting us.
          </p>
          <p className="mt-2">
            We value your feedback and strive to provide the best service
            possible. Don’t hesitate to get in touch!
          </p>
        </>
      ),
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
            <div className="text-gray-600 text-left">{benefit.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
