import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <main className="bg-white py-5">
        <div className="position-relative mt-5">
          <h2 className="text-h-por display-6 fw-bold text-uppercase text-nowrap mt-5">
            conatct section
          </h2>
        </div>
        <div className="box-por position-relative">
          <i className="fa-solid fa-star color-i" />
        </div>

        <div className="container form-size py-5">
          <div className="mb-3 d-flex justify-content-center ">
            <input
              type="text"
              className="form-control my-2 py-3 border-0 border-bottom"
              id="exampleFormControlInput1"
              placeholder="UserName"
            />
          </div>
          <div className="mb-3 d-flex justify-content-center ">
            <input
              type="text"
              className="form-control my-2 py-3 border-0 border-bottom"
              id="exampleFormControlInput1"
              placeholder="UserAge "
            />
          </div>
          <div className="mb-3 d-flex justify-content-center ">
            <input
              type="email"
              className="form-control my-2 py-3 border-0 border-bottom"
              id="exampleFormControlInput1"
              placeholder="UserEmail"
            />
          </div>
          <div className="mb-3 d-flex justify-content-center ">
            <input
              type="password"
              className="form-control my-2 py-3 border-0 border-bottom"
              id="exampleFormControlInput1"
              placeholder="UserPassword"
            />
          </div>
          <button type="button" class="btn d-flex">
            Send Message
          </button>
        </div>
      </main>
    </>
  );
}
