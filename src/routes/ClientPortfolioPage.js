import React from 'react';

import Navbar from '../components/navbar/Navbar';
import ClientPortfolio from '../components/clientportfolio/ClientPortfolio';
import Footer from '../components/footer/Footer';

const ClientPortfolioPage = () => {
    return  (
        <>
            <Navbar />
            <ClientPortfolio />
            <Footer />
        </>
    )
}

export default ClientPortfolioPage;