
import { useState } from 'react'

const productVariants = {
  Black: {
    front: '/images/static-theory-black-front.png',
    back: '/images/static-theory-black-back.png',
  },
  Brown: {
    front: '/images/static-theory-brown-front.png',
    back: '/images/static-theory-brown-back.png',
  },
  Navy: {
    front: '/images/static-theory-navy-front.png',
    back: '/images/static-theory-navy-back.png',
  },
}

function Products() {
  const [selectedColour, setSelectedColour] = useState('Black')
  const [selectedView, setSelectedView] = useState('front')

  const currentImage = productVariants[selectedColour][selectedView]

  return (
    <section className="products" id="products">
      <div className="products-heading">
        <p>THE FIRST DROP — 001</p>
        <h2>FEATURED PRODUCT</h2>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img
            src={currentImage}
            alt={`STATIC THEORY ${selectedColour} T-shirt ${selectedView} view`}
          />

          <div className="image-controls">
            <button
              className={selectedView === 'front' ? 'active' : ''}
              onClick={() => setSelectedView('front')}
            >
              FRONT
            </button>

            <button
              className={selectedView === 'back' ? 'active' : ''}
              onClick={() => setSelectedView('back')}
            >
              BACK
            </button>
          </div>
        </div>

        <div className="product-details">
          <p className="product-category">KRNxSUPPLY / T-SHIRT</p>

          <h3>STATIC THEORY</h3>

          <p className="product-description">
            Oversized graphic T-shirt. Minimal front branding,
            statement back print.
          </p>

          <p className="product-colour">
            COLOUR: {selectedColour.toUpperCase()}
          </p>

          <div className="colour-options">
            {Object.keys(productVariants).map((colour) => (
              <button
                key={colour}
                className={`colour-button ${selectedColour === colour ? 'selected' : ''}`}
                onClick={() => setSelectedColour(colour)}
                aria-label={`Select ${colour}`}
                aria-pressed={selectedColour === colour}
              >
                {colour}
              </button>
            ))}
          </div>

          <a
            href="https://krnsupply.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="product-button"
          >
            VIEW PRODUCT ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products
