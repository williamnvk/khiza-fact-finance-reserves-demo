import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router';
import React from 'react';
import { Home } from './pages/Home/Home.tsx';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { BaseLayout } from './components/Layout/Layout.tsx';
import { HelmetProvider } from 'react-helmet-async';
import '@fontsource/lato/index.css';
import Careers from './pages/Careers/Careers.tsx';
import About from './pages/About/About.tsx';
import Features from './pages/Features/Features.tsx';
import Team from './pages/Team/Team.tsx';
import UseCases from './pages/UseCases/UseCases.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/features" element={<Features />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/team" element={<Team />} />   
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
