import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_icon}>
        <div>
          <a href="./index.html">
            <i className="fa-brands fa-twitter fa-sm" ></i>
          </a>
        </div>
        <div>
          <a href="./index.html">
            <i className="fa-brands fa-facebook" ></i>
          </a>
        </div>
        <div>
          <a href="./index.html">
            <i className="fa-brands fa-github" ></i>
          </a>
        </div>
      </div>
      <div className={styles.site_bottom}>Copyright © Your Website 2023</div>
    </div>
  );
}

export default Footer;
