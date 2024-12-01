import React from "react";

const SpecialPackage = () => {
  const mainProduct = {
    id: 1,
    name: "Larkin Wood Full Set",
    price: "$729.99",
    rating: 5,
    description:
      "Cast Aluminum Outdoor Chaise Lounge. Combines appearance, function, and quality.",
    image: "https://via.placeholder.com/300",
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Living Room Family Set",
      price: "$229.99",
      rating: 4,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Living Room Special Set",
      price: "$329.99",
      rating: 5,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Living Room Premium Set",
      price: "$587.99",
      rating: 5,
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section className="special-package-section">
      {/* Header */}
      <div className="header text-center mb-8">
        <h1 className="text-4xl font-bold">Special Package</h1>
      </div>

      {/* Main Product and Sidebar */}
      <div className="grid grid-cols-3 gap-8">
        {/* Main Product Section */}
        <div className="col-span-2 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="main-product-image bg-gray-300 h-64 mb-4 flex items-center justify-center">
            <img
              src={mainProduct.image}
              alt={mainProduct.name}
              className="h-full object-cover rounded"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-2">{mainProduct.name}</h2>
          <div className="rating flex text-yellow-500 mb-2">
            {Array.from({ length: mainProduct.rating }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-xl font-bold mb-4">{mainProduct.price}</p>
          <button className="add-to-cart-btn bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600">
            Add to Cart
          </button>
        </div>

        {/* Sidebar Section */}
        <div>
          {/* Description */}
          <div className="description bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{mainProduct.description}</p>
          </div>

          {/* Related Products */}
          <div className="related-products space-y-4">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="related-product-card bg-blue-100 p-4 rounded-lg shadow flex items-center"
              >
                <div className="product-image w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-cover rounded"
                  />
                </div>
                <div className="product-info ml-4 flex-1">
                  <h4 className="font-semibold">{product.name}</h4>
                  <div className="rating flex text-yellow-500 text-sm">
                    {Array.from({ length: product.rating }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPackage;
