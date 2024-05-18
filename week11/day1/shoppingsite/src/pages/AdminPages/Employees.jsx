import React, { useEffect, useState } from "react";
import styles from "./Employees.module.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Employees() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/posts");

    const data = await res.json();

    setCategory(data);
  }

  async function deleteProduct(id) {
    const res = await fetch("http://localhost:3000/posts/" + id, {
      method: "delete",
    });
    const data = await res.json();

    getAllProducts();
  }

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Employees</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>

      <h1 className={styles.admin_header}>Admin Employees</h1>
      <div className={styles.admin_container}>
        <table >
          <thead>
            <tr>
              <th>id</th>
              <th>image</th>
              <th>title</th>
              <th>price</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {category.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>
                  <img src={x.image} alt="" className={styles.admin_imgs} />
                </td>
                <td>{x.title}</td>
                <td>{x.price} AZN </td>
                <td className={styles.btns_admin}>
                  <button
                    className={styles.delete_admin}
                    onClick={() => deleteProduct(x.id)}
                  >
                    delete
                  </button>
                  <button className={styles.edit_admin}>
                    {" "}
                    <Link
                      className={styles.admin_edit_context}
                      to={"/admin/update/" + x.id}
                    >
                      edit
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Employees;
