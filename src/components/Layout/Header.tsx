import { Box, Button, HStack, IconButton, useDisclosure, Heading, Badge } from '@chakra-ui/react';
import { FC } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import LogoIcon from '../Icons/LogoIcon';
import { Link, NavLink } from 'react-router';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <>
      <Box position="fixed" top={0} zIndex={100} w="full" h="72px" m={0} borderRadius="md" overflow="hidden">
        <HStack
          justify="space-between"
          align="center"
          py={4}
          gap={8}
          pr={8}
          pl={4}
          w="full"
          position="relative"
          backdropFilter="blur(5px)"
          transition="all 0.5s ease-in-out"
          boxShadow="2xl"
        >
          <HStack align="center" justify="center" gap={0} as={Link} to="/">
            <Heading size="md">FACT</Heading>
            <LogoIcon width="12px" height="auto" />
            <Heading size="md" fontWeight="light">
              FINANCE
            </Heading>
          </HStack>

          <HStack display={{ base: 'none', md: 'flex' }} justify="flex-start" align="center" flex={1}>
            <Button as={NavLink} to="/" variant="navbar">
              Home
            </Button>
            <Button as={NavLink} to="/data-hub" variant="navbar" disabled>
              Data Hub{' '}
              <Badge px={3} variant="outline">
                SOON
              </Badge>
            </Button>
            <Button as={NavLink} to="/features" variant="navbar">
              Features
            </Button>
            <Button as={NavLink} to="/use-cases" variant="navbar">
              Use Cases
            </Button>
            <Button as={NavLink} to="/data-providers" variant="navbar" disabled>
              Data Providers{' '}
              <Badge px={3} variant="outline">
                SOON
              </Badge>
            </Button>
            <Button as={NavLink} to="/about" variant="navbar">
              About Us
            </Button>
          </HStack>

          <Button variant="solid">Docs</Button>

          <IconButton display={{ base: 'flex', md: 'none' }} aria-label="Open menu" onClick={onToggle} variant="ghost">
            {open ? <XIcon /> : <MenuIcon />}
          </IconButton>
        </HStack>
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
      </Box>
    </>
  );
};
