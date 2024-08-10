import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you include Bootstrap CSS

import '../components/dashboard/dashboard.css';
import '../components/dashboard/dashboard.rtl.css';

const DashboardPage = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Offcanvas button */}
      <Button variant="primary" onClick={handleShow}>
        Open Dashboard
      </Button>

      {/* Offcanvas component */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Add your dashboard content here */}
          <p>Welcome to the Dashboard, {name}!</p>
          {/* You can also add links or additional components here */}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default DashboardPage;
