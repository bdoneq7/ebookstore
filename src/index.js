import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AboutBrianPage from './routes/AboutBrianPage';
import ClientPortfolioPage from './routes/ClientPortfolioPage';
import ServicesPackagesPage from './routes/ServicesPackagesPage';
import HowItWorksPage from './routes/HowItWorksPage';
import ContactPage from './routes/ContactPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/aboutbrian' element={<AboutBrianPage />} />
      <Route path='/clientportfolio' element={<ClientPortfolioPage />} />
      <Route path='/servicespackages' element={<ServicesPackagesPage />} />
      <Route path='/howitworks' element={<HowItWorksPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);



