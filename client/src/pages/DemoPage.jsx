import React from "react";
import SlideDemo from "../assets/images/SlideDemo.png";    


const DemoPage = () => {

    return (
        <div>
        <h1> Demo Page</h1>
     <img src={SlideDemo} alt="demo diagram" className="w-100"/>
        </div>
    );
    };

export default DemoPage;