import React from "react";
import "./About.scss";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="about_hero">
        <div className="about_me">
          <h2>About Me</h2>
          <span>This is what I do.</span>
        </div>
      </section>
      <section className="about_lorem">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis
          sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
          consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          praesentium recusandae illo eaque architecto error, repellendus iusto
          reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in
          officia voluptas voluptatibus, minus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
          quae optio aperiam soluta voluptatibus corporis atque iste neque sit
          tempora!
        </p>
      </section>
    </>
  );
}

export default About;
