import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//action creators
import { fetchProducts } from "../../../state/actions";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.listOfProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderProducts = () => {
    console.log(products);
    return products.map(
      ({
        id,
        product_name,
        retail_price_brutt,
        stock_availability,
        image_url,
      }) => (
        <Link
          to={`product/${id}`}
          key={id}
          style={{ border: "2px solid blue" }}
        >
          <div style={{ maxWidth: "200px", maxHeight: "200px" }}>
            <img
              style={{
                objectFit: "cover",
                height: "200px",
              }}
              src={image_url}
            ></img>
          </div>
          <p>{product_name}</p>
          <p>{retail_price_brutt}</p>
          <p>{stock_availability}</p>
        </Link>
      )
    );
  };

  return <div>{renderProducts()}</div>;
};

export default ProductList;
