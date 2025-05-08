import { Link } from "react-router-dom"
import CartStatus from "./CartStatus"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Shop
        </Link>
        <div className="navbar-links">
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
          <CartStatus />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
