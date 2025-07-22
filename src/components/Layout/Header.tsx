import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuIcon, XIcon as CloseIcon } from 'lucide-react';
import LogoIcon from '../Icons/LogoIcon';
import { Link, NavLink } from 'react-router';
import LinkedinIcon from '../Icons/LinkedinIcon';
import XIcon from '../Icons/XIcon';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { open, onToggle } = useDisclosure();
  const { t } = useTranslation();

  return (
    <>
      <Box
        as="header"
        position="fixed"
        className="omit-from-print"
        top={0}
        zIndex={100}
        w="100vw"
        h="72px"
        m={0}
        borderRadius="md"
        overflow="hidden"
      >
        <HStack
          as="nav"
          role="navigation"
          aria-label="Main navigation"
          justify="space-between"
          align="center"
          py={4}
          gap={{ base: 4, md: 8 }}
          px={{ base: 4, md: 8 }}
          w="full"
          position="relative"
          backdropFilter="blur(5px)"
          transition="all 0.3s ease-in-out"
          boxShadow="2xl"
        >
          <HStack align="center" justify="center" gap={0} as={Link} to="/" aria-label="Fact Finance Home">
            <Heading as="h1" size="md">
              FACT
            </Heading>
            <LogoIcon width="12px" height="12px" aria-hidden="true" />
            <Heading as="span" size="md" fontWeight="light">
              FINANCE
            </Heading>
          </HStack>

          <HStack display={{ base: 'none', md: 'flex' }} justify="flex-start" align="center" flex={1} gap={4}>
            <Button as={NavLink} to="/" variant="navbar">
              {t('nav.home')}
            </Button>
            <Button as={NavLink} to="/features" variant="navbar">
              {t('nav.features')}
            </Button>
            <Button as={NavLink} to="/use-cases" variant="navbar">
              {t('nav.useCases')}
            </Button>
            <Button as={NavLink} to="/data-hub" variant="navbar">
              {t('nav.dataHub')}
            </Button>
            <Button as={NavLink} to="/about" variant="navbar">
              {t('nav.about')}
            </Button>
            <Button as={NavLink} to="/reserves" variant="navbar">
              {t('nav.reserves')}
            </Button>
          </HStack>

          <HStack gap={2} display={{ base: 'none', md: 'flex' }}>
            <LanguageSelector />
            <Button
              variant="solid"
              as="a"
              href="https://docs.fact.finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('nav.docs')}
            </Button>
          </HStack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label={open ? t('common.closeMenu') : t('common.openMenu')}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={onToggle}
            variant="plain"
          >
            {open ? <CloseIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
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
        h="100vh"
        opacity={open ? 1 : 0}
        pointerEvents={open ? 'auto' : 'none'}
        transition="opacity 0.3s ease-in-out"
        onClick={onToggle}
        zIndex={2}
        id="mobile-menu-overlay"
        aria-hidden="true"
      />

      <VStack
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        position="fixed"
        top={0}
        right={0}
        bgGradient="to-r"
        gradientFrom="black"
        gradientTo="blackAlpha.900"
        w={{ base: '100vw', sm: '400px' }}
        h="100vh"
        transform={open ? 'translateX(0)' : 'translateX(100%)'}
        transition="transform 0.3s ease-in-out"
        zIndex={3}
        px={4}
        pt="72px"
        pb={24}
        gap={2}
        overflowY="auto"
        align="flex-start"
      >
        <VStack gap={2} align="flex-start" flex={1} mt={4} w="full">
          <Button as={NavLink} to="/" variant="navbar" onClick={onToggle}>
            {t('nav.home')}
          </Button>
          <Button as={NavLink} to="/features" variant="navbar" onClick={onToggle}>
            {t('nav.features')}
          </Button>
          <Button as={NavLink} to="/use-cases" variant="navbar" onClick={onToggle}>
            {t('nav.useCases')}
          </Button>
          <Button as={NavLink} to="/data-hub" variant="navbar" onClick={onToggle}>
            {t('nav.dataHub')}
          </Button>
          <Button as={NavLink} to="/about" variant="navbar" onClick={onToggle}>
            {t('nav.about')}
          </Button>
          <Button as={NavLink} to="/reserves" variant="navbar" onClick={onToggle}>
            {t('nav.reserves')}
          </Button>
          <Button as="a" href="https://docs.fact.finance/" target="_blank" rel="noopener noreferrer" variant="navbar">
            {t('nav.documentation')}
          </Button>
          <LanguageSelector />
        </VStack>
        <HStack
          justify={{ base: 'center', md: 'center' }}
          gap={4}
          align="center"
          as="nav"
          aria-label={t('footer.socialMedia')}
          w="full"
          mb={4}
        >
          <Link
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/fact-finance-oracle/"
            color="gray.950"
            _dark={{ color: 'gray.50' }}
            _hover={{ transform: 'translateY(-2px)', color: 'blue.400' }}
            transition="all 0.2s"
          >
            <LinkedinIcon width="24px" height="24px" />
          </Link>

          <Link
            title="X"
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/TheFactOracle"
            color="gray.950"
            _dark={{ color: 'gray.50' }}
            _hover={{ transform: 'translateY(-2px)', color: 'blue.400' }}
            transition="all 0.2s"
          >
            <XIcon width="24px" height="24px" />
          </Link>
        </HStack>
      </VStack>
    </>
  );
};
