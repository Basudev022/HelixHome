import { Award, Building2, Users } from "lucide-react";
import { useEffect, useRef } from "react";

import "./HeroSection.css";

function HeroSection({ onGetInTouch }) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (!background) {
      return;
    }

    let animationFrame;
    let startTime = performance.now();

    /*
     * ---------------------------------------------------------
     * BACKGROUND ANIMATION
     * ---------------------------------------------------------
     *
     * The supplied skyline image is used directly.
     *
     * The animation creates a slow forward/zoom effect
     * without changing the actual architecture of the image.
     */

    const animateBackground = (time) => {
      const elapsed = time - startTime;

      /*
       * -------------------------------------------------------
       * ANIMATION SPEED
       * -------------------------------------------------------
       *
       * One complete animation cycle = 30 seconds.
       *
       * Increased from 18 seconds to make the movement slower.
       */

      const progress = (elapsed % 30000) / 30000;

      /*
       * Smooth movement:
       *
       * 0 -> 1 -> 0
       */

      const wave = (1 - Math.cos(progress * Math.PI * 2)) / 2;

      /*
       * -------------------------------------------------------
       * ZOOM
       * -------------------------------------------------------
       *
       * Previous zoom: 8%
       * New zoom: 18%
       *
       * The image will zoom much closer while keeping
       * the same smooth movement style.
       */

      const scale = 1.0 + wave * 0.18;

      /*
       * -------------------------------------------------------
       * VERTICAL MOVEMENT
       * -------------------------------------------------------
       */

      const translateY = wave * -8;

      /*
       * -------------------------------------------------------
       * HORIZONTAL MOVEMENT
       * -------------------------------------------------------
       */

      const translateX = Math.sin(progress * Math.PI * 2) * 5;

      /*
       * Apply animation to the supplied image.
       */

      background.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;

      animationFrame = requestAnimationFrame(animateBackground);
    };

    animationFrame = requestAnimationFrame(animateBackground);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* =====================================================
          EXACT SKYLINE BACKGROUND
          ===================================================== */}

      <div className="hero-background">
        <div ref={backgroundRef} className="hero-background-image">
          <img src="/hero-city.png" alt="" />
        </div>
      </div>

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className="hero-content">
        <div className="hero-text">
          <p
            className="
              hero-small-title
              hero-animate-small-title
            "
          >
            FIND YOUR DREAM HOME
          </p>

          <h2
            className="
              hero-animate-heading
            "
          >
            FIND A PLACE <span>YOU'LL LOVE</span> TO CALL HOME
          </h2>

          <div
            className="
              hero-divider
              hero-animate-divider
            "
          ></div>

          <p
            className="
              hero-description
              hero-animate-description
            "
          >
            We help you discover premium properties
            <br />
            that match your lifestyle and aspirations.
          </p>
        </div>

        {/* =================================================
            HERO STATISTICS
            ================================================= */}

        <div
          className="
            hero-stats
            hero-animate-stats
          "
        >
          <div className="hero-stat">
            <Building2 className="hero-stat-icon" size={30} strokeWidth={1.5} />

            <h3>500+</h3>

            <p>Properties Sold</p>
          </div>

          <div className="hero-stat">
            <Award className="hero-stat-icon" size={30} strokeWidth={1.5} />

            <h3>10+</h3>

            <p>Years Experience</p>
          </div>

          <div className="hero-stat">
            <Users className="hero-stat-icon" size={30} strokeWidth={1.5} />

            <h3>2,000+</h3>

            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
