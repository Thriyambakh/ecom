import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
