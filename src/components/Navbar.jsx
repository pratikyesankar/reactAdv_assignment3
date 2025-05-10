import React from "react"
import { Link } from "react-router-dom"
import CartStatus from "./CartStatus"

const Navbar = () => {
  return (
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
  )
}

export default Navbar
