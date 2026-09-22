function FooterCTA({ onGetInTouch }) {
  return (
    <section className="footer-cta">
      <div className="footer-cta-content">
        <h2>Ready to find your next home?</h2>

        <p>Our team is here to help you every step of the way.</p>
      </div>

      <button type="button" className="footer-cta-btn" onClick={onGetInTouch}>
        GET IN TOUCH
        <span>◉</span>
      </button>
    </section>
  );
}

export default FooterCTA;
