import React from "react";

// Define types for the props
interface FooterProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  refs: {
    benefits: React.RefObject<HTMLElement>;
    explore: React.RefObject<HTMLElement>;
    popular: React.RefObject<HTMLElement>;
    specialPackage: React.RefObject<HTMLElement>;
  };
}

const Footer: React.FC<FooterProps> = ({ scrollToSection, refs }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Contact Section */}
        <div className="footer-column">
          <img src="logo.png" alt="HemAlchemy" className="footer-logo" />
          <address className="footer-address">
            <br />
            Dhaka, Bangladesh
          </address>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61567107275367"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/hemalchemy/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Help Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Help</h3>
          <ul className="footer-links">
            <li>
              <button
                onClick={() => scrollToSection(refs.benefits)}
                className="footer-link-button"
              >
                Delivery
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.benefits)}
                className="footer-link-button"
              >
                Returns
              </button>
            </li>
          </ul>
        </div>

        {/* Shop Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Shop</h3>
          <ul className="footer-links">
            <li>
              <button
                onClick={() => scrollToSection(refs.explore)}
                className="footer-link-button"
              >
                Categories
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.popular)}
                className="footer-link-button"
              >
                Popular
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.specialPackage)}
                className="footer-link-button"
              >
                Special Packages
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
