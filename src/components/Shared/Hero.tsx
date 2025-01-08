import { Box, Container, Heading, HStack, Image, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import BrazilianTesouroNacionalIcon from '@/components/Icons/BrazilianTesouroNacional';
import SolanaHorizontal from '@/components/Icons/SolanaHorizontal';
import MorganCreek from '@/components/Icons/MorganCreek';
import KhizaIcon from '@/components/Icons/KhizaIcon';
import LiqiLogo from '@/components/Icons/Liqi';
import LogoIcon from '@/components/Icons/LogoIcon';
import { FC } from 'react';

export const Hero: FC<{ heroNumber: number }> = ({ heroNumber = 3 }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const stackSpacing = useBreakpointValue({ base: 4, md: 8 });
  const logoSize = useBreakpointValue({ base: 24, md: 32 });
  const partnerLogoSizes = {
    morganCreek: useBreakpointValue({ base: { width: 100, height: 52 }, md: { width: 168, height: 88 } }),
    khiza: useBreakpointValue({ base: { width: 64, height: 52 }, md: { width: 112, height: 88 } }),
    liqi: useBreakpointValue({ base: { width: 96, height: 54 }, md: { width: 128, height: 72 } }),
    solana: useBreakpointValue({ base: { width: 146, height: 59 }, md: { width: 195, height: 78 } }),
    tesouro: useBreakpointValue({ base: { width: 80, height: 80 }, md: { width: 112, height: 112 } }),
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
          filter={heroNumber === 8 ? 'invert(1) brightness(0.15)' : 'brightness(0.2)'}
          mixBlendMode="luminosity"
          loop
          src={`/assets/hero-${heroNumber}.mp4`}
        />

        <Box
          position="absolute"
          top="0%"
          left="0%"
          transform="translate(-50%, -50%)"
          w="100vw"
          h="100vh"
          bg="radial-gradient(circle, {colors.brand.900} 0%, {colors.brand.900} 25%, rgba(0,0,0,.5) 100%)"
          filter="blur(100px)"
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
          filter="blur(100px)"
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
          h={{ base: 'calc(100vh - 72px)', md: 'calc(100vh - 144px)' }}
          justify="center"
          gap={stackSpacing}
          mt={{ base: '36px', md: '72px' }}
        >
          <VStack flex={1} align="center" justify="center" gap={stackSpacing}>
            <LogoIcon width={logoSize} height={logoSize} />
            <Heading
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              lineHeight={1.1}
              textAlign="center"
              fontWeight="400"
              px={2}
            >
              Official data for the
              <br />
              <Text
                as="span"
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                lineHeight={1.1}
                textAlign="center"
                fontWeight="600"
                color="brand.50"
              >
                tokenized economy
              </Text>
            </Heading>
            <Text textStyle="subtitle" textAlign="center" px={{ base: 4, md: 0 }}>
              Delivering accurate, verified, and official data to power{isMobile ? '' : <br />}
              real-world asset tokenization.{' '}
            </Text>

            <HStack gap={4} flexDir={{ base: 'column', sm: 'row' }} w={{ base: 'full', sm: 'auto' }}>
              <Button size="xl" w={{ base: 'full', sm: 'auto' }}>
                Talk to an expert
              </Button>
              <Button variant="ghost" size="xl" w={{ base: 'full', sm: 'auto' }}>
                Data hub
              </Button>
            </HStack>
          </VStack>
          <VStack w="full" justify="center" align="center" maxW="4xl" gap={{ base: 0, md: 2 }} pb={4} zIndex={5}>
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
              filter="grayscale(1)"
              my={0}
              transition="opacity 0.3s ease-in-out"
              opacity={0.5}
              _hover={{ opacity: 1 }}
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
            >
              <VStack gap={0} align={{ base: 'center', md: 'flex-start' }} justify="center">
                <HStack justify="center" flexWrap="wrap" gap={{ base: 2, md: 4 }} flex={1}>
                  <MorganCreek {...partnerLogoSizes.morganCreek} />
                  <Image
                    src="/assets/outlier-ventures.png"
                    alt="Outlier Ventures"
                    filter="invert(1)"
                    h={{ base: '18px', md: '22px' }}
                  />
                  <KhizaIcon {...partnerLogoSizes.khiza} />
                </HStack>
                <HStack justify="center" flexWrap="wrap" gap={{ base: 0, md: 4 }} mt={{ base: -2, md: -6 }}>
                  <LiqiLogo {...partnerLogoSizes.liqi} />
                  <Image
                    src="/assets/firmeza-token.avif"
                    alt="Firmeza Token"
                    filter="invert(1) brightness(2)"
                    h={{ base: '32px', md: '42px' }}
                  />
                  <SolanaHorizontal {...partnerLogoSizes.solana} />
                </HStack>
              </VStack>
              <BrazilianTesouroNacionalIcon {...partnerLogoSizes.tesouro} />
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
