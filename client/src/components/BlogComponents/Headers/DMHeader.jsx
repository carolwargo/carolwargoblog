import React from 'react';
import PolySlide from '../../../assets/images/PolySlide.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <style>
        {`
          .bg-image {
            margin-top: 40px;
            background-image: url(${PolySlide}); /* Set the background image here */
            display: flex; /* Use flexbox for centering */
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white; /* Set text color */
            background-size: cover; /* Ensure the image covers the area */
            background-position: center; /* Center the background image */
            min-height: 90vh; /* Use min-height for larger screens */
          }

          @media (max-width: 768px) {
            .bg-image {
              min-height: 50vh; /* Adjust min-height for smaller screens */
            }
          }

          @media (min-width: 769px) {
            .bg-image {
              min-height: 100vh; /* Increase min-height for larger screens */
            }
          }
        `}
      </style>

      <div className='p-5 text-center bg-image'>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100%' }}>
          <div className='container w3-padding-32 d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
            <h1  
                className="mt-2 mb-0 fw-bold w3-hide-small"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  lineHeight: "1",
                  fontSize: '4rem', // Responsive font size
                }}>Welcome to</h1>
              <h1 className='w3-hide-small'>
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
       
              <h1 className='mb-3 w3-hide-large'
                  style={{
                    color: "red",
                    textShadow: "2px 2px 4px white",
                    fontWeight: "bold",
                    fontSize: "3rem",
                  }}
                  >SLIDE SHOW</h1>
              <h4 className='mb-3'>VISUALS CONTENT MADE SIMPLE-</h4>
              <div>
             
                  <Link to='/' className='btn'  role='button' style={{backgroundColor:'red', color:'white', fontWeight:'bold'}}>
                  SEE SLIDES
        </Link>
                </div>
                <br />           
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
