import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;
  const isVisible = cart.isCartVisible;

  return (
    <>
      {isVisible && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <CartItem
                    title={item.title}
                    quantity={item.quantity}
                    total={item.quantity * item.price}
                    price={item.price}
                    id={item.id}
                    key={item.id}
                  />
                );
              })}
            {!cartItems.length && (
              <p style={{ textAlign: "center", color: "#1ad1b9" }}>
                Not products in the cart
              </p>
            )}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
