import React from 'react';
import './AboutBrianStyles.css';
import { BsPersonBoundingBox } from "react-icons/bs";

const AboutBrian = () => {
    return  (
        <div className='aboutbrian'>
            <div className='container'>
                <div className='content'>
                    
                    <h2><BsPersonBoundingBox className='iconmain' /><span>About</span> Brian</h2>

                    <div className="circlecontainer">
                    <div className="circle">
                        
                    </div>
                    </div>

                    <div className="description">
                        Brian is a Dynamic and Creative Web Developer than has a passion for excellence!<br/>
                        <br/>
                        He has been creating websites for 20+ years and holds a Bachelor Degree in
                        Multimedia & Web Development, and a Full Stack Web Development Certificate.
                    </div>

                    
                </div>
            </div>

        </div>
    )
}

export default AboutBrian;