import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const BlogNav = () => {

    return (
        <div>
     {/*Main Navigation*/}
<header>

  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow-2">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button className="navbar-toggler" type="button" data-mdb-collapse-init
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>

      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Logo */}
          <a className="navbar-brand me-2 d-none d-lg-inline-block" href="/"><i
              className="fas fa-globe-europe text-primary"></i></a>

          <li className="nav-item fw-bold">
            <a className="nav-link" href="#!">Start here</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">Articles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">eBooks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">Newsletter</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">Contact</a>
          </li>
        </ul>


      </div>
      {/* Collapsible wrapper */}

      <ul className="navbar-nav flex-row">
        {/* Icons */}
        <li className="nav-item">
          <a className="nav-link pe-2" href="#!">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-2" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-2" href="#!">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link ps-2" href="#!">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>

    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}

</header>
{/*Main Navigation*/}

</div>

    );

}

export default BlogNav; 

/*
        <header>
          
          <div className="w3-white w3-padding-8 w3-padding-large d-flex flex-column justify-content-center align-items-center flex-md-row align-items-center border-bottom">
            <a
              href="/"
              className="d-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <span className="fs-4">
                <GiDropletSplash style={{color:'pink'}}/> <span style={{fontSize:'15px'}}>cloudStream</span>
              </span>
            </a>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto justify-content-center"
            style={{fontSize:'15px'}}>
              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="/"
              >
                Features
              </a>
              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="/"
              >
                Enterprise
              </a>
              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="/"
              >
                Support
              </a>
              <a
                className="py-2 link-body-emphasis text-decoration-none"
                href="/"
              >
                Pricing
              </a>
            </nav>
          </div>
          <br />
          <div className="container">
            <div className="pricing-header mb-4 pb-md-4 mx-auto text-center">
              <h1 className="display-4 fw-normal text-body-emphasis">
                Plans & Pricing
              </h1>
              <p className="fs-5 text-body-secondary">
                Whether you're an individual developer, a growing startup, or a
                large corporation, our flexible pricing plans ensure you get the
                best value and performance. Explore our Free, Pro, and
                Enterprise plans below to find the perfect fit for your
                organization and take your operations to new heights with
                CloudStream Solutions.
              </p>
            </div>
          </div>
        </header>
    */