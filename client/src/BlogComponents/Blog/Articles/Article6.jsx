import React from 'react';
import Algo from '../../../assets/images/Posts/Algos.jpeg';

const Article6 = () => {

    return (
      
      <div className='article6' id='article6'>
           {/**NEED TITLE AND POST */}
      <style>
                {`
                .blog-post p {
                    font-size: 13px;
                }
                `}
            </style>
<article className="blog-post">
<img src={Algo} alt="algorithm" className='w-100 shadow-lg rounded' />
<h2 className="display-4 link-body-emphasis my-4"><b>Article 2</b></h2>
  <p className="blog-post-meta">December 23, 2020 by <a href="/">Jacob</a></p>

  <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
  <blockquote>
    <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
  </blockquote>
  <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
  <h3>Example table</h3>
  <p>And don't forget about tables in these posts:</p>
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Upvotes</th>
        <th>Downvotes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice</td>
        <td>10</td>
        <td>11</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>4</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Charlie</td>
        <td>7</td>
        <td>9</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Totals</td>
        <td>21</td>
        <td>23</td>
      </tr>
    </tfoot>
  </table>

  <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
</article>
</div> 
    );
}

export default Article6;