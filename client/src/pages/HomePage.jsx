import React from 'react';
import { useNavigate } from 'react-router-dom';
import CityBG from '../assets/images/CityBG.png';
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = ({ setCurrentArticleIndex }) => {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    setCurrentArticleIndex(index);
    navigate('/blog');
  };

  return (

<div className="home" id="home">
<div className="w3-content w3-container  w3-padding-64">
  {/* 
   <div className='container-fluid' > 
          <div className="row d-flex justify-content-center align-items-center  w3-margin-top">
            <div className="col-lg-7">
              <h1 className="mb-4"><b>ABOUT ME</b></h1>
              <h4 className=" fw-light my-2"><em>"I'm Carol Wargo, and welcome to my corner of the internet! I am a full-stack software developer & UX Designer that specializes in customer servicing & support, committed to collaboration, bringing 
                together diverse perspectives to tackle challenges effectively. With over 20 years of experience, I bring a wealth of knowledge and expertise to every project 
                I undertake."</em></h4>
            </div>
            <div className="col-lg-5">
              <img src={MeWhite} className="w3-round w3-image shadow mx-auto d-block" alt="Me" width="500" height="333" />
            </div>
          </div>
</div>
 */} 
<div className='container-fluid' >    
<div className="text-center">  
    <h1 className="display-4 fw-normal text-body-emphasis">
    Topics and Opions
    </h1>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quos dolores iusto id doloribus iure? Molestiae quasi dolore, harum non quam, ea necessitatibus ad natus nulla quas ipsum dolorem laborum? Choosing the best cloud storage provider is difficult. This guide
            shows the 10 top cloud storage services for cost, safety and
            collaboration features, covering personal cloud storage and business
            file storage solutions.
          </h4>
</div>
<div className='row justify-content-center align-items-center py-2'>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card' onClick={() => handleCardClick(0)}>
          <img src={CityBG} alt='blog' className='w-100'/>
          <div className='card-body'>
            <div className='card-title'>NAVIGATE TO ARTICLE 1</div>
            <div className='card-text'>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card' onClick={() => handleCardClick(1)}>
          <img src={CityBG} alt='blog' className='w-100'/>
          <div className='card-body'>
            <div className='card-title'>NAVIGATE TO ARTICLE 2</div>
            <div className='card-text'>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card' onClick={() => handleCardClick(2)}>
          <img src={CityBG} alt='blog' className='w-100'/>
          <div className='card-body'>
            <div className='card-title'>NAVIGATE TO ARTICLE 3</div>
            <div className='card-text'>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </div>
          </div>
        </div>
    </div>  
</div>
</div>
</div>
<div className="container-fluid">   
  <div className="container">

<nav className="w3-bar w3-pink d-flex w3-padding-large  justify-content-center"
  style={{fontSize:'18px', color:'white'}}>
    <a
      className="me-3 py-2  text-decoration-underline"
      href="/"     
      style={{fontSize:'18px', color:'white'}}
    >
     Social Media
    </a>
    <a
      className="me-3 py-2  text-decoration-underline"
      href="/"
      style={{fontSize:'18px', color:'white'}}
    >
    Email 
    </a>
    <a
          className="me-3 py-2  text-decoration-underline"
      href="/"
      style={{fontSize:'18px', color:'white'}}
    >
    Coding
    </a>
    <a
          className="me-3 py-2  text-decoration-underline"
      href="/"
      style={{fontSize:'18px', color:'white'}}
    >
    Digital Trends
    </a>
    <a
          className="me-3 py-2  text-decoration-underline"
      href="/"
      style={{fontSize:'18px', color:'white'}}
    >
     Graphics
    </a>
  </nav>
  <div className="sub-header my-5 pb-md-4 mx-auto text-center">
    
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
</div>
</div>
)
}

export default HomePage;


