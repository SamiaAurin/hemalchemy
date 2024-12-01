import React from 'react';

const Explore: React.FC = () => {
    return (
        <section className="explore-section">
            {/* Header */}
            <div className='explore-header'>
                <h1>Explore by Category</h1>
            </div>
            <div className="explore-container">
                {/* Sidebar */}
                <aside className="explore-sidebar">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-bar"
                    />
                    <ul className="category-list">
                        <li>Hair Clips</li>
                        <li>Hair Bows</li>
                        <li>Hair Bands</li>
                        <li>Earings</li>
                        <li>Lockets</li>
                        <li>Hand Rings</li>
                    </ul>
                    <button className="all-categories-btn">All Categories →</button>
                </aside>

                {/* Grid Section */}
                <div className="explore-grid">
                    <div
                        className="grid-item"
                        style={{
                            backgroundImage: `url('/Hair-clips/hairclip1.jpg')`,
                            backgroundSize: 'cover',        // Scales the image to cover the div
                            backgroundPosition: 'center',   // Centers the image within the div
                            backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
                          }}
                        >
                    
                        <button className="explore-btn">📸</button>
                    </div>
                    <div className="grid-item"
                        style={{
                            backgroundImage: `url('/Hair-Bows/bow-yellow1.jpg')`,
                            backgroundSize: 'cover',        // Scales the image to cover the div
                            backgroundPosition: 'center',   // Centers the image within the div
                            backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
                          }}
                        >
                        <button className="explore-btn">📸</button>
                    </div>
                    <div className="grid-item"
                        style={{
                            backgroundImage: `url('/Hair-band/1.jpg')`,
                            backgroundSize: 'cover',        
                            backgroundPosition: 'center',   
                            backgroundRepeat: 'no-repeat',  
                          }}
                        >
                        <button className="explore-btn">📸</button>
                    </div>
                    <div className="grid-item"
                        style={{
                            backgroundImage: `url('/Earings/1.jpg')`,
                            backgroundSize: 'cover',        
                            backgroundPosition: 'center',  
                            backgroundRepeat: 'no-repeat',  
                          }}
                        >
                        <button className="explore-btn">📸</button>
                    </div>
                    <div className="grid-item"
                    style={{
                        backgroundImage: `url('/Hand-rings/ring1.jpg')`,
                        backgroundSize: 'cover',        
                        backgroundPosition: 'center',  
                        backgroundRepeat: 'no-repeat',  
                      }}
                      >
                        <button className="explore-btn">📸</button>
                    </div>
                    <div className="grid-item"
                    style={{
                        backgroundImage: `url('/Lockets/square1.jpg')`,
                        backgroundSize: 'cover',        
                        backgroundPosition: 'center',  
                        backgroundRepeat: 'no-repeat',  
                      }}
                      >
                        <button className="explore-btn">📸</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
