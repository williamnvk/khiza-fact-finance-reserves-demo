import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router';
import React from 'react';
import { Home } from './pages/Home/Home.tsx';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { BaseLayout } from './components/Layout/Layout.tsx';
import { HelmetProvider } from 'react-helmet-async';
import '@fontsource/lato/index.css';
import Careers from './pages/Careers/Careers.tsx';
import Features from './pages/Features/Features.tsx';
import AboutUs from './pages/AboutUs/AboutUs.tsx';
import UseCases from './pages/UseCases/UseCases.tsx';
import DataProviders from './pages/DataProviders/DataProviders.tsx';
import DataHub from './pages/DataHub/DataHub.tsx';

import ReactGA from 'react-ga4';
const TRACKING_ID = 'G-RJFBTSN4WT';
ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index element={<Home />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/features" element={<Features />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/data-providers" element={<DataProviders />} />
              <Route path="/data-hub" element={<DataHub />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
