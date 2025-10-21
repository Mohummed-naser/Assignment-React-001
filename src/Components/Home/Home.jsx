import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";
import image from "../../assets/imgi_1_avataaars.png";

export default function Home() {
  return (
    <>
      <main className="container d-flex justify-content-center align-items-center flex-column text-center min-vh-100">
        <div className="inner w-75 mt-5">
          <img
            src={image}
            alt="image"
            className="img-fluid"
            style={{ width: "250px", height: "auto" }}
          />
        </div>
        <div className="header-text position-relative">
          <h2 className="display-6 fw-bold text-uppercase text-nowrap mt-5">
            start Framework
          </h2>
        </div>
        <div className="box">
          <i className="fa-solid fa-star" />
          <p className="mt-4">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </main>
    </>
  );
}
