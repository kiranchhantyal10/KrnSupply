import './Navbar.css'
function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        KRN SUPPLY
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#collection">Collection</a>
        <a href="#about">About</a>
      </nav>

      <a
        href="https://krnsupply.etsy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="shop-link"
      >
        SHOP NOW ↗
      </a>
    </header>
  )
}

export default Navbar
