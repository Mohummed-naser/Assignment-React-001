import React from "react";
import "../About/About.css";

export default function Home() {
  return (
    <>
      <main className="container d-flex flex-column justify-content-center align-items-center  min-vh-100 pt-5">
        <div className="box position-relative mt-5">
          <h2 className="display-6 fw-bold text-uppercase">about component</h2>
        </div>
        <div className="box-about">
          <i className="fa-solid fa-star" />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 mt-lg-3 mx-lg-5">
          <div className="col">
            <p className="text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col">
            <p className="text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
