import React from 'react';
import {Link} from 'react-router-dom';
import './ClientPortfolioStyles.css';
import { CgWebsite } from "react-icons/cg";
import NovaAshArtistry from "../../assets/novaashartistry.png";
import ExoSolariaUnion from "../../assets/exosolariaunion.png";
import JoeyJoeyImaginationStation from "../../assets/joeyjoeyimaginationconcept.png";
import EBookStore from "../../assets/ebookstore.jpg";
import GodsofAumin from "../../assets/godsofaumin.png";

const ClientPortfolio = () => {
    return  (
        <div className='clientportfolio'>
          <div className='container'>
            <div className='content'>
                <h2><CgWebsite className='iconmain' /><span> Website</span> Portfolio</h2>
                
                <div className='contentcard'>
                  <h3>Nova Ash Artistry</h3>
                  <Link to='https://novaashartistry.com/'>
                  <img src={NovaAshArtistry} style={{ width: "100%", height: "84%" }} alt="Nova Ash Artistry" title="Nova Ash Artistry" />
                  </Link>
                </div>

                <div className='contentcard'>
                <h3>Exo Solaria Union</h3>
                <Link to='https://exosolariaunion.com/'>
                  <img src={ExoSolariaUnion} style={{ width: "100%", height: "84%" }} alt="Exo Solaria Union" title="Exo Solaria Union" />
                </Link>
                </div>

                <div className='contentcard'>
                <h3>Joey Joey Imagination Station</h3>
                  <img src={JoeyJoeyImaginationStation} style={{ width: "100%", height: "84%" }} alt="Joey Joey Imagination Station" title="Joey Joey Imagination Station" />
                
                </div>

                <div className='contentcard'>
                <h3>E-Book Store</h3>
                  <img src={EBookStore} style={{ width: "100%", height: "84%" }} alt="E-Book Store" title="E-Book Store" />
                
                </div>

                <div className='contentcard'>
                <h3>Gods of Aumin</h3>
                  <img src={GodsofAumin} style={{ width: "100%", height: "84%" }} alt="Gods of Aumin" title="Gods of Aumin" />
                
                </div>

                
                
            </div>

          </div>

          

          </div>

    )
}

export default ClientPortfolio;