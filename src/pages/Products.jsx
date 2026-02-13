import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, placeOrder } from "../shopSlice";
import emailjs from "@emailjs/browser";

export default function Products() {
  const products = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();

  const buyProduct = (product) => {
    dispatch(placeOrder(product));

    const templateParams = {
      product_name: product.name,
      price: product.price,
      message: `Your order for ${product.name} has been placed successfully.`,
      to_email: "s.v.amitesh@gmail.com",
    };

    emailjs
      .send(
        "service_lmiq8z2",
        "template_eytfkud",
        templateParams,
        "Se43nEdJSBfwilXfc"
      )
      .then(() => {
        alert("Order placed & email sent!");
      })
     .catch((err) => {
  console.error("EMAIL ERROR:", err);
  alert("Email failed");
});
  };

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          {p.name} - ${p.price}

          <button onClick={() => dispatch(addToWishlist(p))}>
            Wishlist
          </button>

          <button onClick={() => buyProduct(p)}>
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}
