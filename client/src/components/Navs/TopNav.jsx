import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//import { FaQuestionCircle } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
//import { TbScreenShare } from "react-icons/tb";


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
 <div className='container-fluid'>
    <Navbar expand="lg" variant='dark' className="w3-black shadow-sm fixed-top" expanded={expanded}>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className='w3-margin-right'>
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link w3-text-white fw-bold" 
            style={{ color:'red'}}
            onClick={handleNavLinkClick}>Slide
           <b style={{ color:'red'}}>Show</b></Link>

          <Link to="/about" className="nav-link" style={{ color: "white" }}  onClick={handleNavLinkClick}>About</Link>
           <Link to="/resources" className="nav-link" style={{ color: "white" }}  onClick={handleNavLinkClick}>Resources</Link>
           <Link to="/services" className="nav-link" style={{ color: "white" }}  onClick={handleNavLinkClick}>Pricing</Link>
           <Link to="/web" className="nav-link" style={{ color: "white" }}  onClick={handleNavLinkClick}>Web Page</Link>
            
            <NavDropdown
              title="Services/LandingPages"

              id="basic-nav-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={isHovered}
            >
              <div style={{ borderRadius: '5px' }}>
                  <NavDropdown.Item 
                as={Link} to="/website">Websites
                </NavDropdown.Item>
                <NavDropdown.Item 
                as={Link} to="/graphics">Graphics
                </NavDropdown.Item>
                <NavDropdown.Item 
                as={Link} to="/social">Content Management
                </NavDropdown.Item>
        </div>
            </NavDropdown>
          </Nav>

          <Nav>
            
          </Nav>
          <Nav className='ml-auto'>
        
            <Link to="/contact" className="nav-link text-white" onClick={handleNavLinkClick}> <AiTwotoneMail /></Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default TopNavbar;
