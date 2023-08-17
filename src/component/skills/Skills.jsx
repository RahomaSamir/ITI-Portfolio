import React from 'react';
import './skills.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const SkillsSection = () =>  {
    return (
        <>
        <section className="skills">
            <div className="container">
                <h2>Skills:</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="skill-title-js">JavaScript</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '70%', color: '#cbc9c9' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="skill-title-angular">Angular</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '50%', color: '#cbc9c9' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="skill-title-bootstrap">Bootstrap</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '60%', color: '#cbc9c9' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="skill-title-htmlcss">HTML & CSS</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '80%', color: '#cbc9c9' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h4 className="skill-title-htmlcss">Python</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '70%', color: '#cbc9c9' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="skill-title-bootstrap">React</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '60%', color: '#cbc9c9' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  );
};

export default SkillsSection;