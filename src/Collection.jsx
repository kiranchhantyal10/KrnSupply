
const collectionProducts = [
  {
    id: 1,
    name: 'STATIC THEORY',
    category: 'OVERSIZED T-SHIRT',
    image: '/images/static-theory-black-back.png',
    colour: 'BLACK',
    price: null,
    link: 'https://krnsupply.etsy.com',
  },
  {
    id: 2,
    name: 'COMING SOON',
    category: 'OVERSIZED T-SHIRT',
    image: '',
    colour: '',
    price: null,
    link: 'https://krnsupply.etsy.com',
  },
  {
    id: 3,
    name: 'COMING SOON',
    category: 'OVERSIZED HOODIE',
    image: '',
    colour: '',
    price: null,
    link: 'https://krnsupply.etsy.com',
  },
  {
    id: 4,
    name: 'COMING SOON',
    category: 'OVERSIZED T-SHIRT',
    image: '',
    colour: '',
    price: null,
    link: 'https://krnsupply.etsy.com',
  },
  {
    id: 5,
    name: 'COMING SOON',
    category: 'OVERSIZED HOODIE',
    image: '',
    colour: '',
    price: null,
    link: 'https://krnsupply.etsy.com',
  },
]

function Collection() {
  return (
    <section className="collection" id="collection">
      <div className="collection-heading">
        <p className="collection-count">05 PRODUCTS / FIRST DROP</p>
        <div>
          <p>EXPLORE KRN SUPPLY</p>
          <h2>THE COLLECTION</h2>
        </div>

        <span>01 — FIRST DROP</span>
      </div>

      <div className="collection-grid">
        {collectionProducts.map((product) => (
          <article className="collection-card" key={product.id}>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="collection-image"
            >
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
               <div className="product-placeholder">
                <span className="product-number">
                  00{product.id}
                  </span>

                 <span className="placeholder-logo">KRN</span>
                 <p>COMING SOON</p>
               </div>
                )}
            </a>

            <div className="collection-info">
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>

              <span>{product.price ?? 'PRICE TBA'}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Collection
