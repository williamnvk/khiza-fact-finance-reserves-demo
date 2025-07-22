import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router';
import React from 'react';
import './i18n';
import { Home } from './pages/Home/Home.tsx';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { BaseLayout } from './components/Layout/Layout.tsx';
import '@fontsource/lato/index.css';
import Careers from './pages/Careers/Careers.tsx';
import Features from './pages/Features/Features.tsx';
import AboutUs from './pages/AboutUs/AboutUs.tsx';
import UseCases from './pages/UseCases/UseCases.tsx';
import DataProviders from './pages/DataProviders/DataProviders.tsx';
import DataHub from './pages/DataHub/DataHub.tsx';

import ReactGA from 'react-ga4';
import { dataHub } from './data/data-hub.ts';
import Reserves from './pages/Reserves/index.tsx';
import { Reports } from './pages/Reserves/reports.tsx';
import { ReserveBaseLayout } from './components/Layout/ReserveBaseLayout.tsx';

const TRACKING_ID = 'G-RJFBTSN4WT';
ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index element={<Home />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/features" element={<Features />} />
              <Route path="/use-cases/:useCase" element={<UseCases />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/data-providers" element={<DataProviders />} />
              <Route path="/data-hub" element={<DataHub data={dataHub} />} />
              <Route path="/reserves" element={<Reserves />} />
            </Route>
            <Route path="/reserves/:client" element={<ReserveBaseLayout />}>
              <Route index element={<Reports />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
