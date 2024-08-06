import React, { useState, useRef, useEffect } from 'react';
import Article1 from '../components/Blog/Articles/Article1';
import Article2 from '../components/Blog/Articles/Article2';
import Article3 from '../components/Blog/Articles/Article3';
import Algo from '../assets/images/Posts/Algos.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPage = () => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const articleRef = useRef(null);

  const articles = [
    { id: 1, component: <Article1 /> },
    { id: 2, component: <Article2 /> },
    { id: 3, component: <Article3 /> }
  ];

  const scrollToTop = () => {
    if (articleRef.current) {
      articleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [currentArticleIndex]);

  const handlePrevious = () => {
    setCurrentArticleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentArticleIndex((prevIndex) => Math.min(prevIndex + 1, articles.length - 1));
  };

  const handleRecentPostClick = (index) => {
    setCurrentArticleIndex(index);
  };

  
  return (
    <div className='w3-padding-64'
    
    style={{ 
      backgroundImage: 'linear-gradient(#cce6e6, white,  #e6f2f2,  #cce6e6, white, #e6f2f2)'}}>
     
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol
          id="aperture"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
        </symbol>
        <symbol id="cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
        <symbol id="chevron-right" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </symbol>
      </svg>
      <div className='container w3-margin-top w3-padding-16'>    
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
    </div>  
      <main className="container w3-margin-top w3-padding-16">
        <div className="row g-5">
          <div className="col-md-8 w3-margin-top">
            {/* Pagination */}
            <div className="container-fluid d-flex justify-content-center  w3-padding-large">
            <div className="container-fluid d-flex flex-column align-items-center">
        
        {/* Render selected article */}
        <div className='article-render w3-padding-48'>
        <div className="w-100 w3-padding-48" ref={articleRef}>
          {articles[currentArticleIndex].component}
        </div>
 </div>
  
        {/* Pagination controls */}
        <div className="d-flex w3-padding-48 w3-margin-bottom justify-content-between">
          <button
              className="btn btn-dark mx-1"
            style={{ paddingRight: '1.1rem', paddingLeft: '1.1rem' }}
            onClick={handlePrevious}
            disabled={currentArticleIndex === 0}
          >
            Previous
          </button>
          <button
            className="btn btn-dark mx-1"
            onClick={handleNext}
            disabled={currentArticleIndex === articles.length - 1}
            style={{ paddingRight: '2.2rem', paddingLeft: '2.2rem' }}
          >
            Next
          </button>
        </div>
      </div>
            </div>
          </div>
          {/**Article rendering container */}
          <div className="col-md-4 w3-margin-top w3-padding-top-48">
            <div className="position-sticky w3-padding-large w3-white" style={{ top: '2rem' }}>
             {/** 
              <div className="p-2 mb-3 bg-body-tertiary rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                  Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.
                </p>
              </div>
*/}
              {/**Recent Posts container */}
              <div className="recent-posts-container w3-margin-top">
                <h4 className="fst-italic text-black">Recent posts</h4>
                <ul className="list-unstyled">
                  <li>
                    <div
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      onClick={() => handleRecentPostClick(0)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={Algo} alt="algo" className='w-50 shadow-lg rounded w3-hover-opacity'/>
                   
                      <div className="col-lg-8">
                        <h6 className="mb-0">Article 1</h6>
                        <small className="text-body-secondary">January 15, 2024</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      onClick={() => handleRecentPostClick(1)}
                      style={{ cursor: 'pointer' }}
                    >
                                           <img src={Algo} alt="algo" className='w-50 shadow-lg rounded w3-hover-opacity'/>
                      <div className="col-lg-8">
                        <h6 className="mb-0">Article 2</h6>
                        <small className="text-body-secondary">January 14, 2024</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      onClick={() => handleRecentPostClick(2)}
                      style={{ cursor: 'pointer' }}
                    >
                       <img src={Algo} alt="algo" className='w-50 shadow-lg rounded w3-hover-opacity'/>
                      <div className="col-lg-8">
                        <h6 className="mb-0">Article 3</h6>
                        <small className="text-body-secondary">January 13, 2024</small>
                      </div>
                    </div>
                       {/*container end for tags Header*/}
                <div className="border-top w3-padding-top-24">
                <h4 className="fst-italic text-black mb-2">Tags</h4>
                  {" "}
                  {/*container start for tags*/}
                  <p className='w3-margin-top'>
                    <span className="w3-tag w3-black w3-margin-bottom">
                      Travel
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      New York
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      London
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      IKEA
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      NORWAY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      DIY
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      Ideas
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      Baby
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      Family
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      News
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      Clothing
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      Shopping
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      Sports
                    </span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom mx-1">
                      Games
                    </span>
                  </p>
              </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
