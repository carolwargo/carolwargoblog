import React, { useRef, useEffect } from 'react';
import Slide1 from '../components/BlogComponents/Slides/Slide1';
import Article1 from '../components/BlogComponents/Articles/Article1';
import Article2 from '../components/BlogComponents/Articles/Article2';
import Article3 from '../components/BlogComponents/Articles/Article3';
import Article4 from '../components/BlogComponents/Articles/Article4';
import Article5 from '../components/BlogComponents/Articles/Article5';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPage = ({ currentArticleIndex, setCurrentArticleIndex }) => {
  const articleRef = useRef(null);

  const articles = [
    { component: <div><Slide1 /></div> },
    { component: <div><Article1 /></div> },
    { component: <div><Article2 /></div> },
    { component: <div><Article3 /></div> },
    { component: <div><Article4 /></div> },
    { component: <div><Article5 /></div> }
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
    
    <div className='w3-padding'>
        <div className="row g-2 justify-content-center w3-margin-top">
          <div className="col-md-9 justify-content-center">
            {/* Pagination */}
          {/* Render selected article */}
                <div className='article-render'>
                  <div className="w-100" ref={articleRef}>
                    {articles[currentArticleIndex].component}
                  </div>
                </div>
  
                {/* Pagination controls */}
                <div className="d-flex w3-padding-48">
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
          
          {/** Article rendering container */}
          <div className="col-md-3 justify-content-center" >
         
  <div className="position-sticky">
<div>

   {/*Recent Posts container */}
    <div className="card w3-black">
<div className='w3-padding-large w3-padding-top-16 justify-content-center align-items-center'>
<div className="about mb-5">
<h3 className="mb-3 mt-3">ABOUT</h3>
                <p className="mb-0" style={{fontSize:'14px'}}>
                  Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.
                </p>
</div>
<h3 className="mb-2 mt-5">RECENT POSTS</h3>
      <ul className="list-unstyled">
        <li>
          <div
            className="d-flex flex-column justify-content-center align-items-center flex-md-row gap-3 align-items-start align-items-md-center py-3 text-decoration-none"
            onClick={() => handleRecentPostClick(0)}
            style={{ cursor: 'pointer' }}
          >
            <div className="col-12 col-md-12">
              <h6 className="mb-0">Understanding SEO: The Process, Analytics, and a Sample Strategy</h6>
              <small className="w3-text-light-gray">January 15, 2024</small>
            </div>
          </div>
        </li>
        <li>
          <div
            className="d-flex flex-column justify-content-center align-items-center flex-md-row gap-3 align-items-start align-items-md-center py-3 text-decoration-none border-top"
            onClick={() => handleRecentPostClick(1)}
            style={{ cursor: 'pointer' }}
          >
              <div className="col-12 col-md-12">
              <h6 className="mb-0">Getting Started with Data Analytics: <br />Five Key Focus Areas</h6>
              <small className="w3-text-light-gray">July 24, 2024</small>
            </div>
          </div>
        </li>
        <li>
          <div
            className="d-flex flex-column justify-content-center align-items-center flex-md-row gap-3 align-items-start align-items-md-center py-3 text-decoration-none border-top"
            onClick={() => handleRecentPostClick(2)}
            style={{ cursor: 'pointer' }}
          >
                  <div className="col-12 col-md-12">
              <h6 className="mb-0">Start with the Data: The Foundation of Website Optimization</h6>
              <small className="w3-text-light-gray">July 23, 2024</small>
            </div>
          </div>
        </li>
        <li>
          <div
            className="d-flex flex-column justify-content-center align-items-center flex-md-row gap-3 align-items-start align-items-md-center py-3 text-decoration-none border-top"
            onClick={() => handleRecentPostClick(3)}
            style={{ cursor: 'pointer' }}
          >
                  <div className="col-12 col-md-12">
              <h6 className="mb-0">Understanding Algorithms</h6>
              <small className="w3-text-light-gray">August 5, 2024</small>
            </div>
          </div>
        </li>
        <li>
          <div
            className="d-flex flex-column justify-content-center align-items-center flex-md-row gap-3 align-items-start align-items-md-center py-3 text-decoration-none border-top"
            onClick={() => handleRecentPostClick(4)}
            style={{ cursor: 'pointer' }}
          >
                  <div className="col-12 col-md-12">
              <h6 className="mb-0">Social Media Martketing Behaviors</h6>
              <small className="w3-text-light-gray">August 5, 2024</small>
            </div>
          </div>
        </li>
 
      </ul>
      </div>
    </div>
  </div>
  </div>
</div>
</div>
    
    </div>
  );
};

export default BlogPage;