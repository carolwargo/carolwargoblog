import React from "react";
import HomeBG from "../../assets/images/HomeBig.png";
import SubscribeModal from "../Modal/SubscribeModal";
import { Link as ScrollLink } from "react-scroll";

const BlogHeaderNav = () => {
  return (
    <div
      className="shadow"
      style={{
        backgroundImage: `url(${HomeBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "90vh",
        zIndex: "-1",
      }}
    >
      <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg shadow-2">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <ul>
         
            </ul>

            {/* Collapsible wrapper */}
            <SubscribeModal />
          </div>
          {/* Container wrapper */}
        </nav>
        <div className="container">
          <div className="mx-auto text-center w3-padding-32">
            <div className="w3-container w3-content">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-1 col-lg-1 justify-content-center align-items-center"></div>
                <div className="col-sm-12 col-md-11 col-lg-11 justify-content-center align-items-center">
                
                  <h1 className="display-4 w3-tag w3-aqua px-4 fw-normal text-white text-body-emphasis">
                    <span
                      style={{
                        fontSize: "4.5rem",
                        textShadow:
                          "0 0 10px black, 0 0 20px black, 0 0 30px black",
                      }}
                    >
                      TWO
                    </span>
                    <span
                      style={{
                        fontSize: "4.5rem",
                        fontFamily: "Dancing Script",
                        textShadow:
                          "0 0 10px black, 0 0 20px black, 0 0 30px black",
                      }}
                    >
                      Faced
                    </span>
                  </h1>
                  <h2 className="text-white ">
                    <i
                      className="fw-light"
                      style={{
                        color: "#FDC5E8",
                        fontSize: "3.5rem",
                        textShadow:
                          "0 0 5px black, 0 0 10px black, 0 0 20px #d71377, 0 0 30px #d71377, 0 0 40px #FF69B4, 0 0 70px #FF69B4, 0 0 80px #FF69B4, 0 0 100px #FF69B4",
                      }}
                    >
                      {" "}
                      Design & Development{" "}
                    </i>
                  </h2>
                  <h4
                    className="text-body-secondary text-white fw-light fw-regular"
                    style={{ textShadow: "0 0 2px black, 0 0 4px black" }}
                  >
              Technology's dual nature is a fascinating blend of  <br />
               <span className="text-decoration w3-text-aqua"> <i><b>INNOVATION & EVOLUTION</b></i> </span>
                  of <span className="text-decoration w3-text-aqua"> <i><b>DESIGN & DEVELOPMENT</b></i></span> presents <span className="text-decoration w3-text-aqua"><i><b>TWO DISTINCT</b></i></span> yet
                  interconnected aspects that shape our digital world. 
                  Posts highlight the topics and trends that captivate my curiosity.
                  </h4>
                  <div className="p-2">
                    <ScrollLink
                      to="email-graphics"
                      smooth={true}
                      duration={500}
                    >
                      <button
                        type="button"
                        className="btn btn-light m-2 w3-round-xlarge"
                      >
                        <b
                          style={{ textShadow: "2px 2px 4px #F63DB0" }}
                          className="fw-bold"
                        >
                          Get Started
                        </b>
                      </button>
                    </ScrollLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default BlogHeaderNav;
