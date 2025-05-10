import React from "react"
import { useCart } from "../CartContext"

const CartStatus = () => {
  const { cart } = useCart()
  return <span>Cart: {cart.length} items</span>
}

export default CartStatus
