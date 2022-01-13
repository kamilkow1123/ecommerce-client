import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//action creators
import { fetchProduct } from "../../../state/actions";
import Navbar from "../../navigation/Navbar";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(({ products }) => products.currentProduct);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  console.log("product", product);
  const {
    product_name,
    detail_description,
    retail_price_brutt,
    stock_status,
    image_url,
  } = product || {};
  return !product ? null : (
    <div>
      <Navbar />
      <div style={{ maxWidth: "400px", maxHeight: "400px" }}>
        <img
          style={{
            objectFit: "cover",
            height: "400px",
          }}
          src={image_url}
        ></img>
      </div>
      <p>{product_name}</p>
      <p>{detail_description}</p>
      <p>{retail_price_brutt}</p>
      <p>{stock_status}</p>
    </div>
  );
};

export default Product;
