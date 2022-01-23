import { useSelector } from "react-redux";
import Navbar from "../../navigation/Navbar";

const Checkout = () => {
  const {
    createdOrderSuccess,
    createdOrder,
    discountCode,
    totalOrderCost,
  } = useSelector(({ cart }) => cart);
  return !createdOrderSuccess ? (
    <div>
      <Navbar />
      Error occured when creating order
    </div>
  ) : (
    <div>
      <Navbar />
      Order was created successfully! Total cost: {totalOrderCost}
      {discountCode ? `Discount code for next order: ${discountCode}` : ""}
    </div>
  );
};

export default Checkout;
