import React from "react";
import { useCart } from "react-use-cart";
import "../KorzinkaText/KorzinkaText.scss";

import axios from "axios";
//const axios = require('axios'); // legacy way
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";

const KorzinkaText = () => {
  let total = 0;

  const { t } = useTranslation();
  const { items, isEmpty, updateItemQuantity, removeItem } = useCart();

  const postTest = () => {
    axios.post(
      `https://api.telegram.org/bot6696748958:AAFi7q8vfXfDHwlecOYbIxPzRVAnEFV3a-o/sendMessage?chat_id=-910115669&text=${encodeURIComponent(
        `<b>Details:</b>

    <b>The operation was completed successfully!</b>
    <b>our couriers will contact you soon!</b>
    <b> Call Center: +998 99 855 73 85 </b>
    
${items
  .map((item) => {
    return `
<b>${item.name}</b>
${item.count} x ${item.price} som = ${item.count} 
    `;
  })
  .join("")}        
<b>Total:</b> ${total} som`
      )}&parse_mode=html`
    );
    // window.location.reload();
  };

  return (
    <div>
      {isEmpty ? <h1 className="ddd"> {t("ddd")} </h1> : null}

      <div className="parenttt">
        {items.map((item) => {
          const prCount = item.count * item.price;
          total += prCount;

          if (item.count >= 1) {
            return (
              <div className="container">
                <div className="cardd">
                  <div className="left">
                    <img className="img" src={item.img} alt="" />
                  </div>
                  <div className="right">
                    <div className="text">
                      <h1 className="h1">{item.name}</h1>
                      <p className="desc">{item.description}</p>
                      <div className="zzz">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.count++)
                          }
                          className="btn3"
                        >
                          +
                        </button>
                        <p className="p">{prCount} so'm</p>
                        <button
                          className="btn4"
                          onClick={() =>
                            updateItemQuantity(item.id, item.count--)
                          }
                        >
                          -
                        </button>
                        <img
                          onClick={() => removeItem(item.id)}
                          className="jjj"
                          src="https://cdn-icons-png.flaticon.com/512/860/860778.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            removeItem(item.id);
          }
        })}
      </div>
      <aside>
        <div className="btnd">
          <img
            className="h11"
            src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
            alt=""
          />
          <div className="oplata">
            <h1 className="hh1"> {t("hh1")} - </h1>
            <h1 className="obshi">{total} som</h1>
          </div>
          <div className="oplata">
            <h1 className="hh1"> {t("hh2")} - </h1>
            <h1 className="obshi"> 0 som</h1>
          </div>
          <button
            className="zakaz"
            onClick={() => {
              postTest();
              localStorage.clear();
              // window.location.reload();
            }}
          >
            {" "}
            {t("zakaz_btn")}{" "}
          </button>
        </div>
      </aside>
      <Footer />
    </div>
  );
};

export default KorzinkaText;
