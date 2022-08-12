import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "Test Item1", quantity: 3, total: 18, price: 6 }}
        />
        <CartItem
          item={{ title: "Test Item2", quantity: 3, total: 18, price: 6 }}
        />
        <CartItem
          item={{ title: "Test Item3", quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;