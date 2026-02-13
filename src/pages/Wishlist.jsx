import { useSelector } from "react-redux";

export default function Wishlist() {
  const items = useSelector((state) => state.shop.wishlist);

  return (
    <div>
      <h2>Wishlist</h2>
      {items.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))}
    </div>
  );
}
