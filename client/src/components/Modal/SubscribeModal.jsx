import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';
import CityBG from '../../assets/images/CityBG.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function SubscribeModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      email_address: email,
      message: message
    };

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_USER_ID"
    )
    .then((response) => {
      console.log("Email sent successfully!", response);
      alert("Thank you for subscribing!");
    })
    .catch((error) => {
      console.error("Email failed to send!", error);
      alert("Oops! Something went wrong. Please try again.");
    });

    // Reset form
    setEmail("");
    setMessage("");
    handleClose();
  };

  return (
    <div>
      <Button variant="info" size='md' onClick={handleShow}>
        Subscribe
      </Button>
      <Modal show={show} onHide={handleClose}>
        <div className="image-container">
          <img src={CityBG} alt="city" className='w-100 rounded-top shadow' />
          <Button variant="close" onClick={handleClose} className="close-button">
            &times;
          </Button>
          <h1 className="modal-title">Subscribe to receive new & relevant information!</h1>
        </div>
        <Modal.Body className=''>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <style>{`
        .image-container {
          position: relative;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 1.5rem;
          color: white;
        background: rgba(0, 0, 0, 0.5); 
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
         padding-top: 0.1rem;
          cursor: pointer;
        }
             .modal-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
         padding: 10px;
          color: white;
          font-size: 2rem;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default SubscribeModal;
