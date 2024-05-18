import React from "react";
import styles from "./About.module.scss";
import { Helmet } from "react-helmet";


function About() {
  return (
    <>
     <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
    <div className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Haqqımızda</h2>
        <p className={styles.description}>
          Emlak.az, Azerbaycanda 20 ildən çox bir zamandır gayrimenkul sektorunda
          fəaliyyət göstərən lider bir şirkətdir. Bizim məqsədimiz, müştərilərimizə
          ən yaxşı gayrimenkul xidmətini təqdim etmək və onların ehtiyaclarını
          qarşılamak üçün çalışmaqdır. Emlak.az olaraq, doğruluk, keyfiyyət və
          müştəri məmnuniyyəti prinsiplərini benimsemiş və bu istiqamətdə
          hərəkət edirik.
        </p>
        <p className={styles.description}>
          Şirkətimiz, geniş bir portfolyo və təcrübəli bir ekip ilə, müştərilərimizə
          satılır və icarəyə verilən gayrimenkul seçimləri təqdim edir. Bundan əlavə,
          gayrimenkul məsləhətçiliyi və investisiya xidmətləri sahəsində də
          mütəxəssis bir ekibimiz var. Emlak.az olaraq, müştərilərimizin ehtiyaclarını
          anlamaq və onlara ən uyğun həlləri təqdim etmək üçün çalışırıq.
        </p>
        <p className={styles.description}>
          Siz də Emlak.az ailəsinə qoşularaq, keyfiyyətli və etibarlı gayrimenkul
          xidməti ala bilərsiniz. Bizi əlaqə saxlayın və düşündüyünüz evi tapmağınıza
          və ya investisiya etməyinizə kömək edək.
        </p>
      </div>
    </div>
    </>
    
  );
}

export default About;
