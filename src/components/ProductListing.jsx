import React from "react"
import { useCart } from "../CartContext"

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
]

const ProductListing = () => {
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductListing
