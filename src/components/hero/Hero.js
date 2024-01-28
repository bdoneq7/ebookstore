import React from 'react';
import {Link} from 'react-router-dom';
import { FaFileCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import './HeroStyles.css';

const Hero = () => {
    return  (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    
                <h2><FaFileCode className='iconmain'/><span> Custom</span> Web Development</h2>
                  
                    <p>Brian Done, the owner of 8LeggedFreak, will build you a quality custom react website that will help you achieve your website dreams!<br/>
                    <br/>
                    Brian will give you the personalized attention required to translate your website vision into reality and provide the on-going support
                    to keep your website updated and keep you satisifed.
                    <br/>
                    <br/>
                    Website Packages are conveniently offered to ensure a clear and straight-forward web development experience.
                    <br/>
                    <br/>
                     8LeggedFreak
                        web packages also include the creation of your own custom logo, setup of your domain name (you must purchase your domain name independently)
                        , mobile responsive design, an EmailJS contact form, social media icons, photo and video embed, stripe payment integration, search engine optimization, search engine submission, 
                        and web accessiblity. Your website will be hosted on netlify servers, you will have access to netlify traffic analytics, and post website maintenance.   </p>
                    <div>
                    <Link to='/howitworks'>
                        <button>Learn More <FaArrowRightLong className='iconbutton'/></button>
                    </Link>    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;
