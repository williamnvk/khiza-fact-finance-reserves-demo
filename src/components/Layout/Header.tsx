import { Box, Button, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import LogoIcon from '../Icons/LogoIcon';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { open, onToggle } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 72);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box position="fixed" top={0} zIndex={5} w="100vw" h="72px">
        <Box w="full" position="relative">
          <HStack
            justify="space-between"
            align="center"
            py={4}
            gap={8}
            px={4}
            position="relative"
            backdropFilter="blur(8px)"
            bg={open ? 'white' : 'rgba(255, 255, 255, 0.5)'}
            _dark={{ bg: open ? 'gray.950' : 'rgba(0, 0, 0, 0.1)' }}
            transition="all 0.5s ease-in-out"
            boxShadow={isScrolled ? '0 0 25px rgba(0, 0, 0, 0.1)' : 'none'}
          >
            <HStack align="center" justify="center">
              <LogoIcon />
            </HStack>

            <HStack display={{ base: 'none', md: 'flex' }} justify="flex-start" align="center" flex={1}>
              <Button variant="subtle">Home</Button>
              <Button variant="plain">Data Hub</Button>
              <Button variant="plain">Features</Button>
              <Button variant="plain">Use Cases</Button>
              <Button variant="plain">Data Providers</Button>
              <Button variant="plain">Team</Button>
            </HStack>

            <HStack display={{ base: 'none', md: 'flex' }} justify="flex-start" align="center">
              <Button variant="primary">Entrar</Button>
              <Button variant="ghost">Criar conta</Button>
            </HStack>

            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              onClick={onToggle}
              variant="ghost"
            >
              {open ? <XIcon /> : <MenuIcon />}
            </IconButton>
          </HStack>
        </Box>
      </Box>

      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        w="100vw"
        bg="blackAlpha.500"
        h="100%"
        opacity={open ? 1 : 0}
        pointerEvents={open ? 'auto' : 'none'}
        transition="opacity 0.3s ease-in-out"
        onClick={onToggle}
        zIndex={2}
      />

      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg="white"
        _dark={{ bg: 'gray.950' }}
        w="100vw"
        transform={open ? 'translateY(72px)' : 'translateY(-100%)'}
        transition="transform 0.3s ease-in-out"
        zIndex={2}
        p={4}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Button variant="subtle">Home</Button>
        <Button variant="plain">Data Hub</Button>
        <Button variant="plain">Features</Button>
        <Button variant="plain">Use Cases</Button>
        <Button variant="plain">Data Providers</Button>
        <Button variant="plain">Team</Button>
      </Box>
    </>
  );
};
