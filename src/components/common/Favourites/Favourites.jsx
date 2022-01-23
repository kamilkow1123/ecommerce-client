import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//components
import Navbar from "../../navigation/Navbar";
//action creators
import { fetchProducts, removeProductFromFav } from "../../../state/actions";
//styles
import "./Favourites.scss";

const Favourites = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.listOfProducts);
  const favouritesIds = useSelector(
    ({ favourites }) => favourites.favouriteProductsIds
  );
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (products?.length) {
      let favs = favouritesIds.map((favId) =>
        products.find(({ id }) => String(id) === String(favId))
      );
      setFavourites(favs);
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, favouritesIds, products]);

  const handleRemoveFromFav = (id) => {
    dispatch(removeProductFromFav(String(id)));
  };

  const renderFavs = () => {
    return !favourites.length
      ? "No favourites"
      : favourites?.map(
          ({ id, product_name, retail_price_brutt, image_url }) => (
            <div className="favs__item" key={id}>
              <Link to={`/product/${id}`} replace className="favs__link">
                <div className="favs__img-wrapper">
                  <img src={image_url}></img>
                </div>
                <p className="favs__name">{product_name}</p>
                <p className="favs__price">
                  {Math.round(retail_price_brutt * 100) / 100} zł
                </p>
              </Link>
              <button
                className="favs__button"
                onClick={() => handleRemoveFromFav(id)}
              >
                Remove from fav
              </button>
            </div>
          )
        );
  };

  return (
    <>
      <Navbar />
      <div className="favs">
        <div className="favs__wrapper">{renderFavs()}</div>
      </div>
    </>
  );
};

export default Favourites;
