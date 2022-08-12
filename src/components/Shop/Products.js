import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = (props) => {
  const productsItems = useSelector((state) => state.products.productItems);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsItems.map((product) => {
          return (
            <ProductItem
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
