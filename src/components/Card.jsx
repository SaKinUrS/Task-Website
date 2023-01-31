import axios from "axios";
import React, { useState } from "react";
import {
  addToStorage,
  checkStorage,
  findIteminStorage,
  removeFromStorage,
} from "../storage/useLocalStorage";
import Loader from "./UI/Loader";

const Card = ({ title, img, status, oldPrice, currPrice, item, id }) => {
  const [isBought, setIsBought] = useState(findIteminStorage(id));
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      await axios
        .get("https://reqres.in/api/products/3")
        .then((resp) => setData(resp.data.data));
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };
  const onClickBtn = async (id) => {
    // Добавляем лоадер при принятии гет запросов
    await fetchData();
    // Изменяем состояние кнопки
    setIsBought(!isBought);

    // Закидываем в Storage
    let storage = checkStorage();
    let checkLocal = storage.find((el) => el.id === id);
    if (!checkLocal) {
      addToStorage([...storage, item]);
    } else {
      removeFromStorage(storage.filter((item) => item.id !== id));
    }
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

              <button
                onClick={() => onClickBtn(id)}
                className={` btn ${isBought ? "bought" : ""}`}
              >
                {isBought && (
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5315 1.80937L5.63341 11.237L1.34814 7.19237"
                      stroke="#F4F6F9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {isLoading ? <Loader /> : isBought ? "В корзину" : "Купить"}
              </button>
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default Card;
