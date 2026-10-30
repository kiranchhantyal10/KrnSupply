
const collectionProducts = [
  {
    id: 1,
    name: 'STATIC THEORY',
    category: 'OVERSIZED T-SHIRT',
    image: '/images/static-theory-black-back.png',
    colour: 'BLACK',
    link: 'https://krnxsupply.etsy.com',
  },
]

function Collection() {
  return (
    <section className="collection" id="collection">
      <div className="collection-heading">
        <div>
          <p>EXPLORE KRNxSUPPLY</p>
          <h2>THE COLLECTION</h2>
        </div>

        <span>01 — CURRENT DROP</span>
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
              <img src={product.image} alt={product.name} />
            </a>

            <div className="collection-info">
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>

              <span>{product.colour}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Collection
