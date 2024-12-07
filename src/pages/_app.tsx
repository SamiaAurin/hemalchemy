// src/pages/_app.tsx
import React, { useRef } from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Explore from '../components/Explore';
import PopularProducts from '../components/PopularProducts';
import SpecialPackage from '../components/SpecialPackage';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
{/* imports of all components CSS */}
import '../styles/globals.css';
import '../styles/Hero.css';
import '../styles/Explore.css';
import '../styles/PopularProducts.css';
import '../styles/SpecialPackage.css'
import '../styles/Benefits.css';


function MyApp({ Component, pageProps }: any) {
  const exploreRef = useRef(null);
  const specialPackageRef = useRef(null);
  const popularProductsRef = useRef(null);
  const benefitsRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <Navbar />
      <Hero />
      <div ref={exploreRef}>
        <Explore />
      </div>
      <div ref={popularProductsRef}>
        <PopularProducts />
      </div>
      <div ref={specialPackageRef}>
        <SpecialPackage />
      </div>
      <div ref={benefitsRef}>
        <Benefits />
      </div>
      {/* Footer */}
      <Footer
        scrollToSection={scrollToSection}
        refs={{
          benefits: benefitsRef,
          explore: exploreRef,
          popular: popularProductsRef,
          specialPackage: specialPackageRef,
        }}
      />
    </>
  );
}

export default MyApp;
