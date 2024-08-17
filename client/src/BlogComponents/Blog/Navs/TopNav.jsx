import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaQuestionCircle } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { TbScreenShare } from "react-icons/tb";
import SubscribeModal from '../Modal/SubscribeModal';

const TopNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm fixed-top" expanded={expanded}>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className='w3-margin-right'>
          <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link w3-text-pink fw-bold" 
            onClick={handleNavLinkClick}>Con
           <b style={{fontFamily:"Dancing Script"}}>Scribe</b></Link>

          <Link to="/about" className="nav-link" style={{ color: "black" }}  onClick={handleNavLinkClick}>About</Link>
           <Link to="/resources" className="nav-link" style={{ color: "black" }}  onClick={handleNavLinkClick}>Resources</Link>
           <Link to="/services" className="nav-link" style={{ color: "black" }}  onClick={handleNavLinkClick}>Pricing</Link>
           <Link to="/web" className="nav-link" style={{ color: "black" }}  onClick={handleNavLinkClick}>Web Page</Link>
            
            <NavDropdown
              title="Services/LandingPages"
              id="basic-nav-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={isHovered}
            >
              <div style={{ borderRadius: '5px' }} className="shadow">
                  <NavDropdown.Item 
                as={Link} to="/website" className="text-black">Websites
                </NavDropdown.Item>
                <NavDropdown.Item 
                as={Link} to="/graphics" className="text-black">Graphics
                </NavDropdown.Item>
                <NavDropdown.Item 
                as={Link} to="/social" className="text-black">Content Management
                </NavDropdown.Item>
        </div>
            </NavDropdown>
          </Nav>

          <Nav>
            
          </Nav>
          <Nav className='ml-auto'>
          <Link to="/demo" className="nav-link" onClick={handleNavLinkClick} style={{fontSize:'14px'}}>DEMO SITE<TbScreenShare className='mx-2' 
          style={{fontSize:'16px'}}/></Link>
  <SubscribeModal />
            <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}><AiTwotoneMail /></Link>
            <Link to="/help" className="nav-link" onClick={handleNavLinkClick}><FaQuestionCircle/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
