import React from "react"
import { useCart } from "../CartContext"

const Cart = () => {
  const { cart } = useCart()

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
