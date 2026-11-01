
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <img
          src="/images/fallen-campaign.png"
          alt="KRN Supply streetwear campaign"
          className="hero-image"
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-label">
          KRN SUPPLY — EST. 2026
        </p>

        <h1>
          BUILT
          <br />
          DIFFERENT.
        </h1>

        <p className="hero-description">
          Independent streetwear.
          <br />
          Distinct by design.
        </p>

        <a href="#collection" className="hero-button">
          EXPLORE THE COLLECTION ↗
        </a>
      </div>

      <div className="hero-side-text">
        <span>INDEPENDENT STREETWEAR</span>
        <span>001 — THE FIRST DROP</span>
      </div>

      <div className="hero-bottom">
        <span>EST. 2026</span>
        <span>DESIGNED TO STAND APART</span>
      </div>
    </section>
  )
}

export default Hero
