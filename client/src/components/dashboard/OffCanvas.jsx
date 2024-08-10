import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function ResponsiveExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        variant="none"
        className="nav-link px-3 text-white d-lg-none"
        type="button"
        onClick={handleShow}
      >
        <svg className="bi">
          <use xlinkHref="#list" />
        </svg>
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar bg-body-tertiary">
            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                <span>Analytics reports</span>
                <a className="link-secondary" href="/" aria-label="Add a new report">
                  <svg className="bi"><use xlinkHref="#plus-circle"/></svg>
                </a>
              </h6>
              <ul className="nav flex-column mb-auto">
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center gap-2" href="/">
                    <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                    Monthly
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center gap-2" href="/">
                    <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                    Quarterly
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center gap-2" href="/">
                    <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center gap-2" href="/">
                    <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ResponsiveExample;
