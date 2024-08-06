import React from 'react';
import Algo from '../../../assets/images/Posts/Algos.jpeg';

const Article3 = () => {

    return (
      <div className='article3' id='article3'>
        <style>
                {`
                .blog-post p {
                    font-size: 13px;
                }
                `}
            </style>
<article className="blog-post">
<img src={Algo} alt="algorithm" className='w-100 w3-margin-bottom shadow-lg rounded' />
<h2 className="display-4 link-body-emphasis my-4"><b>Article 3</b></h2>
  <p className="blog-post-meta">December 14, 2020 by 
    <a href="/">Chris</a></p>

  <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
  <ul>
    <li>First list item</li>
    <li>Second list item with a longer description</li>
    <li>Third list item to close it out</li>
  </ul>
  <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
</article>
</div> 
    );
}

export default Article3;