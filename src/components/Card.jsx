import axios from "axios";
import React, { useState } from "react";
import Button from "./UI/Button";
import Loader from "./UI/Loader";
const Card = ({ title, img, status, oldPrice, currPrice }) => {
  const [isBought, setIsBought] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      await axios
        .get("https://reqres.in/api/products/3")
        .then((resp) => setData(resp.data));
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickBtn = async () => {
    await fetchData();
    setIsBought(!isBought);
  };
  return (
    <a
      href="#!"
      className="store__item item-store"
      style={status === "sold" ? { opacity: ".5" } : null}
    >
      <div className="item-store__img">
        <img src={img} alt={title} />
      </div>
      <div className="item-store__content">
        <h2 className="item-store__title">{title}</h2>
        <div className="item-store__info">
          {status === "sold" ? (
            <h3 className="item-store__sold">Продана на аукционе</h3>
          ) : (
            <>
              <div className="item-store__price price">
                <h6 className="price__old">{oldPrice}</h6>
                <h3 className="price__current">{currPrice}</h3>
              </div>

              <Button
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                isBought={isBought}
                onClickBtn={onClickBtn}
                children={
                  isLoading ? <Loader /> : isBought ? "В корзине" : "Купить"
                }
              />
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default Card;
