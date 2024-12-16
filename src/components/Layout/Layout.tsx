import { Header } from './Header';
import { Footer } from './Footer';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';
import { AOSInit } from '../AOS';

export function BaseLayout() {
  return (
    <>
      <AOSInit />
      <Header />
      <Box as="main" maxW="100vw">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
