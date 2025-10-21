import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-footer py-5">
          <div className="container my-5">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 mb-lg-5">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="span-link col-12 col-md-4 col-lg-4 mb-5">
                <h2>AROUND THE WEB</h2>
                <ul className="mt-3">
                  <span className="border rounded-circle p-2 mx-1">
                    <i class="fa-brands fa-facebook"></i>
                  </span>
                  <span className="border rounded-circle p-2 mx-1 ">
                    <i class="fa-brands fa-twitter"></i>
                  </span>
                  <span className="border rounded-circle p-2 mx-1">
                    <i class="fa-brands fa-linkedin"></i>
                  </span>
                  <span className="border rounded-circle p-2 mx-1">
                    <i class="fa-solid fa-user"></i>
                  </span>
                </ul>
              </div>
              <div className="col-12 col-md-4 col-lg-4 ">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-last-footer py-4">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
