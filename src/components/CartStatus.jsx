import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartStatus = () => {
  const { cart } = useContext(CartContext)
  return <div className="cart-status">Cart: {cart.length} item(s)</div>
}

export default CartStatus
