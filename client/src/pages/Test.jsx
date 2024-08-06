// HomePage.jsx
import React from 'react';
import SubscribeForm from '../components/Forms/SubscribeForm';
//import MeWhite from '../assets/images/MeWhite.png';
import "bootstrap/dist/css/bootstrap.min.css";


const HomePage = () => {

  return (

<div className="home" id="home">
<SubscribeForm  />
</div>
)
}

export default HomePage;










/*import React, { useState, useRef, useEffect } from 'react';
import Article1 from '../components/Blog/Articles/Article1';
import Article2 from '../components/Blog/Articles/Article2';
import Article3 from '../components/Blog/Articles/Article3';
import Algo from '../assets/images/Posts/Algos.jpeg';
import CityBG from '../assets/images/CityBG.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogArticle3 = () => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const articleRef = useRef(null);

  const articles = [

    { id: 3, component: <Article3 /> },
    { id: 1, component: <Article1 /> },
    { id: 2, component: <Article2 /> },
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
      <div className='container w3-margin-top' >    
<div className="text-center">  
    <h1 className="display-4 fw-normal text-body-emphasis">
    Topics and Opions
    </h1>
          <p>
            Choosing the best cloud storage provider is difficult. This guide
            shows the 10 top cloud storage services for cost, safety and
            collaboration features, covering personal cloud storage and business
            file storage solutions.
          </p>
</div>
    <div className='row justify-content-center align-items-center py-2' >
        <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card'
           onClick={handleRecentPostClick}
           disabled={currentArticleIndex === 2}>
            <img src={CityBG} alt='blog' className='w-100'/>
            <div  className='card-body'>
              <div className='card-title'>Card title</div>
              <div className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer Read full article...
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div className='card'
          onClick={handleRecentPostClick}
          disabled={currentArticleIndex === 0}>
            <img src={CityBG} alt='blog' className='w-100'/>
            <div  className='card-body'>
              <div className='card-title'>Article1</div>
              <div className='card-text'>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer Read full article...
                  </div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div className='card'
           onClick={handleRecentPostClick}
           disabled={currentArticleIndex === 1}>
            <img src={CityBG} alt='blog' className='w-100'/>
            <div  className='card-body'>
              <div className='card-title'>Card title</div>
              <div className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer Read full article...
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className='row justify-content-center align-items-center py-2' >
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div className='card'>
            <img src={CityBG} alt='blog' className='w-100'/>
            <div  className='card-body'>
              <div className='card-title'>Card title</div>
              <div className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer Read full article...
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div className='card'>
            <img src={CityBG} alt='blog' className='w-100'/>
            <div  className='card-body'>
              <div className='card-title'>Card title</div>
              <div className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer Read full article...
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div className='card'>
            <img src={CityBG} alt='blog' className='w-100'/>
            <div  className='card-body'>
              <div className='card-title'>Card title</div>
              <div className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer Read full article...
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>  
      <main className="container w3-margin-top">
        <div className="row g-5">
          <div className="col-md-8 w3-margin-top">
        
            <div className="container-fluid d-flex justify-content-center  w3-padding-large">
            <div className="container-fluid d-flex flex-column align-items-center">
        
  
        <div className='article-render'>
        <article className="blog-post text-black">
                <img src={Algo} alt="algorithm" className='w-100 w3-margin-bottom shadow-lg rounded' />
                <h2 className="display-4 link-body-emphasis my-4"><b>Understanding Algorithms</b></h2>
                <p className="blog-post-meta">July 27, 2024 by <a href="/">Carol</a></p>

                <p>Algorithms are at the heart of computer science. They are a set of instructions or rules designed to perform a specific task or solve a particular problem.</p>
                <hr/>
                <p>Algorithms can range from simple, such as sorting a list of numbers, to highly complex, such as those used in artificial intelligence and machine learning. Understanding algorithms is crucial for anyone interested in computer science, software development, and related fields.</p>
                <h2>Blockquotes</h2>
                <p>Here’s a famous quote about algorithms:</p>
                <blockquote className="blockquote">
                    <p>"Algorithms + Data Structures = Programs." - Niklaus Wirth</p>
                </blockquote>
                <p>Algorithms are not only used in computing but also in everyday tasks like cooking recipes, solving puzzles, and following a series of steps to complete a task efficiently.</p>
                <h3>Common Algorithms</h3>
                <p>There are several types of algorithms that are commonly used in computer science:</p>
                <ul>
                    <li>Sorting Algorithms: Bubble sort, Merge sort, Quick sort</li>
                    <li>Search Algorithms: Linear search, Binary search</li>
                    <li>Graph Algorithms: Dijkstra's algorithm, A* search algorithm</li>
                </ul>
                <p>Each type of algorithm serves a different purpose and is selected based on the problem at hand and the efficiency required.</p>
                <h3>Algorithm Efficiency</h3>
                <p>One of the key aspects of algorithms is their efficiency, which is often measured in terms of time complexity and space complexity:</p>

                <dl className=''>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Time Complexity</dt>
                    <dd className='w3-margin-left'>Measures the amount of time an algorithm takes to complete as a function of the size of the input data.</dd>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Space Complexity</dt> 
                    <dd className='w3-margin-left'>Measures the amount of memory an algorithm uses as a function of the size of the input data.</dd>
                </dl>
                <h2>Practical Applications</h2>
                <p>Algorithms are used in a wide range of applications, including:</p>
                <ul>
                    <li><strong>Data Analysis</strong>: Algorithms help in analyzing large datasets to find patterns and insights.</li>
                    <li><strong>Machine Learning</strong>: Algorithms are used to train models that can make predictions or decisions based on data.</li>
                    <li><strong>Optimization</strong>:  Algorithms help in finding the most efficient solutions to complex problems, such as route planning or resource allocation.</li>
                </ul>
                <p>Algorithms play a critical role in the development of software and systems that we rely on every day.</p>
                <h2>Learning Algorithms</h2>
                <p>To get started with learning algorithms, consider studying:</p>
                <p>Introductory courses in computer science, such as those offered by online platforms like Coursera, edX, and Khan Academy, can provide a strong foundation in algorithms and data structures.</p>
                <pre><code>Example code block</code></pre>
                <p>Practicing coding problems on websites like LeetCode, HackerRank, and CodeSignal can help reinforce your understanding and improve your problem-solving skills.</p>
            </article>
            <article className="blog-post text-black">
                <img src={Algo} alt="algorithm" className='w-100 w3-margin-bottom shadow-lg rounded' />
                <h2 className="display-4 link-body-emphasis my-4"><b>Understanding Social Media Algorithms</b></h2>
                <p>Social media algorithms determine what content users see on platforms like Facebook, Instagram, Twitter, and TikTok. These algorithms are designed to enhance user engagement by showing relevant and interesting content.</p>
                <hr/>
                <p>These algorithms are complex and constantly evolving, incorporating various factors to personalize each user's feed. Understanding how they work can help users and content creators optimize their social media strategies.</p>
                <h2>Blockquotes</h2>
                <p>Here's a notable quote about social media algorithms:</p>
                <blockquote className="blockquote">
                    <p>"Algorithms are opinions embedded in code." - Cathy O'Neil</p>
                </blockquote>
                <p>Social media algorithms are designed to prioritize content that is most likely to engage users, based on their past behavior and interactions.</p>
                <h3>Key Factors in Social Media Algorithms</h3>
                <p>Several key factors influence how social media algorithms rank and display content:</p>
                <ul>
                    <li><strong> Engagement: </strong> Likes, comments, shares, and other forms of interaction signal to the algorithm that content is valuable.</li>
                    <li> <strong>Relevance:</strong> Content that aligns with a user's interests and past behavior is prioritized.</li>
                    <li><strong>Timeliness:</strong> Newer posts are often given higher priority, though older content can resurface if it gains new engagement.</li>
                </ul>
                <p>Understanding these factors can help users and creators maximize their visibility and engagement on social media platforms.</p>                
                <h3>Algorithm Transparency</h3>
                <p>Many social media platforms offer some transparency into how their algorithms work. For example:</p>
                <dl className=''>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Facebook</dt>
                    <dd className='w3-margin-left'>Facebook's algorithm prioritizes content from friends and family, as well as posts that receive high engagement.</dd>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Instagram</dt>
                    <dd className='w3-margin-left'>Instagram's algorithm favors recent posts, interactions, and accounts with which users frequently engage.</dd>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Twitter</dt>
                    <dd className='w3-margin-left'>Twitter's algorithm highlights tweets based on relevance, engagement, keywords, and the user's interactions.</dd>
                </dl>
                <h2>Practical Applications</h2>
                <p>Here are some practical tips for leveraging social media algorithms:</p>
                <ul>
                    <li><strong>Engage with Your Audience</strong>: Respond to comments, messages, and engage with other users' content.</li>
                    <li><strong>Post Consistently</strong>: Regular posting can help keep your content fresh and relevant in users' feeds.</li>
                    <li><strong>Use Hashtags:</strong> Hashtags can help categorize your content and increase its discoverability.</li>
                </ul>
                <p>By understanding and leveraging social media algorithms, users and content creators can enhance their online presence and engagement.</p>
                <h2>Learning More</h2>
                <p>To dive deeper into social media algorithms, consider following resources and tips:</p>
                <h3>Sub-heading</h3>
                <p>Many social media platforms provide insights and tips on their blogs and help centers. Following industry experts and staying updated with platform changes can also provide valuable information.</p>
                <pre><code>Example code block</code></pre>
                <p>Experimenting with different types of content and analyzing engagement metrics can help you understand what works best for your audience.</p>
            </article>
        <div className="w-100 w3-padding-top-32" ref={articleRef}>
          {articles[currentArticleIndex].component}
        </div>
 </div>
  
   
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
          <div className="col-md-4 w3-margin-top">
            <div className="position-sticky w3-padding-large w3-white" style={{ top: '2rem' }}>
            
              <div className="p-2 mb-3 bg-body-tertiary rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                  Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.
                </p>
              </div>

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
                      onClick={() => handleRecentPostClick(0)}
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
                 
                <div className="border-top w3-padding-top-24">
                <h4 className="fst-italic text-black mb-2">Tags</h4>
                  {" "}
             
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

export default BlogArticle3;
*/