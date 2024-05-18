import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="hero">
        <div className="clean_blog">
          <h2>Clean Blog</h2>
          <span>A Blog Theme by Start Bootstrap</span>
        </div>
      </section>

      <section>
        <div className="tags">
          <div className="tagOne">
            <Link to={"contact"}>
              {" "}
              <h2 className="tag_man">
                Man must explore, and this is exploration at its greatest
              </h2>{" "}
            </Link>

            <Link to={"about"}>
              {" "}
              <h3 className="tag_prob">
                Problems look mighty small from 150 miles up
              </h3>
            </Link>

            <p className="tag_post">
              Posted by{" "}
              <Link to={"/"} className="tag_boot">
                {" "}
                Start Bootstrap
              </Link>{" "}
              on September 24, 2023
            </p>
          </div>
          <div className="tagOne">
            <Link>
              {" "}
              <h2 className="tag_man" style={{ fontSize: "39px" }}>
                I believe every human has a finite number of heartbeats. I don't
                intend to waste any of mine.
              </h2>
            </Link>
            <p className="tag_post">
              Posted by{" "}
              <Link to={"/"} className="tag_boot">
                Start Bootstrap{" "}
              </Link>
              on September 18, 2023{" "}
            </p>
            <p className="underline"></p>
          </div>
          <div className="tagOne">
            <Link to={"contact"}>
              {" "}
              <h2 className="tag_man">Science has not yet mastered prophecy</h2>
            </Link>

            <Link to={"about"}>
              <h3 className="tag_prob">
                We predict too much for the next year and yet far too little for
                the next ten.
              </h3>
            </Link>

            <p className="tag_post">
              Posted by{" "}
              <Link to={"/"} className="tag_boot">
                {" "}
                Start Bootstrap
              </Link>
              on August 24, 2023
            </p>
            <p className="underline"></p>
          </div>

          <div className="tagOne">
            <Link to={"contact"}>
              <h2 className="tag_man">Failure is not an option</h2>
            </Link>

            <Link to={"about"}>
              <h3 className="tag_prob">
                Many say exploration is part of our destiny, but it’s actually
                our duty to future generations.
              </h3>
            </Link>

            <p className="tag_post">
              Posted by{" "}
              <Link to={"/"} className="tag_boot">
                {" "}
                Start Bootstrap{" "}
              </Link>
              on July 8, 2023
            </p>
            <p className="underline"></p>
          </div>
          <div className="tag-btn">
            <button type="button">Older Posts →</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
