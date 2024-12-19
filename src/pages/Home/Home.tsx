import { Box, Center, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Faq } from '@/components/Shared/Faq';
import { SEO } from '@/components/Common/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Chains from '@/components/Shared/Chains';
import CubesGrid from '@/components/Shared/CubesGrid';
import { TitleSection } from '@/components/ui/title-sectiont';
import HeroBackground from '@/components/Shared/HeroBackground';
import HeroPortal from '@/components/Shared/HeroPortal';
import BrazilianTesouroNacionalIcon from '@/components/Icons/BrazilianTesouroNacional';
import SolanaIcon from '@/components/Icons/SolanaIcon';
import LogoIcon from '@/components/Icons/LogoIcon';
import { CodeBlock } from '@/components/Shared/CodeBlock';
import SolanaHorizontal from '@/components/Icons/SolanaHorizontal';
import MorganCreek from '@/components/Icons/MorganCreek';
import { AppleIcon, FileIcon, LandmarkIcon, PlugIcon, TrophyIcon } from 'lucide-react';
import KhizaIcon from '@/components/Icons/KhizaIcon';
import LiqiLogo from '@/components/Icons/Liqi';
import { V } from 'node_modules/react-router/dist/production/fog-of-war-BDQTYoRQ.d.mts';
import { FeaturesSection } from '@/components/Shared/FeaturesSection';

export const Home = () => {
  return (
    <>
      <SEO />

      <Box pos="relative">
        <HStack w="full" minH="calc(100vh + 72px)" pos="relative">
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="full"
            h="full"
            bg="radial-gradient(circle, transparent 0%, {colors.brand.950} 25%, transparent 100%)"
            filter="blur(200px)"
            zIndex={1}
          />
          <HeroBackground />
          <HeroPortal />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="25vw"
            h="100vh"
            bg="radial-gradient(circle, {colors.brand.950} 0%, {colors.brand.800} 25%, rgba(0,0,0,.5) 100%)"
            filter="blur(100px)"
            zIndex={1}
          />
        </HStack>
        <Container pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="full" h="full" zIndex={1}>
          <VStack minH="calc(100vh - 72px)" justify="center" gap={8}>
            <LogoIcon width={32} height={32} />
            <Heading fontSize="6xl" lineHeight={1} textAlign="center" fontWeight="400">
              Official data for the
              <br />
              <Text as="span" fontSize="8xl" lineHeight={1} textAlign="center" fontWeight="600" color="brand.50">
                tokenized economy
              </Text>
            </Heading>
            <Text textStyle="subtitle" textAlign="center">
              Delivering accurate, verified, and official data to power <br />
              real-world asset tokenization.{' '}
            </Text>

            <HStack gap={4}>
              <Button size="xl">Talk to an expert</Button>
              <Button variant="ghost" size="xl">
                Data hub
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Box pb={16}>
        <Container>
          <TitleSection zIndex={5000}>
            <Heading textStyle="title">Trusted by</Heading>
            <Text textStyle="subtitle">Supported by key players and institutions driving blockchain innovation</Text>
          </TitleSection>
          <HStack
            gap={8}
            align="center"
            justify="center"
            filter="grayscale(1)"
            my={8}
            transition="opacity 0.3s ease-in-out"
            opacity={0.5}
            _hover={{ opacity: 1 }}
          >
            <BrazilianTesouroNacionalIcon width={132} height={132} />
            <VStack gap={0} align="flex-start" justify="center">
              <HStack justify="center" flexWrap="wrap" gap={8} flex={1}>
                <SolanaHorizontal width={200} height={88} />
                <MorganCreek width={224} height={88} />
                <KhizaIcon width={128} height={88} />
              </HStack>
              <HStack justify="center" flexWrap="wrap" gap={8}>
                <LiqiLogo width={128} height={44} />
                <Image src="/assets/outlier-ventures.png" alt="Outlier Ventures" filter="invert(1)" h="32px" />
                <Image src="/assets/firmeza-token.avif" alt="Firmeza Token" filter="invert(1)" h="44px" />
              </HStack>
            </VStack>
          </HStack>

          <Center pt={8}>
            <Button variant="outline">Get to know us</Button>
          </Center>
        </Container>
      </Box>

      <Box position="relative" my={8}>
        <Container borderRadius="4xl">
          <Box
            position="absolute"
            top="0%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="50%"
            height="25%"
            background="radial-gradient(circle at center, {colors.brand.800} 0%, transparent 100%)"
            pointerEvents="none"
            filter="blur(60px)"
            zIndex={1}
          />

          <Box
            position="absolute"
            bottom="25%"
            left="0%"
            transform="translate(-50%, -50%)"
            width="100%"
            height="100%"
            background="radial-gradient(circle at center, black 50%, transparent 100%)"
            pointerEvents="none"
            filter="blur(50px)"
            zIndex={-1}
            opacity={1}
          />

          <Box
            borderRadius="4xl"
            border="2px solid {colors.whiteAlpha.200}"
            boxShadow="2xl"
            as="video"
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            objectFit="cover"
            zIndex={-1}
            autoPlay
            muted
            filter="brightness(.4)"
            // mixBlendMode="luminosity"
            // bg="brand.500"
            // blendMode="soft-light"
            opacity={1}
            loop
            src="/assets/sphere-bg-1.mp4"
          />
          <VStack gap={4} w="full" align="center" p={16}>
            <TitleSection>
              <Text color="brand.300" fontWeight="600" letterSpacing={2}>
                WHAT WE DO
              </Text>
              <Heading textStyle="title">Enabling real-world data on the blockchain</Heading>
              <Text textStyle="subtitle" maxW="2xl" textAlign="center">
                A data layer connecting trusted, official data sources to tokenized assets, unlocking new financial
                solutions
              </Text>
            </TitleSection>

            <HStack gap={8} w="full" align="center" justify="center">
              <Box flex={1} data-aos="fade-up" data-aos-delay="300">
                <Center
                  mx="auto"
                  p={4}
                  w={16}
                  color="brand.300"
                  mb={14}
                  overflow="hidden"
                  pos="relative"
                  borderRadius="xl"
                >
                  <Box
                    position="absolute"
                    top="0%"
                    left="50%"
                    width="150%"
                    height="200%"
                    transform="translate(-50%, -50%) rotate(-15deg)"
                    background="linear-gradient({colors.brand.500} 0%, {colors.brand.900} 50%, transparent 100%)"
                    pointerEvents="none"
                    filter="blur(5px)"
                    zIndex={-1}
                  />
                  <LandmarkIcon width={32} height={32} />
                </Center>
                <Heading fontSize="3xl">Our data comes directly from official and reliable institutions</Heading>
              </Box>
              <Box color="brand.400" mt={32}>
                <LogoIcon width={32} height={32} />
              </Box>
              <Box flex={1} data-aos="fade-up" data-aos-delay="100" p={8}>
                <Center
                  mx="auto"
                  p={4}
                  w={16}
                  color="brand.300"
                  mb={14}
                  overflow="hidden"
                  pos="relative"
                  borderRadius="xl"
                >
                  <Box
                    position="absolute"
                    top="0%"
                    left="50%"
                    width="150%"
                    height="200%"
                    transform="translate(-50%, -50%) rotate(-15deg)"
                    background="linear-gradient({colors.brand.500} 0%, {colors.brand.900} 50%, transparent 100%)"
                    pointerEvents="none"
                    filter="blur(5px)"
                    zIndex={-1}
                  />
                  <PlugIcon width={32} height={32} />
                </Center>
                <Heading fontSize="3xl">An oracle connects off-chain data to blockchain ecosystems</Heading>
              </Box>
              <Box color="brand.400" mt={32}>
                <LogoIcon width={32} height={32} />
              </Box>
              <Box flex={1} data-aos="fade-up" data-aos-delay="200">
                <Center
                  mx="auto"
                  p={4}
                  w={16}
                  color="brand.300"
                  mb={14}
                  overflow="hidden"
                  pos="relative"
                  borderRadius="xl"
                >
                  <Box
                    position="absolute"
                    top="0%"
                    left="50%"
                    width="150%"
                    height="200%"
                    transform="translate(-50%, -50%) rotate(-15deg)"
                    background="linear-gradient({colors.brand.500} 0%, {colors.brand.900} 50%, transparent 100%)"
                    pointerEvents="none"
                    filter="blur(5px)"
                    zIndex={-1}
                  />
                  <FileIcon width={32} height={32} />
                </Center>
                <Heading fontSize="3xl">Oracles enable smart contracts to be executed using real-world data</Heading>
              </Box>
            </HStack>
            <Button variant="ghost">See our use cases</Button>
          </VStack>
        </Container>
      </Box>

      <Container my={16}>
        <Text textAlign="center" mb={4} color="whiteAlpha.500">
          Supported chains
        </Text>
        <Chains />
      </Container>
      <Box pos="relative">
        <FeaturesSection />
      </Box>

      <Box py={16}>
        <Container>
          <HStack align="center" justify="center" gap={16}>
            <VStack gap={4} align="flex-start">
              <TitleSection align="flex-start">
                <Text fontSize="sm" color="brand.300">
                  CALLING THE DEVS
                </Text>
                <Heading textStyle="title">Developers first</Heading>
                <Text fontSize="sm">
                  Integrate trusted, verified data effortlessly into your blockchain projects. Fact Finance provides
                  robust tools and APIs to empower tokenized assets and smart contracts with real-world official data.
                  Explore our documentation for step-by-step guides, API references, and integration examples on
                  blockchains like Ethereum, Solana, and Polygon.
                </Text>
              </TitleSection>
              <HStack gap={4}>
                <Button>Explore Documentation</Button>
                <Button variant="ghost">Contact Support</Button>
              </HStack>
            </VStack>

            <CodeBlock />
          </HStack>
        </Container>
      </Box>

      <Container
        as="section"
        maxW="5xl"
        id="faq"
        role="complementary"
        py={{ base: 8, md: 16 }}
        aria-labelledby="faq-heading"
        zIndex={5}
      >
        <VStack mb={{ base: 8, md: 16 }} gap={2}>
          <Heading id="faq-heading" textStyle="title">
            Frequently asked questions
          </Heading>
          <Text as="p" textStyle="subtitle">
            Find answers to common questions about Fact Finance
          </Text>
        </VStack>
        <Faq />
        <Center gap={2} mt={{ base: 4, md: 8 }}>
          <Text fontSize="smaller">Still have questions?</Text>
          <Link
            href="#" // TODO: Add link
            rel="noopener noreferrer"
            target="_blank"
            color="brand.500"
            fontSize="smaller"
          >
            Contact us
          </Link>
        </Center>
      </Container>

      <Box pos="relative">
        <Container gap={4} maxW="5xl">
          <Box
            position="absolute"
            inset="-25px"
            borderRadius="2xl"
            transform="rotate(-5deg) scale(0.8)"
            background="linear-gradient({colors.brand.800} 0%, {colors.brand.300} 50%, transparent 100%)"
            filter="blur(20px)"
            zIndex={-1}
          />
          <Box
            position="absolute"
            inset="0"
            bg="brand.500"
            filter="blur(40px)"
            transform="scale(0.9)"
            opacity={0.5}
            zIndex={4}
          />
          <VStack
            border="1px solid {colors.brand.900}"
            p={8}
            borderRadius="2xl"
            justify="center"
            align="center"
            position="relative"
            bg="black"
            zIndex={6}
          >
            <TitleSection flex={1}>
              <Heading textStyle="title" textAlign="center">
                Unlock the value of your
                <br />
                tokenized asset with official data
              </Heading>
              <Text maxW="2xl" textStyle="subtitle" textAlign="center">
                Our data layer connects trusted, official data sources to tokenized assets, unlocking new financial
                solutions
              </Text>
            </TitleSection>

            <HStack justify="center" gap={4}>
              <Button>Talk to an expert</Button>
              <Button variant="ghost">Data hub</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
