import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props;
  const dispatch = useDispatch();
  const minceBtnHandler = () => {
    dispatch(cartActions.removeAmount(id));
  };
  const plusBtnHandler = () => {
    dispatch(cartActions.addAmount(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minceBtnHandler}>-</button>
          <button onClick={plusBtnHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
