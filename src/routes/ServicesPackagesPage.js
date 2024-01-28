import React from 'react';

import Navbar from '../components/navbar/Navbar';
import ServicesPackages from '../components/servicespackages/ServicesPackages';
import StripePricingTable from '../components/stripepricingtable//StripePricingTable';
import StripePricingTableFinal from '../components/stripepricingtablefinal//StripePricingTableFinal';
import StripePricingTableHost from '../components/stripepricingtablehost//StripePricingTableHost';
import Footer from '../components/footer/Footer';

const ServicesPackagesPage = () => {
    return  (
        <>
            <Navbar />
            <ServicesPackages />
            <StripePricingTable />
            <StripePricingTableFinal />
            <StripePricingTableHost />
            <Footer />
        </>
    )
}

export default ServicesPackagesPage;