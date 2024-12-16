import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router';
import React from 'react';
import { Home } from './pages/Home/Home.tsx';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { BaseLayout } from './components/Layout/Layout.tsx';
import { HelmetProvider } from 'react-helmet-async';
import "@fontsource/lato/index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index element={<Home />} />
          </Route>
          </Routes> 
        </BrowserRouter>
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
