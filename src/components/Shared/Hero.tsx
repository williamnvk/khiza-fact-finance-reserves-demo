import { Box, Container, Heading, HStack, Image, Text, VStack, useBreakpointValue, Badge } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import MorganCreek from '@/components/Icons/MorganCreek';
import KhizaIcon from '@/components/Icons/KhizaIcon';
import LiqiLogo from '@/components/Icons/Liqi';
import LogoIcon from '@/components/Icons/LogoIcon';
import { FC } from 'react';
import XDCLogo from '../Icons/XDCLogo';
import { Link } from 'react-router';

export const Hero: FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const stackSpacing = useBreakpointValue({ base: 4, md: 4, lg: 4, xl: 8 });
  const logoSize = useBreakpointValue({ base: 24, md: 32 });
  const partnerLogoSizes = {
    morganCreek: useBreakpointValue({ base: { width: 80, height: 42 }, md: { width: 168, height: 88 } }),
    khiza: useBreakpointValue({ base: { width: 52, height: 42 }, md: { width: 112, height: 88 } }),
    liqi: useBreakpointValue({ base: { width: 76, height: 44 }, md: { width: 112, height: 54 } }),
  };

  return (
    <Box pos="relative">
      <HStack w="auto" minH={{ base: '100vh', md: 'calc(100vh + 72px)' }}>
        <Box
          as="video"
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          zIndex={0}
          autoPlay
          muted
          playsInline
          filter="brightness(0.2)"
          mixBlendMode="luminosity"
          loop
          src={`/assets/hero.mp4`}
          loading="lazy"
          preload="none"
          aria-hidden="true"
        />

        <Box
          position="absolute"
          top="0%"
          left="0%"
          transform="translate(-50%, -50%)"
          w="100vw"
          h="100vh"
          bg="radial-gradient(circle, {colors.brand.900} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
          filter="blur(200px)"
          zIndex={1}
        />
        <Box
          position="absolute"
          top="100%"
          right="-50%"
          transform="translate(-50%, -50%)"
          w={{ base: '75vw', md: '50vw' }}
          h="100vh"
          bg="radial-gradient(circle, {colors.brand.950} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
          filter="blur(200px)"
          zIndex={1}
        />
        <Box
          position="absolute"
          top="100%"
          left="0%"
          transform="translate(-50%, -50%)"
          w="300vw"
          h={{ base: '5vh', md: '10vh' }}
          bg="radial-gradient(circle, {colors.black} 0%, {colors.black} 25%, rgba(0,0,0,.5) 100%)"
          filter="blur(30px)"
          zIndex={0}
        />
      </HStack>
      <Container
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="full"
        maxW={{ base: '100%', md: 'container.xl' }}
        px={{ base: 4, md: 8 }}
        h="full"
        zIndex={1}
      >
        <VStack
          align="center"
          h={{ base: 'full', md: 'calc(100vh - 72px)' }}
          justify="center"
          gap={stackSpacing}
          mt={{ base: '72px', md: '72px' }}
        >
          <VStack flex={1} align="center" justify="center" gap={stackSpacing}>
            <LogoIcon width={logoSize} height={logoSize} />
            <Heading
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
              lineHeight={1.1}
              fontWeight="400"
              w="full"
              textAlign={{ base: 'left', md: 'center' }}
              px={{ base: 0, md: 2 }}
            >
              Official data for the
              <br />
              <Text as="span" lineHeight={1.1} textAlign="center" fontWeight="600" color="brand.50">
                tokenized economy
              </Text>
            </Heading>
            <Text textStyle="subtitle" w="full" textAlign={{ base: 'left', md: 'center' }} px={{ base: 0, md: 4 }}>
              Delivering accurate, verified, and official data to power{isMobile ? '' : <br />}
              real-world asset tokenization.{' '}
            </Text>

            <HStack gap={4} flexDir={{ base: 'column', sm: 'row' }} w={{ base: 'full', sm: 'auto' }}>
              <Button
                size="xl"
                w={{ base: 'full', sm: 'auto' }}
                as="a"
                href="mailto:fernanda@fact.finance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to an expert
              </Button>
              <Button variant="ghost" size="xl" w={{ base: 'full', sm: 'auto' }} as={Link} to="/data-hub">
                Data hub
              </Button>
            </HStack>
          </VStack>
          <VStack
            w="full"
            justify="center"
            align="center"
            maxW={{ base: 'full', md: '4xl' }}
            gap={0}
            pb={{ base: 32, md: 0 }}
            zIndex={5}
          >
            <Text
              fontSize="sm"
              bgGradient="to-r"
              gradientFrom="brand.900"
              gradientTo="brand.400"
              bgClip="text"
              textTransform="uppercase"
              letterSpacing={2}
              fontWeight="600"
            >
              Trusted by
            </Text>
            <HStack
              flex={1}
              gap={{ base: 0, md: 4 }}
              align="center"
              justify="center"
              filter="grayscale(1) brightness(2)"
              my={0}
              transition="opacity 0.3s ease-in-out"
              // opacity={0.5}
              _hover={{ opacity: 1 }}
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
            >
              <VStack gap={0} align={{ base: 'center', md: 'flex-start' }} justify="center">
                <HStack justify="center" align="center" flexWrap="wrap" gap={{ base: 2, md: 4 }} flex={1}>
                  <MorganCreek {...partnerLogoSizes.morganCreek} />
                  <Image
                    src="/assets/outlier-ventures.webp"
                    alt="Outlier Ventures"
                    width={192}
                    height={22}
                    loading="lazy"
                    decoding="async"
                    filter="invert(1)"
                    w={{ base: '140px', md: '192px' }}
                    h={{ base: '16px', md: '22px' }}
                  />
                  <KhizaIcon {...partnerLogoSizes.khiza} />
                  <LiqiLogo {...partnerLogoSizes.liqi} />
                  <Image
                    src="/assets/firmeza-token.avif"
                    alt="Firmeza Token"
                    filter="invert(1) brightness(2)"
                    w={{ base: '84px', md: '122px' }}
                    h={{ base: '22px', md: '32px' }}
                  />
                  <XDCLogo width={72} height={72} />
                </HStack>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
