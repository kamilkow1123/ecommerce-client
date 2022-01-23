import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import Navbar from "../../navigation/Navbar";
//action creators
import {
  addToCart,
  deleteFromCart,
  fetchCartProducts,
  createOrder,
} from "../../../state/actions";

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector(({ cart }) => cart.listOfCartProducts);

  const totalCost = useSelector(({ cart }) => cart.totalCartPrice);

  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch, totalCost]);

  const handleAddProduct = (id) => {
    dispatch(addToCart(id));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteFromCart(id));
  };

  const renderProducts = () => {
    return products.map(({ id, product, quantity }) => {
      return (
        <div key={id} className="cart__product">
          <p className="cart__product__name">{product.product_name}</p>
          <div style={{ maxWidth: "100px", maxHeight: "100px" }}>
            <img
              style={{
                objectFit: "cover",
                height: "100px",
              }}
              src={product.image_url}
            ></img>
          </div>
          <p className="cart__product__price">${product.retail_price_brutt}</p>
          <div className="cart__product__buttons">
            <button
              className="cart__product__button"
              onClick={() => handleDeleteProduct(product.id)}
            >
              -
            </button>
            <p className="cart__product__quantity">{quantity}</p>
            <button
              className="cart__product__button"
              onClick={() => handleAddProduct(product.id)}
            >
              +
            </button>
            Buy at least 10 products to get a discount
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div className="cart">
        <div className="cart__container">
          <div className="cart__products">{renderProducts()}</div>
          <div className="cart__info">
            <h1 className="cart__header">Summary</h1>
            <h2 className="cart__total">Total: ${totalCost}</h2>
            <button
              className="cart__button"
              onClick={() => dispatch(createOrder())}
            >
              Go to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
