
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            KRN <span>SUPPLY</span>
          </a>

          <p>
            Independent streetwear.
            <br />
            Built different.
          </p>
        </div>

        <div className="footer-links">
          <h3>EXPLORE</h3>
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#products">Featured Product</a>
        </div>

        <div className="footer-links">
          <h3>SHOP</h3>
          <a
            href="https://krnsupply.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Etsy Store ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 KRN Supply. All rights reserved.</p>
        <p>INDEPENDENT STREETWEAR</p>
      </div>
    </footer>
  )
}

export default Footer
