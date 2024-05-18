import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainProvider";
import styles from "./Basket.module.scss";
import { Helmet } from "react-helmet";

function BasketPage() {
  const { basket, addBasket, decBasketProduct, removeProduct, getTotal } =
    useContext(MainContext);

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Basket Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>

      <div className={styles.header_basket}>
        <h1>Basket Page</h1>
      </div>
      
      <div className={styles.container}>
        {basket.map((x) => (
          <div key={x.id} className={styles.card}>
            <img src={x.image} alt="" className={styles.img_main_employee} />
            <div className={styles.title}>{x.title}</div>
            <div className={styles.price}>Price: {x.price} $</div>
            <div className={styles.price}>count: {x.count}</div>
            <div className={styles.btn_container}>
              <button
                className={styles.btn_basket}
                onClick={() => addBasket(x)}
              >
                +
              </button>
              <button
                className={styles.btn_basket}
                onClick={() => decBasketProduct(x)}
              >
                -
              </button>
              <button
                className={styles.btn_basket}
                onClick={() => removeProduct(x)}
              >
                remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>Total: {getTotal()} $ </div>
    </>
  );
}

export default BasketPage;
