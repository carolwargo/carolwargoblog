import React from "react";
import PolySlide from '../../../assets/images/PolySlide.png'; 

const BlogHeader = () => {
  return (
    <header>
      <div
        id="blog-header"
        className="bg-image position-relative"
        style={{
          backgroundImage: `url(${PolySlide})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh", // Adjusted height to control image size
          marginTop: '40px',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>

        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
          <div className="row px-3 text-center">
            <div className="col-12 text-white p-3 position-relative z-index-1">
              <h1  
                className="mt-2 mb-0 fw-bold"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  lineHeight: "1.5",
                  fontSize: '4rem', // Responsive font size
                }}>Welcome to</h1>
              <h1>
                <span
                  className="fw-bold mt-0 pt-0"
                  style={{
                    textShadow: "2px 2px 4px red",
                    color: "white",
                    fontSize: "6rem", // Responsive font size
                  }}
                >
                  <b> SLIDE</b>
                </span>

                <span
                  style={{
                    color: "red",
                    fontSize: "6rem", // Responsive font size
                    textShadow: "2px 2px 4px white",
                    fontWeight: "bold",
                  }}
                >
                  <b>SHOW</b>
                </span>
              </h1>
              <div className="text-center">
                <h3 className="">
                  <i style={{ fontSize: '3rem' }}>VISUALS MADE SIMPLE</i>
                </h3>

                <h4 className="fw-light" style={{ fontSize: '1.5rem' }}>
                  Crafting visually captivating content serves as a powerful
                  tool to draw users in, convey concepts, and encourage
                  engagement.
                </h4>

                <div className="container p-2">
                  <button
                    type="button"
                    className="btn btn-light mx-2 w3-round-xlarge"
                    style={{ width: "auto" }}
                  >
                    <b
                      style={{
                        textShadow: "2px 2px 4px #F63DB0",
                        fontSize: '1.5rem', // Responsive font size
                      }}
                    >
                      View Graphics
                    </b>
                  </button>
                </div>
                <br />
                <p
                  className="text-muted"
                  style={{ fontSize: "1rem" }} // Responsive font size
                >
                  <i>
                    'The Graphic Elements page is currently under development and
                    will be completed shortly. Thank you in advance for your
                    patience.'
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
