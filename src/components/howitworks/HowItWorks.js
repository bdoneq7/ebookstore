import React from 'react';
import {Link} from 'react-router-dom';
import './HowItWorksStyles.css';
import { FcProcess } from "react-icons/fc";
import { GoPackage } from "react-icons/go";
import { GrHostMaintenance } from "react-icons/gr";
import { FaWpforms } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { GrVmMaintenance } from "react-icons/gr";

const HowItWorks = () => {
    return  (
        <div className='howitworks'>
          <div className='container'>
            <div className='content'>
                <h2><FcProcess className='iconmain' />How It Works</h2>
                <p>
                8 Legged Freak is your one-stop shop for developing your new website and we are excited to be bring your vision
                to life! We will walk you through how our web development process works to ensure you know exactly what to expect.
                </p>
                <h3>
                < GoPackage size='25' className='iconstep' /> STEP 1: Choose Your <Link to='/servicespackages'>Web Development Package</Link>
                </h3>
                <h3>
                < GrHostMaintenance size='25' className='iconstep' /> STEP 2: Choose Your <Link to='/servicespackages'>Web Hosting & Maintenance Plan</Link>
                </h3>
                <h3>
                < FaWpforms size='25' className='iconstep' /> STEP 3: Fill Out Website Needs Evaluation <Link to='/contact'>Contact Form</Link>
                </h3>
                <h3>
                < MdMeetingRoom size='25' className='iconstep' /> STEP 4: In Person or Zoom Meeting with Brian to get to know each other.<br/>
                 <br/>
                 We will begin the
                  Discovery Phase to discuss all of the elements of the website project scope to define success, 
                  and work on goal identification. 
                </h3>
                <h3>
                < FaFileContract size='25' className='iconstep' /> STEP 5: Sign Web Development, Hosting, and Maintenance Contract
                </h3>
                <h3>
                < MdAttachMoney size='25' className='iconstep' /> STEP 6: <Link to='/servicespackages'>Pay 50% Deposit of Chosen Web Development Package</Link>
                </h3>
                <h3>
                < CgWebsite size='25' className='iconstep' /> STEP 7: Brian completes Web Development Stages. This includes 4 Phases.<br/>
                <br/>
                  A. We work together to create a Netlify Hosting Account for your website with the appropriate Netlify License, and setup Netlify Billing.<br/>
                  B. Creative Phase: Brian creates a website concept, prototype, layout, and interface.<br/>
                  C. Development Phase: Time to start coding and build the actual website! Brian will give you
                  regular updates to make sure we stay in sync.<br/>
                  D. Pre-Launch Phase: Extended testing of all website features to make sure everything is working
                  perfectly and to make sure it's just right.
                </h3>
                <h3>
                < MdAttachMoney size='25' className='iconstep' /> STEP 8: <Link to='/servicespackages'>Pay remaining 50% cost of Chosen Web Development Package</Link>
                </h3>
                <h3>
                < MdAttachMoney size='25' className='iconstep' /> STEP 9: <Link to='/servicespackages'>Subscribe to Chosen Monthly Maintenance Plan</Link>
                </h3>
                <h3>
                < CgWebsite size='25' className='iconstep' /> STEP 10: Your Website will now become live on the Internet & your website files will be provided to you
                </h3>
                <h3>
                < GrVmMaintenance size='25' className='iconstep' /> STEP 11: Brian will update and maintain your website as needed per your Chosen Monthly Maintenance Plan. This
                  includes making routine tweaks and updates as necessary. 
                </h3>
                <div>
                
                    
                
                    
                </div>
            </div>

          </div>

        </div>
    )
}

export default HowItWorks;