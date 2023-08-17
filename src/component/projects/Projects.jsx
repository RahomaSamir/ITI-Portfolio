import React from 'react'
import './projects.css';

import img1 from '/Users/User/Desktop/Portfolio/portfolio/src/assets/r.jpg'
import img2 from '/Users/User/Desktop/Portfolio/portfolio/src/assets/rr.png'
import img3 from '/Users/User/Desktop/Portfolio/portfolio/src/assets/rrr.png'

const ProjectsSection = () => {
    return (
    <>  
    <div className="container">
      <h1> Projects :</h1>
        <div className="row">
          <div className="col-4">
            <div className="box">
              <div className="project-image">
              <img src={img1} alt="Image" className="img-fluid" />
            </div></div>
          </div>
          <div className="col-4">
            <div className="box">
            <div className="project-image">
            <img src={img2} alt="Image" className="img-fluid" />
            </div></div></div>
          <div className="col-4">
            <div className="box">
            <div className="project-image">
            <img src={img3} alt="Image" className="img-fluid" />
            </div></div></div>
        </div>
        </div>
            </>
    
    );
};
export default ProjectsSection;