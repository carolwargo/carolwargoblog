import React from "react";
import SlideDemo from "../assets/images/SlideDemo.png";    


const DemoPage = () => {

    return (
        <div>
            <div className="container w3-padding-large py-4">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-6">
                    <h1>Slide Sample</h1>
                    <h4>What makes an effective visual</h4>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-6">
               
     <img src={SlideDemo} alt="demo diagram" className="w-100"/>
              
     </div>
                </div>
   
        </div>
        </div>
    );
    };

export default DemoPage;