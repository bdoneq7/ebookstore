import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import './ServicesStyles.css';
import {Link} from 'react-router-dom';

const Services = () => {
    return  (
        <div className='services'>
            <div className='container'>
                <div className='content'>
                    <h2><FaReact className='iconmain' /><span> Web Development</span> Services</h2>
                    <p>
                    8LeggedFreak offers 4 Web Development Packages and 4 Post-Development Website Maintenance Plans.<br/>
                    <br/>
                    Web Development Packages require paying a 50% Deposit of the total package price before work can begin
                    on your website. After your website has been completed according to our agreed upon contract, then you
                    will pay the remaining 50% of the web development package cost.
                    <br/>
                    <br/>
                    Web Development Packages begin at $1,399<br/>
                    <br/>
                    Post-Development Website Maintenance Plans begin at $99/month<br/>
                   
                    </p>
                    <div>
                        <button>
                        <Link to='/servicespackages'>
                            Learn More <FaArrowRightLong className='iconbutton' />
                        </Link>    
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services;