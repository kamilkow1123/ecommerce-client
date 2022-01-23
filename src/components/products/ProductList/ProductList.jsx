import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//action creators
import { fetchProducts } from "../../../state/actions";
//styles
import "./ProductList.scss";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.listOfProducts);

  useEffect(() => {
    if (!products?.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  const renderProducts = () => {
    return products.map(
      ({
        id,
        product_name,
        retail_price_brutt,
        stock_availability,
        image_url,
      }) => (
        <Link to={`product/${id}`} key={id} className="product-list__link">
          <div className="product-list__img-wrapper">
            <img src={image_url}></img>
          </div>
          <p className="product-list__name">{product_name}</p>
          <p className="product-list__price">
            {Math.round(retail_price_brutt * 100) / 100} zł
          </p>
          <p className="product-list__avail">{stock_availability} pcs</p>
        </Link>
      )
    );
  };

  return (
    <div className="product-list">
      <div className="product-list__wrapper">{renderProducts()}</div>
    </div>
  );
};

export default ProductList;
