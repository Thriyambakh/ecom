import { useSelector } from "react-redux";

export default function Orders() {
  const orders = useSelector((state) => state.shop.orders);

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.map((o, i) => (
        <div key={i}>{o.name}</div>
      ))}
    </div>
  );
}
