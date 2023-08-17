import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './aboutme.css';


const Aboutme = () => {
  
    return (

      <div>
         <div className="heading" ></div>
        
            <div className="container" >
                <h2>BIO:</h2>
                <p>Innovative Front End Developer with 7 months of experience building and maintaining responsive websites in the recruiting industry.</p>
                <p>Bachelor of Computer Science</p>
                <p>7 months of experience in Front End Development.</p>
                <a className="btn btn-primary" href="#" download>Download CV</a>
            </div>
        </div>
       
  );
};

export default  Aboutme;