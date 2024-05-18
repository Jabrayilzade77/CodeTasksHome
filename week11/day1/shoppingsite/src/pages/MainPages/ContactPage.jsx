import React from 'react';
import styles from './ContactPage.module.scss';
import {Helmet} from "react-helmet";


function ContactPage() {
    return (
      <>
        <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
        <div className={styles.contact}>
            <h1>Bizimle Elaqe</h1>
            <form>
                <label htmlFor="name">Adiniz:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email Adresiniz:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Gonder</button>
            </form>
        </div>
      </>
    );
}

export default ContactPage;
