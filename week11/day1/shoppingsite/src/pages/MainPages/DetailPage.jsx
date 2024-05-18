import React, { useEffect, useState } from "react";
import styles from "./Detail.module.scss";
import { useParams } from "react-router-dom";
import {Helmet} from "react-helmet";


function DetailPage() {
  const [posts, setPosts] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/posts/" + id)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Detail Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>

      <div className={styles.detail_container}>
        <div className={styles.container}>
          <img src={posts.image} alt="" className={styles.imgs_detail} />
          <div className={styles.title}>{posts.title}</div>
          <div className={styles.price}>{posts.category}</div>
          <div className="description">{posts.description}</div>
          <div className={styles.price}>Price: {posts.price} AZN</div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
