import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "./AddEmployees.module.scss";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";



function AddEmployees() {
  const navigate = useNavigate();

  return (
   <>
   <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add Employee</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
    <Formik
       initialValues={{ image: '', title: '',category:'', price:'' }}
       validationSchema={Yup.object({
         
        image: Yup.string()
           .required('Required'),
           title: Yup.string().required('Required'),
           category: Yup.string().required('Required'),
           price: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {

          async function addProduct() {
            const res = await fetch("http://localhost:3000/posts",{
              method:'post',
              headers:{
                "Content-Type": "application/json",
              },
              body:JSON.stringify(values)
            })
            const data = res.json()
          }
          navigate("/admin/employees")
          addProduct()
           setSubmitting(false);
       }}
     >
       <div className={styles.container}>
       <Form className={styles.add_form}>
        
        <div className={styles.input}>
        <label htmlFor="image">image</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />
        </div>

        <div className={styles.input}>
        <label htmlFor="title">title</label>
        <Field name="title" type="title" />
        <ErrorMessage name="title" />
        </div>

        <div className={styles.input}>
        <label htmlFor="category">category</label>
        <Field name="category" type="category" />
        <ErrorMessage name="category" />
        </div>

       <div className={styles.input}>
       <label htmlFor="price">price</label>
        <Field name="price" type="price" />
        <ErrorMessage name="price" />
       </div>

        <button className={styles.button_add} type="submit">add</button>
      </Form>
       </div>
     </Formik>
   </>
  )
}

export default AddEmployees