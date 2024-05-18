import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import styles from "./AddEmployees.module.scss";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function UpdatePage() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    getById();
  }, []);

  async function getById() {
    const res = await fetch("http://localhost:3000/posts/" + id);
    const data = await res.json();

    setProducts(data);
  }

  console.log(products);

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Update Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
      {products && (
        <>
          <Formik
            initialValues={{
              image: products.image,
              title: products.title,
              category: products.category,
              price: products.price,
            }}
            validationSchema={Yup.object({
              image: Yup.string().required("Required"),
              title: Yup.string().required("Required"),
              category: Yup.string().required("Required"),
              price: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              async function addProduct() {
                const res = await fetch("http://localhost:3000/posts/" + id, {
                  method: "put",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });
                const data = res.json();
              }
              addProduct();
              setSubmitting(false);
              navigate("/admin/employees");
            }}
          >
            <div className={styles.container}>
              <Form className={styles.add_form}>
                <div className={styles.input}>
                  <label htmlFor="image">Image</label>
                  <Field name="image" type="text" />
                  <ErrorMessage name="image" />
                </div>

                <div className={styles.input}>
                  <label htmlFor="title">Title</label>
                  <Field name="title" type="title" />
                  <ErrorMessage name="title" />
                </div>

                <div className={styles.input}>
                  <label htmlFor="category">Category</label>
                  <Field name="category" type="category" />
                  <ErrorMessage name="category" />
                </div>

                <div className={styles.input}>
                  <label htmlFor="price">Price</label>
                  <Field name="price" type="price" />
                  <ErrorMessage name="price" />
                </div>

                <button className={styles.button_add} type="submit">
                  add
                </button>
              </Form>
            </div>
          </Formik>
        </>
      )}
    </>
  );
}

export default UpdatePage;
