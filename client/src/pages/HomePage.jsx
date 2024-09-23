import React from 'react';
import { useNavigate } from 'react-router-dom';
import CityBG from '../assets/images/CityBG.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


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
    <b>THE POWER OF DATA:</b> <br /> <span className='w3-text-pink' style={{fontSize:'24px'}}><i>TRANSFORMING INSIGHTS INTO ACTION</i></span>
    </h1>
          <p>
         Data is more than just numbers—it’s the key to unlocking your website’s full potential. By harnessing the power of data, you gain a deeper understanding of your audience, their behavior, and the performance of your online presence. 
          </p>
          {/* This invaluable resource empowers you to make informed decisions, optimize strategies, and drive impactful results. Discover how data-driven insights can be the catalyst for growth, innovation, and success in the ever-evolving digital world. */}
</div>
<div className='row justify-content-center align-items-center py-2'>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card' onClick={() => handleCardClick(0)}>
          <img src={CityBG} alt='blog' className='w-100'/>
          <div className='card-body'>
            <div className='card-title'><h4><b>Getting Started with Data 
            Analytics: 
              The Foundation of Website Optimization</b></h4></div>
            <div className='card-text'>
            <p style={{fontSize:'14px'}}>Collecting data is the essential first step in enhancing your website. Data reveals critical facts like user behavior and coding issues, offering actionable insights that guide the optimization process and improve user experience.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card' onClick={() => handleCardClick(1)}>
          <img src={CityBG} alt='blog' className='w-100'/>
          <div className='card-body'>
          <div className='card-title'><h4><b>Interpreting Data: How to 
            Identify Opportunities for Improvement</b></h4></div>
            <div className='card-text'>
            <p style={{fontSize:'14px'}}>Learn how to effectively read and analyze data to pinpoint areas needing improvement on your website. This guide will help you recognize patterns, set actionable goals, and create a strategic plan to execute those improvements.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card' onClick={() => handleCardClick(2)}>
          <img src={CityBG} alt='blog' className='w-100'/>
          <div className='card-body'>
          <div className='card-title'><h4><b> Five Key Focus Areas: The Foundation of Website 
            Optimization</b></h4></div>
            <div className='card-text'>
            <p style={{fontSize:'14px'}}>Discover the five essential 
              categories of data analytics that every website owner 
              should understand. Learn what each category reveals about 
              your site and how to leverage these insights to drive 
              better performance and decision-making</p>
            </div>
          </div>
        </div>
    </div>  
</div>
<div className='row justify-content-center align-items-center py-2'>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card' onClick={() => handleCardClick(3)}>
          <img src={CityBG} alt='blog' className='w-100'/>
          <div className='card-body'>
            <div className='card-title'><h4><b>Understanding Algorithms</b></h4></div>
            <div className='card-text'>
            <p style={{fontSize:'14px'}}> Algorithms are at the heart of computer science. They are a set of instructions or rules designed to perform a specific task or solve a particular problem.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card' onClick={() => handleCardClick(4)}>
          <img src={CityBG} alt='blog' className='w-100'/>
          <div className='card-body'>
          <div className='card-title'><h4><b>Interpreting Data: How to 
            Identify Opportunities for Improvement</b></h4></div>
            <div className='card-text'>
            <p style={{fontSize:'14px'}}>Learn how to effectively read and analyze data to pinpoint areas needing improvement on your website. This guide will help you recognize patterns, set actionable goals, and create a strategic plan to execute those improvements.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card' onClick={() => handleCardClick(5)}>
          <img src={CityBG} alt='blog' className='w-100'/>
          <div className='card-body'>
          <div className='card-title'><h4><b>Getting Started with Data Analytics: Five Key Focus Areas</b></h4></div>
            <div className='card-text'>
            <p style={{fontSize:'14px'}}>Discover the five essential 
              categories of data analytics that every website owner 
              should understand. Learn what each category reveals about 
              your site and how to leverage these insights to drive 
              better performance and decision-making</p>
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


