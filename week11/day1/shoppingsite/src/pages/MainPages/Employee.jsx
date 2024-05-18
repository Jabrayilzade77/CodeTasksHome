import React, { useContext, useState } from "react";
import styles from "./Employee.module.scss";
import { useEffect } from "react";
import { MainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";


function Employee() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const { addBasket } = useContext(MainContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();
    setProducts(data);
  }

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Employee </title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>

      <div className={styles.inputs_main}>
        <h1 className={styles.header_main}>Evler</h1>
        <input
          className={styles.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="axtaris"
        />
        <button className={styles.search_btn}>add</button>
      </div>

      <div className={styles.container}>
        {products
          .filter(
            (x) =>
              x.title.toLowerCase().includes(search.toLowerCase()) ||
              (x.category &&
                x.category.toLowerCase().includes(search.toLowerCase()))
          )
          .map((x) => (
            <div key={x.id} className={styles.card}>
              <img src={x.image} alt="" className={styles.img_main_employee} />
              <div className={styles.title}>{x.title}</div>
              <div className={styles.price}>{x.category}</div>
              <div className={styles.price}>Price: {x.price} AZN</div>
              <div className={styles.btns}>
                <button
                  className={styles.btn_basket}
                  onClick={() => addBasket(x)}
                >
                  add basket
                </button>
              
                  <Link to={"/detail/" + x.id} className={styles.detail_btn}>Go detail</Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Employee;
