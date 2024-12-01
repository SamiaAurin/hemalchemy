// src/components/Navbar.tsx
const Navbar = () => (
    <nav className="navbar">
        {/* Logo Section -->*/}
        <div className="navbar-logo">
            <img src="logo.png" alt="Logo" />
            <span>HEMALCHEMY</span>
        </div>

        {/*  Navigation Links -->*/}
        <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Search Icon -->*/}
        <div className="navbar-search">
           <i className="fas fa-search"></i>
        </div>
  </nav>
  );
  export default Navbar;
  