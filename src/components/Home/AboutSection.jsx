import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AboutSection() {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://turntable.kagiso.io/images/HOUSE_ZAI_1.width-1100.jpg",
    "https://spaceconsultancydubai.com/wp-content/uploads/2025/04/Villa-Construction-Consultancy-Dubai-5.jpg",
    "https://images-pw.pixieset.com/site/NR8qYj/34b6dA/u1877724419_villa_proffesionla_photography_in_dubai_daily_lig_ed4a446c-f060-4b62-bd78-d05d89257f39_2-261aa1d1-1500.png",
    "https://www.aslantasdunyasi.com/images/projects/project-villa-kayrak-cephe.png",
  ];

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setCurrentImage((previousImage) => {
        return (previousImage + 1) % images.length;
      });
    }, 2000);

    return () => {
      clearInterval(sliderTimer);
    };
  }, [images.length]);

  return (
    <section id="about" className="about-section">
      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}

      <div className="about-content">
        <span className="about-label">ABOUT US</span>

        <h2>
          Building Future of <span>Bhubaneswar</span>
        </h2>

        <div className="about-divider"></div>

        <p>
          We are a real estate company committed to providing the best property
          solutions in Bhubaneswar. With years of experience and a
          customer-first approach, we create spaces that inspire and last a
          lifetime.
        </p>

        <button
          type="button"
          className="about-learn-btn"
          onClick={() => navigate("/about")}
        >
          <span>LEARN MORE</span>

          <ArrowRight size={18} strokeWidth={1.7} />
        </button>
      </div>

      {/* =====================================================
          RIGHT IMAGE SLIDER
      ===================================================== */}

      <div className="about-image-wrapper">
        <div className="about-image">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Luxury property ${index + 1}`}
              className={`about-slider-image ${
                currentImage === index ? "active" : ""
              }`}
            />
          ))}
        </div>

        {/* ===================================================
            GOLD FRAME
        =================================================== */}

        <div className="about-gold-curve"></div>

        {/* ===================================================
            DECORATIVE DOTS
        =================================================== */}

        <div className="about-dots">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
