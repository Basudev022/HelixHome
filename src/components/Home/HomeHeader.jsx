import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HomeHeader({ onGetInTouch }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navRef = useRef(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTimer = useRef(null);
  const isProgrammaticScroll = useRef(false);

  const isAboutPage = location.pathname === "/about";
  const isHomePage = location.pathname === "/";

  const [activeSection, setActiveSection] = useState(
    isAboutPage ? "about" : "home",
  );

  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 50,
    left: 0,
  });

  /* =========================================
     UPDATE ACTIVE BAR POSITION
  ========================================= */

  const updateIndicator = (section = activeSection) => {
    let activeRef = homeRef;

    if (section === "about") {
      activeRef = aboutRef;
    }

    if (section === "contact") {
      activeRef = contactRef;
    }

    if (!activeRef.current) {
      return;
    }

    const link = activeRef.current;

    /*
     * Use offsetLeft instead of
     * getBoundingClientRect().
     *
     * This keeps the bar centered
     * correctly below each nav item.
     */

    const linkCenter = link.offsetLeft + link.offsetWidth / 2;

    const indicatorWidth = 50;

    const indicatorLeft = linkCenter - indicatorWidth / 2;

    setIndicatorStyle({
      width: indicatorWidth,
      left: indicatorLeft,
    });
  };

  /* =========================================
     UPDATE BAR AFTER RENDER
  ========================================= */

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      updateIndicator(activeSection);
    });
  }, [activeSection, location.pathname]);

  /* =========================================
     UPDATE BAR ON RESIZE
  ========================================= */

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        updateIndicator(activeSection);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection]);

  /* =========================================
     PAGE CHANGE
  ========================================= */

  useEffect(() => {
    if (isAboutPage) {
      setActiveSection("about");

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }

    if (isHomePage) {
      setActiveSection("home");

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [location.pathname, isAboutPage, isHomePage]);

  /* =========================================
     DETECT SECTION WHILE SCROLLING
  ========================================= */

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const handleScroll = () => {
      /*
       * Do not let the scroll listener override
       * the section while a menu click is
       * performing smooth scrolling.
       */

      if (isProgrammaticScroll.current) {
        return;
      }

      const aboutSection = document.getElementById("about");

      const contactSection = document.getElementById("contact");

      /*
       * Fixed header height is 86px.
       *
       * Once a section reaches approximately
       * this position, that section becomes active.
       */

      const headerOffset = 100;

      /* =========================================
         CONTACT
      ========================================= */

      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();

        if (contactRect.top <= headerOffset) {
          setActiveSection("contact");
          return;
        }
      }

      /* =========================================
         ABOUT US
      ========================================= */

      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();

        if (aboutRect.top <= headerOffset) {
          setActiveSection("about");
          return;
        }
      }

      /* =========================================
         HOME
      ========================================= */

      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  /* =========================================
     PROGRAMMATIC SCROLL
  ========================================= */

  const startProgrammaticScroll = (duration = 900) => {
    isProgrammaticScroll.current = true;

    clearTimeout(scrollTimer.current);

    scrollTimer.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, duration);
  };

  /* =========================================
     HOME CLICK
  ========================================= */

  const handleHomeClick = (e) => {
    e.preventDefault();

    setActiveSection("home");

    startProgrammaticScroll(900);

    if (isAboutPage) {
      navigate("/");

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================
     ABOUT CLICK
  ========================================= */

  const handleAboutClick = (e) => {
    e.preventDefault();

    setActiveSection("about");

    startProgrammaticScroll(900);

    if (isAboutPage) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const aboutSection = document.getElementById("about");

    if (!aboutSection) {
      return;
    }

    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================
     CONTACT CLICK
  ========================================= */

  const handleContactClick = (e) => {
    e.preventDefault();

    /*
     * Immediately activate CONTACT.
     *
     * This moves the gold bar immediately.
     */

    setActiveSection("contact");

    startProgrammaticScroll(1200);

    /*
     * If currently on About page,
     * first navigate back to Home.
     */

    if (isAboutPage) {
      navigate("/");

      setTimeout(() => {
        const contactSection = document.getElementById("contact");

        if (!contactSection) {
          return;
        }

        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);

      return;
    }

    /*
     * Already on Home page.
     */

    const contactSection = document.getElementById("contact");

    if (!contactSection) {
      return;
    }

    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================
     CLEANUP
  ========================================= */

  useEffect(() => {
    return () => {
      clearTimeout(scrollTimer.current);
    };
  }, []);

  /* =========================================
     JSX
  ========================================= */

  return (
    <header className="home-header">
      {/* =====================================
          LOGO
      ===================================== */}

      <div className="home-logo">
        <img
          src="/helix-home-logo-only.png"
          alt="Helix Home Logo"
          className="home-logo-image"
        />

        <div className="home-logo-text">HelixHome</div>
      </div>

      {/* =====================================
          NAVIGATION
      ===================================== */}

      <nav className="home-nav" ref={navRef}>
        {/* =================================
            HOME
        ================================= */}

        <a
          href="/"
          ref={homeRef}
          className={activeSection === "home" ? "active" : ""}
          onClick={handleHomeClick}
        >
          HOME
        </a>

        {/* =================================
            ABOUT US
        ================================= */}

        <a
          href="#about"
          ref={aboutRef}
          className={activeSection === "about" ? "active" : ""}
          onClick={handleAboutClick}
        >
          ABOUT US
        </a>

        {/* =================================
            CONTACT
        ================================= */}

        <a
          href="#contact"
          ref={contactRef}
          className={activeSection === "contact" ? "active" : ""}
          onClick={handleContactClick}
        >
          CONTACT
        </a>

        {/* =================================
            SINGLE MOVING GOLD BAR
        ================================= */}

        <span
          className="home-nav-indicator"
          style={{
            width: `${indicatorStyle.width}px`,
            transform: `translateX(${indicatorStyle.left}px)`,
          }}
        />
      </nav>

      {/* =====================================
          GET IN TOUCH
      ===================================== */}

      <button
        type="button"
        className="header-contact-btn"
        onClick={onGetInTouch}
      >
        <span>GET IN TOUCH</span>

        <span className="whatsapp-symbol">◔</span>
      </button>
    </header>
  );
}

export default HomeHeader;
