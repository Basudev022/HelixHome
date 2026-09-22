import { Eye, Home, Users } from "lucide-react";
import { useEffect } from "react";
import HomeHeader from "../../components/Home/HomeHeader";
import "./AboutPage.css";

function AboutPage({ onGetInTouch }) {
  // Always open the Learn More page from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <HomeHeader onGetInTouch={onGetInTouch} />

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1781183955329-6edb3d53b8d9?auto=format&fit=crop&w=2200&q=85"
            alt="Luxury modern home"
          />
        </div>

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <div className="about-breadcrumb">
            <span>Home</span>
            <span>›</span>
            <span>About Us</span>
            <span>›</span>
            <span>Learn More</span>
          </div>

          <h1>About Us</h1>

          <p>
            Learn more about our story, values and the people
            <br />
            behind your dream home.
          </p>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="about-journey">
        <div className="about-journey-content">
          <div className="about-label-row">
            <span>LEARN MORE</span>
          </div>

          <div className="about-gold-line"></div>

          <h2>
            Our Journey, Your <span>Home</span>
          </h2>

          <p className="journey-main-text">
            As Bhubaneswar continues to grow, so does the need for trusted and
            thoughtfully chosen real estate. Helix Home was created to make that
            journey simpler, clearer and more reliable for every buyer.
          </p>

          <p className="journey-second-text">
            We bring together carefully selected properties, local market
            knowledge and a customer-first approach to help individuals and
            families find spaces that match their lifestyle, aspirations and
            future plans. From premium homes to valuable investment
            opportunities, we believe every property decision should be built on
            transparency, expertise and trust.
          </p>

          {/* ================= VALUES ================= */}
          <div className="about-values">
            <div className="about-value">
              <div className="about-value-icon">
                <Home size={28} strokeWidth={1.5} />
              </div>

              <h3>Our Mission</h3>

              <p>
                To make property ownership simple, transparent and accessible
                for everyone.
              </p>
            </div>

            <div className="about-value">
              <div className="about-value-icon">
                <Eye size={28} strokeWidth={1.5} />
              </div>

              <h3>Our Vision</h3>

              <p>
                To be the most trusted real estate partner, building stronger
                communities and brighter futures.
              </p>
            </div>

            <div className="about-value">
              <div className="about-value-icon">
                <Users size={28} strokeWidth={1.5} />
              </div>

              <h3>Our Values</h3>

              <p>
                Trust, integrity, customer focus and a commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="about-journey-image">
          <div className="about-image-frame"></div>

          <img
            src="https://images.unsplash.com/photo-1687783615772-5874311ce11c?auto=format&fit=crop&w=1600&q=85"
            alt="Luxury property with swimming pool"
          />

          <div className="about-quote">
            <p>
              “More Than Properties,
              <br />
              We Build Possibilities.”
            </p>

            <div className="quote-line"></div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="about-statistics">
        <div className="about-stat">
          <h3>0</h3>
          <p>Properties Sold</p>
        </div>

        <div className="about-stat">
          <h3>0</h3>
          <p>Years Experience</p>
        </div>

        <div className="about-stat">
          <h3>0</h3>
          <p>Happy Clients</p>
        </div>

        <div className="about-stat">
          <h3>0</h3>
          <p>Trusted Partners</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
