import React, { useState, useEffect } from "react";
//hooks
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
//components
import Navbar from "../../navigation/Navbar";
//action creators
import { fetchProduct, addToCart } from "../../../state/actions";
import { addProductToFav, removeProductFromFav } from "../../../state/actions";
//styles
import "./Product.scss";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(({ products }) => products.currentProduct);
  const favourites = useSelector(
    ({ favourites }) => favourites.favouriteProductsIds
  );
  const isFavourite = favourites?.includes(id);
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleAddToCart = (id) => {
    if (isAuthenticated) {
      dispatch(addToCart(id));
    } else {
      navigate("/login");
    }
  };

  const handleFavToggle = (id) => {
    isFavourite
      ? dispatch(removeProductFromFav(id))
      : dispatch(addProductToFav(id));
  };

  const {
    product_name,
    detail_description,
    retail_price_brutt,
    image_url,
    shipping_cost,
  } = product || {};

  return !product ? (
    "Error! Product doesn't exist"
  ) : String(id) !== String(product?.id) ? (
    "Loading"
  ) : (
    <>
      <Navbar />
      <div className="product">
        <p className="product__name">{product_name}</p>
        <p className="product__price">
          {Math.round(retail_price_brutt * 100) / 100} zł
        </p>
        <button
          className="product__cart-button"
          onClick={() => handleAddToCart(id)}
        >
          Add to Cart
        </button>
        <div className="product__img">
          <img src={image_url}></img>
        </div>
        <div className="product__wrapper">
          <button
            className="product__fav-button"
            onClick={() => handleFavToggle(id)}
          >
            {isFavourite ? "Remove from favourites" : "Add to favourites"}
          </button>
          <p className="product__description">{detail_description}</p>

          <p className="product__cost">Shipping cost: {shipping_cost} zł</p>
        </div>
      </div>
    </>
  );
};

export default Product;
