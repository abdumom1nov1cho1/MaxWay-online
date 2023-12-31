import React from "react";
import { products } from "../../Data";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

const Hotdog = () => {
  const { t } = useTranslation();
  const { addItem, getItem, removeItem } = useCart();
  const [array, setarray] = useState([]);

  useEffect(() => {
    setarray(products);
  }, []);

  const newArray = array.filter((el) => el.category === "Hot-Dog");

  return (
    <div>
      <header>
        <div className="container">
          <h1 id="Hotdog" className="maks">
            {" "}
            {t("h1-5")}{" "}
          </h1>
          <div className="parentt">
            {newArray.map((el) => {
              return (
                <div className="card" key={el.id}>
                  <img className="img" src={el.img} alt="" />
                  <div className="card__texts">
                    <h1 className="h1">{el.name}</h1>
                    <p className="desc">{el.description}</p>

                    <div className="btns">
                      <p className="p">
                        {el.price} {t("price")}
                      </p>
                      {!getItem(el.id) ? (
                        <button onClick={() => addItem(el)} className="btn">
                          {" "}
                          {t("click")}{" "}
                        </button>
                      ) : (
                        <button
                          className="btn2"
                          onClick={() => removeItem(el.id)}
                        >
                          {" "}
                          {t("clickNone")}{" "}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hotdog;
