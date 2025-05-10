import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ProductListing from "./components/ProductListing"
import Cart from "./components/Cart"
import CartStatus from "./components/CartStatus"
import { CartProvider } from "./CartContext"

const App = () => {
  return (
    <CartProvider>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <CartStatus />
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
