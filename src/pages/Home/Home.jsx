import { useState } from "react";

import AboutSection from "../../components/Home/AboutSection";
import ContactSection from "../../components/Home/ContactSection";
import Footer from "../../components/Home/Footer";
import FooterCTA from "../../components/Home/FooterCTA";
import GetInTouchModal from "../../components/Home/GetInTouchModal";
import HeroSection from "../../components/Home/HeroSection";
import HomeHeader from "../../components/Home/HomeHeader";
import TestimonialSection from "../../components/Home/TestimonialSection";

import "./Home.css";

function Home() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <main className="home-page">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <HomeHeader onGetInTouch={() => setShowContactModal(true)} />

      {/* =====================================================
          HERO
      ===================================================== */}

      <HeroSection />

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <AboutSection />

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <TestimonialSection />

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <ContactSection />

      {/* =====================================================
          FOOTER CTA
      ===================================================== */}

      <FooterCTA onGetInTouch={() => setShowContactModal(true)} />

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      {/* =====================================================
          GET IN TOUCH POPUP
      ===================================================== */}

      <GetInTouchModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </main>
  );
}

export default Home;
