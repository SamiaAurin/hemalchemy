import React from "react";

const PopularProducts = () => {
    const products = [
        { id: 1, name: "Armchair", description: "Light single chair", price: "$145", bg: "bg-green-100" },
        { id: 2, name: "Premium Sofa", description: "Light single chair", price: "$145", bg: "bg-blue-100" },
        { id: 3, name: "Minimal Sofa", description: "Light single chair", price: "$145", bg: "bg-purple-100" },
        { id: 4, name: "Dining Chair", description: "Light single chair", price: "$145", bg: "bg-orange-100" },
    ];

    return (
        <section className="popular-products-section">
            {/* Header */}
            <div className="header text-center">
                <h1 className="text-3xl font-bold">Popular Products</h1>
            </div>

            {/* Product Grid */}
            <div className="grid-container grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className={`product-card ${product.bg} p-6 rounded-lg shadow-md text-center`}
                    >
                        <div className="product-image">
                           
                            <img
                                src={`https://via.placeholder.com/150`}
                                alt={product.name}
                                className="mx-auto mb-4"
                            />
                        </div>
                        <h2 className="font-semibold text-lg">{product.name}</h2>
                        <p className="text-gray-500">{product.description}</p>
                        <p className="text-lg font-bold">{product.price}</p>
                    </div>
                ))}
            </div> 
            

            {/* Button */}
            <div className="text-center popular-explore-btn">
                <button className="explore-all-btn bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700">
                    Explore all items →
                </button>
            </div>
        </section>
    );
};

export default PopularProducts;
