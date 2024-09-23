import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CityBG from '../../assets/images/CityBG.png';


function BlogCards() {

  return (
    <div className='container-fluid' >    
    <div className='row justify-content-center align-items-center' >
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div className='card'>
            <img src={CityBG} alt='blog' className='w-100'/>
            <div  className='card-body'>
              <div className='card-title'>Card title</div>
              <div className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
                longer.
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
                longer.
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>  
  );
}

export default BlogCards;