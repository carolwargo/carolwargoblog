import React from 'react';
import Algo from "../../../assets/images/Algos.jpeg";
import { FaShare } from "react-icons/fa6";
import { MdOutlineAddLink } from "react-icons/md";

const Article3 = () => {
    const articleTitle = "Data: The Foundation of Website Optimization";
    const articleURL = window.location.href;
    const articleImage = Algo;

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: articleTitle,
                text: 'Check out this article on data analytics!',
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

        <div className='article3' id='article3'>
            {/**Start with the Data: The Foundation of Website Optimization */}
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
                <img src={Algo} alt="algo" className='w-100 shadow-lg rounded' />
                <h2 className="display-4 link-body-emphasis my-4"><b>{articleTitle}</b></h2>
                <p className="blog-post-meta">August 8, 2024 by <a href="/blog">author</a></p>

                <p>Collecting data is the essential first step in enhancing your website. Data reveals critical facts like user behavior and coding issues, offering actionable insights that guide the optimization process and improve user experience.</p>
                <hr/>
                <p>Data is more than just numbers; it's the bedrock upon which effective website optimization is built. Without data, you're essentially flying blind, making decisions based on guesswork rather than concrete evidence.</p>
             
                <blockquote className="blockquote">
                    <h4><i>"In God we trust; all others must bring data."</i> <span style={{fontSize:'14px'}}>- W. Edwards Deming</span></h4>
                </blockquote>
                <p>Understanding the data collected from your website is crucial for identifying areas that need improvement and making informed decisions that enhance user experience and drive conversions.</p>
                <h3>Why Data Collection is Crucial</h3>
                <p>Collecting data allows you to:</p>
                <ul>
                    <li>Identify patterns in user behavior.</li>
                    <li>Detect broken code or website issues.</li>
                    <li>Understand what content or features are most engaging to users.</li>
                </ul>
                <p>These insights form the foundation for any successful website optimization strategy.</p>
                <h3>How to Start Collecting Data</h3>
                <p>To begin collecting data, consider using tools like Google Analytics, which provides comprehensive insights into how users interact with your website. Ensure that you are tracking key metrics such as page views, bounce rates, and conversion rates.</p>

                <dl className=''>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>User Behavior</dt>
                    <dd className='w3-margin-left'>Understanding how users navigate your site can help you optimize layout and content for better engagement.</dd>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Technical Performance</dt> 
                    <dd className='w3-margin-left'>Tracking site speed, mobile-friendliness, and other technical factors is key to providing a smooth user experience.</dd>
                </dl>
                <h2>Moving Forward with Data-Driven Decisions</h2>
                <p>Once you have a solid foundation of data, use it to drive your optimization efforts. Focus on making incremental changes and measuring their impact, ensuring that your website continually improves.</p>
                <pre><code>{`<code snippet example>`}</code></pre>
                <p>By starting with data, you're setting the stage for a more successful, user-friendly, and effective website.</p>
             
                
                <div className="share-buttons w3-padding-16">
                    <button className="share-button btn btn-black shadow px-2 btn-sm" onClick={handleShare}>share  <FaShare style={{fontSize:'1rem'}}/></button>
                    <button className="copy-link-button btn btn-black shadow px-2 btn-sm mx-1" onClick={handleCopyLink}> copy <MdOutlineAddLink  style={{fontSize:'1rem'}}/></button>
              </div>
              <hr/>
            </article>
        </div>
    );
}

export default Article3;
