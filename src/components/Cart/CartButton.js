import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import uiSlice from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(uiSlice.actions.toggelVisibility());
  };
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce((some, item) => {
    return some + item.quantity;
  }, 0);
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
