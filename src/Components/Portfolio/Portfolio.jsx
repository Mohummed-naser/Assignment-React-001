import React from "react";
import "./Portfolio.css";
import image from "../../assets/imgi_1_poert1.png";
import image2 from "../../assets/imgi_2_port2.png";
import image3 from "../../assets/imgi_3_port3.png";
export default function Portfolio() {
  return (
    <>
      <main className="bg-white">
        <div className="container d-flex justify-content-center align-items-center flex-column text-center min-vh-100 py-5">
          <div className="row">
            <div className="position-relative mt-5">
              <h2 className="text-h-por display-6 fw-bold text-uppercase text-nowrap mt-5">
                portfolio component
              </h2>
            </div>
            <div className="box-por">
              <i className="fa-solid fa-star color-i" />
            </div>
            <div className="row row-cols-1 row-cols-lg-3 g-4 m-auto">
              <div className="col">
                <div className="inner position-relative">
                  <img src={image} alt="img" className="w-100 rounded-2" />
                  <div className="layer  z-2 position-absolute top-0 start-0 end-0 bottom-0  d-flex flex-column justify-content-center align-items-center">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner position-relative">
                  <img src={image2} alt="img" className="w-100 rounded-2" />
                  <div className="layer rounded-2 z-2 position-absolute top-0 start-0 end-0 bottom-0  d-flex flex-column justify-content-center align-items-center">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="inner position-relative">
                  <img src={image3} alt="img" className="w-100 rounded-2" />
                  <div className="layer rounded-2 z-2 position-absolute top-0 start-0 end-0 bottom-0  d-flex flex-column justify-content-center align-items-center">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner position-relative">
                  <img src={image} alt="img" className="w-100 rounded-2" />
                  <div className="layer rounded-2 z-2 position-absolute top-0 start-0 end-0 bottom-0  d-flex flex-column justify-content-center align-items-center">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner position-relative">
                  <img src={image2} alt="img" className="w-100 rounded-2" />
                  <div className="layer rounded-2 z-2 position-absolute top-0 start-0 end-0 bottom-0  d-flex flex-column justify-content-center align-items-center">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner position-relative">
                  <img src={image3} alt="img" className="w-100 rounded-2" />
                  <div className="layer rounded-2 z-2 position-absolute top-0 start-0 end-0 bottom-0  d-flex flex-column justify-content-center align-items-center">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
