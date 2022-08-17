import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCart, sendCartData } from "./store/cartSlice";

let isInitial = true;
function App() {
  const cartIsVisible = useSelector((state) => state.ui.isCartVisible);
  const cart = useSelector((state) => state.cart.cartItems);
  const cartChange = useSelector((state) => state.cart.cartChange);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchCart());
      return;
    }
    if (cartChange) {
      dispatch(sendCartData(cart));
    }
  }, [cart]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
