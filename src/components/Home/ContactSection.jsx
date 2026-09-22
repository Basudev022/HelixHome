import { Clock, Mail, MapPin, Phone } from "lucide-react";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      {/* LEFT - CONTACT INFORMATION */}

      <div className="contact-info">
        <span className="contact-label">CONTACT US</span>

        <h2>
          Let’s Find Your
          <br />
          Perfect <span>Property</span>
        </h2>

        <div className="contact-details">
          <div className="contact-detail">
            <Phone size={16} />
            <span>+91 97761 89410</span>
          </div>

          <div className="contact-detail">
            <Mail size={16} />
            <span>helixhome@26gmail.com</span>
          </div>

          <div className="contact-detail">
            <MapPin size={16} />
            <span>Bhubaneswar, Odisha - 751010</span>
          </div>
        </div>
      </div>

      {/* CENTER - WORKING HOURS */}

      <div className="contact-middle">
        <div className="working-hours">
          <div className="clock-icon">
            <Clock size={25} />
          </div>

          <div>
            <h3>Working Hours</h3>

            <p>Monday - Saturday</p>

            <p>9:00 AM - 7:00 PM</p>
          </div>
        </div>

        <div className="contact-middle-divider"></div>

        {/* SOCIAL MEDIA */}

        <div className="follow-us">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <span className="social-text">f</span>
            </a>

            <a
              href="https://www.instagram.com/helixhome.in?"
              aria-label="Instagram"
            >
              <span className="social-text">◎</span>
            </a>

            <a href="#" aria-label="LinkedIn">
              <span className="social-text">in</span>
            </a>

            <a href="#" aria-label="YouTube">
              <span className="social-text">▶</span>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT - IMAGE */}

      <div className="contact-image">
        <img src="/contact-image.png" alt="Luxury property interior" />
      </div>
    </section>
  );
}

export default ContactSection;
