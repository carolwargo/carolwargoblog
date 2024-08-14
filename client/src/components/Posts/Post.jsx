import React from 'react';
import Algo from '../../assets/images/Posts/Algos.jpeg';

const Posts = () => {
return (
    <div className="post">
<div className="container pb-3">
<div className="row-entry g-4 row d-flex justify-content-center align-items-center mb-3">
  <div className="col-sm-12 col-md-6 col-lg-6">
    <img src={Algo} alt="algo" style={{width:'100%'}} className="rounded shadow"/>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6">
    <div className="container">
    <h1 className="title" >Full-house battery backup coming later....</h1>
    <p style={{fontSize:'11px', color:'#777', marginTop:'0', marginBottom:'0px'}} > <a href="/" className="author" style={{color:'#555', fontWeight:'bold'}}>Carol Wargo</a> <span className="text-reset"> 2024-03-30 16:44</span></p>
    <p style={{fontSize:'15px', marginTop:'5px'}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam adipisci soluta vitae iure totam similique maxime dolores porro tenetur dolor. Hic dolorum facilis repellendus fugit dignissimos sequi harum earum culpa.</p>
  </div>
  </div>
</div>
</div>
</div>
);
}
export default Posts;