import React from 'react';
import Algo from "../../../assets/images/Algos.jpeg";
import { FaShare } from "react-icons/fa6";
import { MdOutlineAddLink } from "react-icons/md";

const Article4 = () => {
  const articleTitle = "Understanding Algorithms";
  const articleURL = window.location.href;
  const articleImage = Algo;

  const handleShare = () => {
      if (navigator.share) {
          navigator.share({
              title: articleTitle,
              text: 'Check out this article!',
              url: articleURL,
              files: [
                  new File([articleImage], "analytics.jpg", {
                      type: "image/jpeg",
                  })
              ]
          }).then(() => {
              console.log('Thanks for sharing!');
          }).catch((error) => {
              console.error('Something went wrong sharing the article:', error);
          });
      } else {
          alert('Sharing is not supported on this browser.');
      }
  };

  const handleCopyLink = () => {
      navigator.clipboard.writeText(articleURL).then(() => {
          alert('Link copied to clipboard!');
      }).catch((error) => {
          console.error('Could not copy text:', error);
      });
  };

    return (
        <div className='article4' id='article4'>
            {/**UNDERSTANDING ALGORITHMS */}
            <style>
                {`
                .blog-post p {
                    font-size: 13px;
                }
                .share-buttons {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                }
                .share-buttons button {
                    padding: 10px 20px;
                    font-size: 14px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .share-button {
                    background-color: #007bff;
                    color: white;
                }
                .copy-link-button {
                    background-color: #28a745;
                    color: white;
                }
                `}
            </style>
            
            <article className="blog-post text-black">
                <img src={Algo} alt="algorithm" className='w-100 shadow-lg rounded' />
                <h2 className="display-4 link-body-emphasis my-4"><b>{articleTitle}</b></h2>
                <p className="blog-post-meta">July 27, 2024 by <a href="/blog">author</a></p>

                <p>Algorithms are at the heart of computer science. They are a set of instructions or rules designed to perform a specific task or solve a particular problem.</p>
                <hr/>
                <p>Algorithms can range from simple, such as sorting a list of numbers, to highly complex, such as those used in artificial intelligence and machine learning. Understanding algorithms is crucial for anyone interested in computer science, software development, and related fields.</p>
             
                <blockquote className="blockquote">
                    <h4><i>"Algorithms + Data Structures = Programs."</i> <span style={{fontSize:'14px'}}>- Niklaus Wirth</span></h4>
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
        
            <div className="share-buttons w3-padding-16">
                    <button className="share-button btn btn-black shadow px-2 btn-sm" onClick={handleShare}>share  <FaShare style={{fontSize:'1rem'}}/></button>
                    <button className="copy-link-button btn btn-black shadow px-2 btn-sm mx-1" onClick={handleCopyLink}> copy <MdOutlineAddLink  style={{fontSize:'1rem'}}/></button>
              </div>
              <hr/>
      </div>
    );
}

export default Article4;