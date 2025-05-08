import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ProductListing = () => {
  const { addToCart } = useContext(CartContext)

  const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Smartphone", price: 499.99 },
    { name: "Headphones", price: 79.99 },
    { name: "Tablet", price: 299.99 },
  ]

  return (
    <div className="container">
      <h1 className="heading">Products</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListing
