import { Header } from './Header';
import { Footer } from './Footer';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';
import { AOSInit } from '../AOS';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import { ColorModeProvider } from '../ui/color-mode';

export function ReserveBaseLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <ColorModeProvider>
      <AOSInit />
      <Header />
      <Box as="main" maxW="100vw" role="main" aria-label="Main Content">
        <Outlet />
      </Box>
      <Footer />
    </ColorModeProvider>
  );
}
