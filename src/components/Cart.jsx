import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
  const { cart } = useContext(CartContext)

  return (
    <div className="container">
      <h1 className="heading">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h2 className="product-name">{item.name}</h2>
                <p className="product-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <p className="total-items">Total Items: {cart.length}</p>
        </div>
      )}
    </div>
  )
}

export default Cart
