import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../navigation/Navbar";
import "./Checkout.scss";

const Checkout = () => {
  const {
    createdOrderSuccess,
    createdOrder,
    discountCode,
    orderNumber,
    status,
    totalOrderCost,
  } = useSelector(({ cart }) => cart);

  const { products, get_cart_total } = createdOrder || {};

  const renderProducts = () => {
    return products?.map(({ id, product, quantity }) => {
      const { product_name, image_url, retail_price_brutt } = product;
      return (
        <div key={id} className="checkout__product">
          <p className="checkout__product__name">{product_name}</p>
          <div className="checkout__product__img">
            <img src={image_url}></img>
          </div>
          <p className="checkout__product__price">
            {Math.round(quantity * retail_price_brutt * 100) / 100} zł
          </p>
          <p className="checkout__product__price--pcs">
            {Math.round(retail_price_brutt * 100) / 100} zł / pcs
          </p>
        </div>
      );
    });
  };
  return (
    <>
      <Navbar />
      <div className="checkout">
        <div className="checkout__wrapper">
          {!createdOrderSuccess ? (
            <div className="checkout__info">
              Error occured when creating order
            </div>
          ) : (
            <div className="checkout__info">
              Order was created successfully!
              <p className="checkout__order">Order number: {orderNumber}</p>
              <p className="checkout__status">Order status: {status}</p>
              <div className="checkout__products">{renderProducts()}</div>
              <p className="checkout__details">
                Total cost:{" "}
                <span>{Math.round(get_cart_total * 100) / 100} zł</span>{" "}
                {Math.round(totalOrderCost * 100) / 100} zł
              </p>
              <p className="checkout__discount">
                {discountCode
                  ? `Discount code for next order: ${discountCode}`
                  : ""}
              </p>
            </div>
          )}
          <Link className="checkout__button" to="/">
            Browse more products!
          </Link>
        </div>
      </div>
    </>
  );
};
export default Checkout;
