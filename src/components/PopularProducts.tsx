import React, { useState } from "react";

const PopularProducts = () => {
    const products = [
        { id: 1, name: "Floral Bloom Hair Clip", description: "Hair Clip", price: "৳44 BDT", bg: "bg-green-100", src: "/Hair-clips/hairclip1.jpg" },
        { id: 2, name: "Midnight Blooms Headband", description: "Head Band", price: "৳49 BDT", bg: "bg-blue-100", src: "/Hair-band/1.jpg" },
        { id: 3, name: "Floral Dew Bow Clip", description: "Light blue hair bow-clip", price: "৳49 BDT", bg: "bg-purple-100", src: "/Hair-Bows/bow-blue1.jpg" },
        { id: 4, name: "Vintage Flora Pendant", description: "Single flowery pendant", price: "৳159 BDT", bg: "bg-orange-100", src: "/Lockets/brown1.jpg" },
        { id: 5, name: "Vintage Flora Ring", description: "Beautiful flowery ring", price: "৳69 BDT", bg: "bg-pink-100", src: "/Hand-rings/ring1.jpg" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="popular-products-section relative">
            {/* Header */}
            <div className="header text-center mb-6">
                <h1 className="text-3xl font-bold">Popular Products</h1>
            </div>

            {/* Slider */}
            <div className="slider-container relative overflow-hidden">
                <div
                    className="slider flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                        width: `${products.length * (100 / 3)}%`,
                    }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-card flex-shrink-0 w-1/3 px-4 py-6 rounded-lg shadow-md text-center"
                        >
                            <div className="product-image">
                                <img
                                    src={product.src}
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
            </div>

            {/* Slider Navigation */}
            <div className="slider-navigation absolute bottom-4 left-4 flex space-x-4">
                <button
                    onClick={handlePrev}
                    className="slider-btn"
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    className="slider-btn"
                >
                    →
                </button>
            </div>

            {/* Explore Button */}
            <div className="text-center mt-6">
                <button className="explore-all-btn">
                    Explore all items →
                </button>
            </div>
        </section>
    );
};

export default PopularProducts;
