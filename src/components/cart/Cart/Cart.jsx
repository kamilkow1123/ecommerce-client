import { useEffect, useState } from "react";
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
//styles
import "./Cart.scss";

const Cart = () => {
  const [discount, setDiscount] = useState("");
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
      const {
        product_name,
        image_url,
        retail_price_brutt,
        id: productId,
      } = product;
      return (
        <div key={id} className="cart__product">
          <p className="cart__product__name">{product_name}</p>
          <div className="cart__product__img">
            <img src={image_url}></img>
          </div>
          <p className="cart__product__price">
            {Math.round(quantity * retail_price_brutt * 100) / 100} zł
          </p>
          <p className="cart__product__price--pcs">
            {Math.round(retail_price_brutt * 100) / 100} zł / pcs
          </p>
          <div className="cart__product__buttons">
            <button
              className="cart__product__button"
              onClick={() => handleDeleteProduct(productId)}
            >
              -
            </button>
            <p className="cart__product__quantity">{quantity}</p>
            <button
              className="cart__product__button"
              onClick={() => handleAddProduct(productId)}
            >
              +
            </button>
          </div>
          <p className="cart__product__info">
            Buy at least 10 products to get a discount
          </p>
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
            <h2 className="cart__total">
              Total: {Math.round(totalCost * 100) / 100} zł
            </h2>
            <div className="cart__discount">
              {/* <label className="cart__label" htmlFor="discount">
                Discount code:
              </label> */}
              <input
                className="cart__input"
                type="text"
                name="discount"
                id="discount"
                placeholder="Discount code"
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
              />
            </div>
            <button
              className="cart__button"
              onClick={() => dispatch(createOrder(discount))}
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
