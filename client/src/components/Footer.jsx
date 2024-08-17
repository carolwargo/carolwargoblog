import React from 'react';
import { motion } from 'framer-motion';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
    <div className='footer' id='footer' style={{fontFamily:'Raleway'}}>
    <MDBFooter className=' w3-black' >
    

   
    <section className='text-center w3-padding-24'>
      <MDBContainer className='mt-5 text-center text-md-start'>
        <MDBRow className='mt-3'>
          <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-5  w3-padding-large'>
            <h6 className='mb-4'
            style={{fontSize:"2rem"}}>TWO
            <span style={{fontFamily:"Dancing Script"}}>Faced</span>
              
            </h6>
            <p className='fw-light' style={{fontSize:'14px'}}>
            Thanks visiting. I hope you found what you were looking for and enjoyed your time here. Feel free to reach out if you have any questions or feedback!
            </p>
        
          </MDBCol>
          
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 w3-padding-large'>
          
        <h6 className='w3-margin-bottom fw-bold'>PAGES</h6>
          
              <Link to='/' className='text-reset fw-light' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
              Home
              </p>
              </Link>
          
           
              <Link to='/about' className='text-reset fw-light' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
                About
                </p>
              </Link>
           
           
              <Link to='/services' className='text-reset fw-light' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
              Services
                </p>
              </Link>
          
            
              <Link to='/pricing' className='text-reset fw-light' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
               Pricing
               </p>
              </Link>
           
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 justify-content-center w3-padding-large'>
          <h6 className='w3-margin-bottom fw-bold'>RESOURCES</h6>
            <p style={{fontSize:'14px'}}>
              <Link to='/blog' className='text-reset' onClick={scrollToTop} >
               Blog
              </Link>
            </p>
            <p style={{fontSize:'14px'}}>
            <Link to='/album' className='text-reset' onClick={scrollToTop} >
                Album
              </Link>
            </p>
            <p style={{fontSize:'14px'}}>
              <a href='http://carolwargo.github.io/realestate' className='text-reset' onClick={scrollToTop} >
                Real Estate
              </a>
            </p>
            <p style={{fontSize:'14px'}}>
              <Link to='sidenav' className='text-reset' onClick={scrollToTop} >
               Price Menu
              </Link>
            </p>
            
          </MDBCol>


          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 mb-md-0 flex-column justify-content-center w3-padding-large'>
           <h6 className='fw-bold'>CONTACT</h6>
           
            <p style={{fontSize:'14px'}}>
              <MDBIcon icon="home" className="me-2" />
              Huntingtown, MD
            </p>
            <p style={{fontSize:'14px'}} >
           
              <a href='mailto:carolwargo.dev@gmail.com' 
              className='text-reset'>
                     <MDBIcon icon="envelope" className="me-2" />
              Email
              </a>
            </p>
            <p style={{fontSize:'14px'}} >
            <a href='tel:+4437711726'className='text-reset'>
            <MDBIcon icon="phone-alt" className="me-2" />
              Call
</a>
            </p>
            <button className="mt-2 w3-button w3-text-light-grey w3-padding w3-round-xxlarge" 
              style={{backgroundColor:'#FF385C', fontSize:'14px'}}>
              <Link to="/contact#contact"
                  className="text-white button"
                  onClick={scrollToTop}
                >
                Contact
                </Link>
              </button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    <hr />
    {/** 
    <section className='text-center d-flex justify-content-center w3-padding-large border-bottom'>
      <div className='mx-auto justify-content-center w3-margin-left'>
      <a href='tel:+4437711726' className='me-4 text-reset'>
      <MDBIcon icon="phone-alt" />

        </a>
        <a href='mailto:carolwargo.dev@gmail.com' className='me-4 text-reset'>
        <MDBIcon icon="envelope" />
        </a>
    
        <a href='https://www.linkedin.com/in/carol-wargo-35021baa/' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='https://github.com/carolwargo' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>
      */}
    <section className='d-flex justify-content-center w3-padding-large border-bottom'>
      <div className='d-none d-lg-block ' >
      <p style={{fontSize:'12px', fontWeight:'light'}}> © 2023    
        <a className='text-white' href='https:carolwargo.github.io/one-page-demo'  style={{fontSize:"12px"}}> Two
            <span style={{fontFamily:"Dancing Script"}}>Faced</span>
              </a>
        </p>
      </div>

    </section>
    </MDBFooter> 
  </div>
  </motion.div>
  );
}