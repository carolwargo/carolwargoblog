import React from 'react';
import Algo from '../../assets/images/Posts/Algos.jpeg';

export default function Post({title, summary, content, cover, createdAt}) {
return (
    <div className="post">
<div className="container pb-3">
<div className="row-entry g-4 row d-flex justify-content-center align-items-center mb-3">
  <div className="col-sm-12 col-md-6 col-lg-6">
    <div className='image'>
    <img src={Algo} alt="algo" style={{width:'100%'}} className="rounded shadow"/>
  </div>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6">
    <div className="texts">
    <div className="container">
    <h1 className="title">{title}</h1>
    <p 
    className='info'
    style={{
      fontSize:'11px', color:'#777', marginTop:'0', marginBottom:'0px'}} > 
    <a href="/" 
    className="author" 
    style={{
      color:'#555', fontWeight:'bold'}}>
        Carol Wargo
        </a> <span> <time className="text-reset"> {createdAt} </time></span>
        </p>
    <p className='summary' style={{fontSize:'15px', marginTop:'5px'}} >
      {summary}
    </p>
  </div>
  </div>
  </div>
</div>
</div>
</div>
);
}